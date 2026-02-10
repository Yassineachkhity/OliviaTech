import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const createSeededRandom = (seed: number) => {
    let value = seed;
    return () => {
        value += 0x6d2b79f5;
        let t = value;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

const seedFromVector = (vector: [number, number, number]) => {
    return vector.reduce((acc, value, index) => {
        const scaled = Math.floor((value + 1) * 1000);
        return acc + scaled * (index + 1) * 1013;
    }, 0);
};

// Olive particle component
const OliveParticle: React.FC<{ position: [number, number, number]; delay: number }> = ({ position, delay }) => {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.elapsedTime + delay;
        ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.15;
        ref.current.rotation.x = t * 0.3;
        ref.current.rotation.z = t * 0.2;
    });

    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
                color="#3d5c3d"
                roughness={0.3}
                metalness={0.1}
                emissive="#1a3a1a"
                emissiveIntensity={0.2}
            />
        </mesh>
    );
};

// Leaf cluster component
const LeafCluster: React.FC<{
    position: [number, number, number];
    rotation?: [number, number, number];
    scale?: number;
}> = ({ position, rotation = [0, 0, 0], scale = 1 }) => {
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.elapsedTime;
        ref.current.rotation.x = rotation[0] + Math.sin(t * 0.5 + position[0]) * 0.05;
        ref.current.rotation.z = rotation[2] + Math.cos(t * 0.3 + position[1]) * 0.05;
    });

    const leaves = useMemo(() => {
        const rand = createSeededRandom(seedFromVector(position));
        const leafData = [];
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 0.3 + rand() * 0.2;
            leafData.push({
                position: [
                    Math.cos(angle) * radius,
                    rand() * 0.3 - 0.15,
                    Math.sin(angle) * radius,
                ] as [number, number, number],
                rotation: [
                    rand() * 0.5,
                    angle,
                    rand() * 0.3 - 0.15,
                ] as [number, number, number],
            });
        }
        return leafData;
    }, [position]);

    return (
        <group ref={ref} position={position} rotation={rotation} scale={scale}>
            {leaves.map((leaf, i) => (
                <mesh key={i} position={leaf.position} rotation={leaf.rotation}>
                    <planeGeometry args={[0.15, 0.06]} />
                    <meshStandardMaterial
                        color="#4a7c4a"
                        roughness={0.6}
                        side={THREE.DoubleSide}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
            ))}
        </group>
    );
};

// Main tree component
const OliveTree: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);
    /* const { viewport } = useThree(); */

    // Mouse tracking for tree rotation
    useFrame((state) => {
        if (!groupRef.current) return;

        const mouseX = state.pointer.x * 0.15;
        const mouseY = state.pointer.y * 0.1;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            mouseX,
            0.05
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            -mouseY * 0.5,
            0.05
        );
    });

    // Generate branch positions
    const branches = useMemo(() => [
        { pos: [0, 0.8, 0] as [number, number, number], rot: [0, 0, 0] as [number, number, number], scale: 1.2 },
        { pos: [-0.4, 0.5, 0.2] as [number, number, number], rot: [0.2, 0.5, -0.3] as [number, number, number], scale: 0.9 },
        { pos: [0.5, 0.4, -0.1] as [number, number, number], rot: [-0.1, -0.3, 0.4] as [number, number, number], scale: 0.85 },
        { pos: [-0.2, 0.6, -0.3] as [number, number, number], rot: [0.3, 0.8, 0.1] as [number, number, number], scale: 0.95 },
        { pos: [0.3, 0.7, 0.2] as [number, number, number], rot: [-0.2, -0.6, -0.2] as [number, number, number], scale: 1 },
        { pos: [0, 0.3, 0.4] as [number, number, number], rot: [0.4, 0, 0.2] as [number, number, number], scale: 0.8 },
        { pos: [-0.5, 0.2, -0.2] as [number, number, number], rot: [-0.3, 1, -0.4] as [number, number, number], scale: 0.75 },
        { pos: [0.4, 0.55, 0.3] as [number, number, number], rot: [0.15, -0.4, 0.35] as [number, number, number], scale: 0.88 },
    ], []);

    // Generate olive positions
    const olives = useMemo(() => {
        const rand = createSeededRandom(0x4f1bbcdc);
        const oliveData = [];
        for (let i = 0; i < 20; i++) {
            oliveData.push({
                position: [
                    (rand() - 0.5) * 1.2,
                    0.2 + rand() * 0.8,
                    (rand() - 0.5) * 1.2,
                ] as [number, number, number],
                delay: rand() * 10,
            });
        }
        return oliveData;
    }, []);

    return (
        <group ref={groupRef} position={[0, -0.5, 0]}>
            {/* Tree trunk */}
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[0.08, 0.15, 1, 8]} />
                <meshStandardMaterial
                    color="#5a442a"
                    roughness={0.9}
                    metalness={0}
                />
            </mesh>

            {/* Secondary trunk branches */}
            <mesh position={[-0.15, 0.1, 0.05]} rotation={[0.2, 0, -0.4]}>
                <cylinderGeometry args={[0.03, 0.06, 0.5, 6]} />
                <meshStandardMaterial color="#5a442a" roughness={0.9} />
            </mesh>
            <mesh position={[0.12, 0.05, -0.08]} rotation={[-0.15, 0, 0.35]}>
                <cylinderGeometry args={[0.025, 0.05, 0.45, 6]} />
                <meshStandardMaterial color="#5a442a" roughness={0.9} />
            </mesh>

            {/* Leaf clusters */}
            {branches.map((branch, i) => (
                <LeafCluster
                    key={i}
                    position={branch.pos}
                    rotation={branch.rot}
                    scale={branch.scale}
                />
            ))}

            {/* Olives */}
            {olives.map((olive, i) => (
                <OliveParticle key={i} position={olive.position} delay={olive.delay} />
            ))}

            {/* Ambient glow sphere */}
            <mesh position={[0, 0.4, 0]}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshBasicMaterial
                    color="#4fe3a0"
                    transparent
                    opacity={0.03}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
};

// Floating particles around the tree
const FloatingParticles: React.FC = () => {
    const pointsRef = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const rand = createSeededRandom(0x1b873593);
        const positions = new Float32Array(50 * 3);
        for (let i = 0; i < 50; i++) {
            positions[i * 3] = (rand() - 0.5) * 4;
            positions[i * 3 + 1] = rand() * 3 - 0.5;
            positions[i * 3 + 2] = (rand() - 0.5) * 4;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;
        pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#4fe3a0"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

// Main 3D scene component
const OliveTree3D: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`w-full h-full ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 4.5], fov: 40 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
            >
                {/* Transparent background - relying on alpha: true */}
                {/* Lighting */}
                <ambientLight intensity={0.4} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={0.8}
                    color="#ffffff"
                />
                <pointLight
                    position={[-3, 2, 2]}
                    intensity={0.5}
                    color="#4fe3a0"
                />
                <pointLight
                    position={[2, -1, 3]}
                    intensity={0.3}
                    color="#e2b866"
                />

                {/* Main tree with floating animation */}
                <Float
                    speed={1.5}
                    rotationIntensity={0.2}
                    floatIntensity={0.3}
                >
                    <OliveTree />
                </Float>

                {/* Floating particles */}
                <FloatingParticles />
            </Canvas>
        </div>
    );
};

export default OliveTree3D;
