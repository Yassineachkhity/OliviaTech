export type Language = "en" | "fr" | "ar";

export interface Translations {
    // Navbar
    nav: {
        solution: string;
        pricing: string;
        team: string;
        talkToUs: string;
        navigate: string;
    };
    // Hero
    hero: {
        badge: string;
        headline: string;
        subtitle: string;
        cta: string;
        comingSoon: string;
        downloadOn: string;
        getItOn: string;
        soon: string;
    };
    // Advantage Section
    advantage: {
        sectionLabel: string;
        title: string;
        subtitle: string;
        features: {
            userFriendly: { title: string; desc: string };
            multilingual: { title: string; desc: string };
            agronomist: { title: string; desc: string };
            dailyAdvice: { title: string; desc: string };
            meteoAlerts: { title: string; desc: string };
            aiDiagnosis: { title: string; desc: string };
        };
    };
    // Stats Section
    stats: {
        yieldProtected: { label: string; detail: string };
        support: { label: string; detail: string };
    };
    // Solution Section
    solution: {
        title: string;
        dropPhoto: string;
        uploadButton: string;
        selectExamples: string;
    };
    // Pricing Section
    pricing: {
        sectionLabel: string;
        title: string;
        subtitle: string;
        mostLoved: string;
        plans: {
            starter: {
                name: string;
                highlight: string;
                features: string[];
                cta: string;
            };
            proCoop: {
                name: string;
                highlight: string;
                features: string[];
                cta: string;
            };
        };
    };
    // Team Section
    team: {
        sectionLabel: string;
        title: string;
        subtitle: string;
        members: {
            ikhlasse: { role: string; desc: string; focus: string };
            yassine: { role: string; desc: string; focus: string };
        };
    };
    // CTA Section
    cta: {
        badge: string;
        title: string;
        subtitle: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        phoneLabel: string;
        phoneOptional: string;
        phonePlaceholder: string;
        messageLabel: string;
        messageOptional: string;
        messagePlaceholder: string;
        submitButton: string;
        responseTime: string;
        freeOnboarding: string;
    };
    // Incubator Section
    incubator: {
        sectionLabel: string;
    };
    // Footer
    footer: {
        tagline: string;
    };
    // Waitlist Modal
    waitlist: {
        title: string;
        subtitle: string;
        emailPlaceholder: string;
        submitButton: string;
        successMessage: string;
    };
}

