import React, { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "../context/LanguageContext";

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!isOpen || !mounted) return null;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const button = (e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement);
        button.innerText = "✓";
        button.disabled = true;

        setTimeout(() => {
            onClose();
            alert(t.waitlist.successMessage);
        }, 800);
    };

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-surface-card p-6 shadow-2xl transition-all sm:p-8 border border-soft-color animate-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute end-4 top-4 rounded-full p-2 text-muted transition hover:bg-surface-muted hover:text-primary focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{t.waitlist.title}</h3>
                    <p className="mt-2 text-sm text-muted">
                        {t.waitlist.subtitle}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="waitlist-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="waitlist-email"
                            required
                            className="w-full rounded-xl border border-soft-color bg-surface-muted px-4 py-3.5 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            placeholder={t.waitlist.emailPlaceholder}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-accent px-4 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                        {t.waitlist.submitButton}
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default WaitlistModal;