const translations: Record<Language, Translations> = {
    en: {
        nav: {
            solution: "Solution",
            pricing: "Pricing",
            team: "Team",
            talkToUs: "Talk to us",
            navigate: "Navigate",
        },
        hero: {
            badge: "Trusted by groves across Morocco",
            headline: "Empowering Olive Farmers with AI",
            subtitle: "Instant tree disease detection via OliviaTech Mobile Solution.",
            cta: "Start Protecting Your Grove",
            comingSoon: "Coming Soon",
            downloadOn: "Download on the",
            getItOn: "GET IT ON",
            soon: "SOON",
        },
        advantage: {
            sectionLabel: "Features",
            title: "Comprehensive mobile solution for modern olive farming.",
            subtitle: "Everything you need to manage your olive grove efficiently, all in one mobile-friendly application.",
            features: {
                userFriendly: {
                    title: "User Friendly Application",
                    desc: "Intuitive interface designed for easy navigation and seamless user experience.",
                },
                multilingual: {
                    title: "Supports Arabic Darija, French and English",
                    desc: "Multilingual support for seamless communication in your preferred language.",
                },
                agronomist: {
                    title: "Expertise Agronomist Contact and Advices",
                    desc: "Direct access to expert agronomists for personalized guidance and professional advice.",
                },
                dailyAdvice: {
                    title: "Daily Displayed Advices and infos",
                    desc: "Get daily tips, recommendations, and important information to optimize your farming practices.",
                },
                meteoAlerts: {
                    title: "Meteo Alerts: Humidity, Temperature, Wind",
                    desc: "Real-time weather alerts for humidity, temperature, and wind conditions to protect your crops.",
                },
                aiDiagnosis: {
                    title: "AI olive leaf disease diagnosis",
                    desc: "Advanced AI-powered detection system for instant identification of olive tree diseases.",
                },
            },
        },
        stats: {
            yieldProtected: { label: "Yield protected", detail: "Estimated losses avoided in pilots" },
            support: { label: "Support", detail: "On-demand assistant in Arabic & French & English" },
        },
        solution: {
            title: "Try our Crop Health Diagnosis.",
            dropPhoto: "Drop photo or tap to upload",
            uploadButton: "Upload Olive Leaf Image",
            selectExamples: "Select from Examples",
        },
        pricing: {
            sectionLabel: "Pricing",
            title: "Transparent plans that grow with every grove.",
            subtitle: "No hardware upsells or hidden fees. Upgrade only when you need expert back-up.",
            mostLoved: "Most loved",
            plans: {
                starter: {
                    name: "Starter",
                    highlight: "Ideal for single-grove farmers testing OliviaTech.",
                    features: ["3 photo diagnoses", "Basic treatment guidance", "Community Q&A access"],
                    cta: "Create free account",
                },
                proCoop: {
                    name: "Pro coop",
                    highlight: "Unlimited detections for co-ops and agronomists.",
                    features: ["Unlimited diagnoses", "Custom playbooks & exports", "Priority agronomist support"],
                    cta: "Join waitlist",
                },
            },
        },
        team: {
            sectionLabel: "Team",
            title: "Farmers at heart, technologists by craft.",
            subtitle: "We're pairing Moroccan field expertise with product rigor to build tech farmers truly use.",
            members: {
                ikhlasse: { role: "CEO & Founder", desc: "Strategy, partnerships and farmer relations.", focus: "Finance & ops" },
                yassine: { role: "CTO", desc: "AI models, agronomy data stack, integrations.", focus: "AI & product" },
            },
        },
        cta: {
            badge: "Pilot enrollments now open",
            title: "Ready to protect the 2025 harvest?",
            subtitle: "Join early access to receive setup support, onboarding for your team, and the first AI-driven alerts as soon as they trigger.",
            nameLabel: "Full Name",
            namePlaceholder: "Enter your full name",
            emailLabel: "Email Address",
            emailPlaceholder: "your.email@example.com",
            phoneLabel: "Phone Number",
            phoneOptional: "(Optional)",
            phonePlaceholder: "+212 6XX XXX XXX",
            messageLabel: "Tell us about your farm",
            messageOptional: "(Optional)",
            messagePlaceholder: "Farm size, region, current challenges, or any questions you have...",
            submitButton: "Join the Pilot Program",
            responseTime: "Response within 2 business days",
            freeOnboarding: "Free onboarding included",
        },
        incubator: {
            sectionLabel: "Incubator Programs",
        },
        footer: {
            tagline: "Detect · Protect · Prosper",
        },
        waitlist: {
            title: "Join the Waitlist",
            subtitle: "Enter your email to get early access and updates.",
            emailPlaceholder: "name@example.com",
            submitButton: "Join Waitlist",
            successMessage: "Thank you for joining our waitlist!",
        },
    },
    fr: {
        nav: {
            solution: "Solution",
            pricing: "Tarifs",
            team: "Équipe",
            talkToUs: "Nous contacter",
            navigate: "Navigation",
        },
        hero: {
            badge: "Approuvé par les oliveraies du Maroc",
            headline: "L'IA au service des oléiculteurs",
            subtitle: "Détection instantanée des maladies via l'application mobile OliviaTech.",
            cta: "Protégez votre oliveraie",
            comingSoon: "Bientôt disponible",
            downloadOn: "Télécharger sur",
            getItOn: "TÉLÉCHARGER SUR",
            soon: "BIENTÔT",
        },
        advantage: {
            sectionLabel: "Fonctionnalités",
            title: "Solution mobile complète pour l'oléiculture moderne.",
            subtitle: "Tout ce dont vous avez besoin pour gérer efficacement votre oliveraie, dans une seule application.",
            features: {
                userFriendly: {
                    title: "Application conviviale",
                    desc: "Interface intuitive conçue pour une navigation facile et une expérience utilisateur fluide.",
                },
                multilingual: {
                    title: "Supporte l'arabe darija, le français et l'anglais",
                    desc: "Support multilingue pour une communication fluide dans votre langue préférée.",
                },
                agronomist: {
                    title: "Contact et conseils d'agronomes experts",
                    desc: "Accès direct à des agronomes experts pour des conseils personnalisés et professionnels.",
                },
                dailyAdvice: {
                    title: "Conseils et informations quotidiens",
                    desc: "Recevez des conseils quotidiens et des informations importantes pour optimiser vos pratiques agricoles.",
                },
                meteoAlerts: {
                    title: "Alertes météo : Humidité, Température, Vent",
                    desc: "Alertes météo en temps réel pour protéger vos cultures.",
                },
                aiDiagnosis: {
                    title: "Diagnostic IA des maladies de l'olivier",
                    desc: "Système de détection IA avancé pour l'identification instantanée des maladies de l'olivier.",
                },
            },
        },
        stats: {
            yieldProtected: { label: "Rendement protégé", detail: "Pertes évitées estimées dans les pilotes" },
            support: { label: "Support", detail: "Assistant disponible en arabe, français et anglais" },
        },
        solution: {
            title: "Essayez notre diagnostic de santé des cultures.",
            dropPhoto: "Déposez une photo ou appuyez pour télécharger",
            uploadButton: "Télécharger une image de feuille d'olivier",
            selectExamples: "Sélectionner parmi les exemples",
        },
        pricing: {
            sectionLabel: "Tarifs",
            title: "Des forfaits transparents qui grandissent avec chaque oliveraie.",
            subtitle: "Pas de vente de matériel ni de frais cachés. Passez à la version supérieure uniquement quand vous avez besoin d'un expert.",
            mostLoved: "Le plus populaire",
            plans: {
                starter: {
                    name: "Débutant",
                    highlight: "Idéal pour les agriculteurs testant OliviaTech.",
                    features: ["3 diagnostics photo", "Conseils de traitement de base", "Accès à la communauté Q&R"],
                    cta: "Créer un compte gratuit",
                },
                proCoop: {
                    name: "Pro coop",
                    highlight: "Détections illimitées pour coopératives et agronomes.",
                    features: ["Diagnostics illimités", "Guides personnalisés et exports", "Support agronome prioritaire"],
                    cta: "Rejoindre la liste d'attente",
                },
            },
        },
        team: {
            sectionLabel: "Équipe",
            title: "Agriculteurs de cœur, technologues de métier.",
            subtitle: "Nous combinons l'expertise marocaine du terrain avec la rigueur produit pour créer une technologie que les agriculteurs utilisent vraiment.",
            members: {
                ikhlasse: { role: "PDG & Fondatrice", desc: "Stratégie, partenariats et relations agriculteurs.", focus: "Finance & opérations" },
                yassine: { role: "Directeur Technique", desc: "Modèles IA, données agronomiques, intégrations.", focus: "IA & produit" },
            },
        },
        cta: {
            badge: "Inscriptions pilotes ouvertes",
            title: "Prêt à protéger la récolte 2025 ?",
            subtitle: "Rejoignez l'accès anticipé pour recevoir un support de configuration, une intégration pour votre équipe et les premières alertes IA.",
            nameLabel: "Nom complet",
            namePlaceholder: "Entrez votre nom complet",
            emailLabel: "Adresse e-mail",
            emailPlaceholder: "votre.email@exemple.com",
            phoneLabel: "Numéro de téléphone",
            phoneOptional: "(Optionnel)",
            phonePlaceholder: "+212 6XX XXX XXX",
            messageLabel: "Parlez-nous de votre ferme",
            messageOptional: "(Optionnel)",
            messagePlaceholder: "Taille de la ferme, région, défis actuels, ou vos questions...",
            submitButton: "Rejoindre le programme pilote",
            responseTime: "Réponse sous 2 jours ouvrables",
            freeOnboarding: "Intégration gratuite incluse",
        },
        incubator: {
            sectionLabel: "Programmes d'incubation",
        },
        footer: {
            tagline: "Détecter · Protéger · Prospérer",
        },
        waitlist: {
            title: "Rejoindre la liste d'attente",
            subtitle: "Entrez votre e-mail pour un accès anticipé et des mises à jour.",
            emailPlaceholder: "nom@exemple.com",
            submitButton: "Rejoindre",
            successMessage: "Merci d'avoir rejoint notre liste d'attente !",
        },
    },
    ar: {
        nav: {
            solution: "الحل",
            pricing: "الأسعار",
            team: "الفريق",
            talkToUs: "تواصل معنا",
            navigate: "التنقل",
        },
        hero: {
            badge: "موثوق به من بساتين الزيتون في المغرب",
            headline: "تمكين مزارعي الزيتون بالذكاء الاصطناعي",
            subtitle: "اكتشاف أمراض الأشجار فوراً عبر تطبيق OliviaTech",
            cta: "ابدأ بحماية بستانك",
            comingSoon: "قريباً",
            downloadOn: "حمّل من",
            getItOn: "احصل عليه من",
            soon: "قريباً",
        },
        advantage: {
            sectionLabel: "المميزات",
            title: "حل متكامل للهاتف المحمول لزراعة الزيتون الحديثة",
            subtitle: "كل ما تحتاجه لإدارة بستان الزيتون بكفاءة في تطبيق واحد",
            features: {
                userFriendly: {
                    title: "تطبيق سهل الاستخدام",
                    desc: "واجهة بديهية مصممة للتصفح السهل وتجربة مستخدم سلسة",
                },
                multilingual: {
                    title: "يدعم الدارجة والفرنسية والإنجليزية",
                    desc: "دعم متعدد اللغات للتواصل السلس بلغتك المفضلة",
                },
                agronomist: {
                    title: "تواصل مع خبراء الزراعة",
                    desc: "وصول مباشر إلى خبراء الزراعة للحصول على إرشادات شخصية",
                },
                dailyAdvice: {
                    title: "نصائح ومعلومات يومية",
                    desc: "احصل على نصائح يومية لتحسين ممارساتك الزراعية",
                },
                meteoAlerts: {
                    title: "تنبيهات الطقس: الرطوبة والحرارة والرياح",
                    desc: "تنبيهات الطقس الآنية لحماية محاصيلك",
                },
                aiDiagnosis: {
                    title: "تشخيص أمراض أوراق الزيتون بالذكاء الاصطناعي",
                    desc: "نظام كشف متقدم بالذكاء الاصطناعي للتعرف الفوري على أمراض الزيتون",
                },
            },
        },
        stats: {
            yieldProtected: { label: "المحصول المحمي", detail: "الخسائر المتجنبة المقدرة في التجارب" },
            support: { label: "الدعم", detail: "مساعد متاح بالعربية والفرنسية والإنجليزية" },
        },
        solution: {
            title: "جرب تشخيص صحة المحاصيل",
            dropPhoto: "أسقط الصورة أو انقر للرفع",
            uploadButton: "رفع صورة ورقة زيتون",
            selectExamples: "اختر من الأمثلة",
        },
        pricing: {
            sectionLabel: "الأسعار",
            title: "خطط شفافة تنمو مع كل بستان",
            subtitle: "لا توجد رسوم خفية. قم بالترقية فقط عندما تحتاج إلى دعم خبير",
            mostLoved: "الأكثر شعبية",
            plans: {
                starter: {
                    name: "المبتدئ",
                    highlight: "مثالي للمزارعين الذين يختبرون OliviaTech",
                    features: ["3 تشخيصات بالصور", "إرشادات العلاج الأساسية", "الوصول إلى مجتمع الأسئلة والأجوبة"],
                    cta: "إنشاء حساب مجاني",
                },
                proCoop: {
                    name: "التعاونية المحترفة",
                    highlight: "اكتشافات غير محدودة للتعاونيات والمهندسين الزراعيين",
                    features: ["تشخيصات غير محدودة", "أدلة مخصصة وتصدير", "دعم أولوية من المهندسين الزراعيين"],
                    cta: "انضم لقائمة الانتظار",
                },
            },
        },
        team: {
            sectionLabel: "الفريق",
            title: "مزارعون بالقلب، تقنيون بالحرفة",
            subtitle: "نجمع بين الخبرة الميدانية المغربية ودقة المنتج لبناء تقنية يستخدمها المزارعون حقاً",
            members: {
                ikhlasse: { role: "الرئيسة التنفيذية والمؤسسة", desc: "الاستراتيجية والشراكات وعلاقات المزارعين", focus: "المالية والعمليات" },
                yassine: { role: "المدير التقني", desc: "نماذج الذكاء الاصطناعي، البيانات الزراعية، التكاملات", focus: "الذكاء الاصطناعي والمنتج" },
            },
        },
        cta: {
            badge: "التسجيل التجريبي مفتوح الآن",
            title: "هل أنت مستعد لحماية محصول 2025؟",
            subtitle: "انضم للوصول المبكر للحصول على دعم الإعداد وإدماج فريقك والتنبيهات الأولى بالذكاء الاصطناعي",
            nameLabel: "الاسم الكامل",
            namePlaceholder: "أدخل اسمك الكامل",
            emailLabel: "البريد الإلكتروني",
            emailPlaceholder: "بريدك@مثال.com",
            phoneLabel: "رقم الهاتف",
            phoneOptional: "(اختياري)",
            phonePlaceholder: "+212 6XX XXX XXX",
            messageLabel: "أخبرنا عن مزرعتك",
            messageOptional: "(اختياري)",
            messagePlaceholder: "حجم المزرعة، المنطقة، التحديات الحالية، أو أي أسئلة لديك...",
            submitButton: "انضم للبرنامج التجريبي",
            responseTime: "الرد خلال يومي عمل",
            freeOnboarding: "الإدماج المجاني مشمول",
        },
        incubator: {
            sectionLabel: "برامج الحاضنات",
        },
        footer: {
            tagline: "اكتشف · احمِ · ازدهر",
        },
        waitlist: {
            title: "انضم لقائمة الانتظار",
            subtitle: "أدخل بريدك الإلكتروني للوصول المبكر والتحديثات",
            emailPlaceholder: "الاسم@مثال.com",
            submitButton: "انضم",
            successMessage: "شكراً لانضمامك لقائمة الانتظار!",
        },
    },
};

export default translations;
