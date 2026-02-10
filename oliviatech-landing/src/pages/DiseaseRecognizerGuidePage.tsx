import React from "react";
import OliviatechLogo from "../assets/oliviatech_original.png";
import { useTranslation } from "../context/LanguageContext";
import type { Language } from "../i18n/translations";

interface SampleCard {
  title: string;
  description: string;
}

interface GuideStep {
  title: string;
  detail: string;
  note: string;
}

interface DiseaseGuideContent {
  navBackHome: string;
  navOpenRecognizer: string;
  badge: string;
  title: string;
  subtitle: string;
  beforeTitle: string;
  beforeItems: string[];
  disclaimer: string;
  sampleTitle: string;
  sampleSubtitle: string;
  sampleCards: SampleCard[];
  stepsTitle: string;
  steps: GuideStep[];
  doTitle: string;
  doItems: string[];
  avoidTitle: string;
  avoidItems: string[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  footerTagline: string;
}

const leafIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8 text-[#0f8c63]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13c0-6 4-9 14-9 0 10-3 14-9 14-2.5 0-4.5-2-4.5-5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17c2-2 4.5-4.5 10-8" />
  </svg>
);

const trunkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8 text-[#0f8c63]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-4-2 4-4 4 4M8 9l4-4 4 4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 21h12" />
  </svg>
);

const fruitIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8 text-[#0f8c63]">
    <circle cx="12" cy="13" r="6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7c0-2 1-3.5 3.5-4.5" />
  </svg>
);

const sampleIcons = [leafIcon, trunkIcon, fruitIcon];

const diseaseGuideCopy: Record<Language, DiseaseGuideContent> = {
  en: {
    navBackHome: "Back to home",
    navOpenRecognizer: "Open recognizer",
    badge: "Pest and Disease Recognizer Guide",
    title: "Capture better olive images for more reliable diagnosis.",
    subtitle:
      "This page is built specifically for the OliviaTech recognizer workflow. Follow the checklist below before uploading photos so the model can classify symptoms with higher confidence.",
    beforeTitle: "Before you start",
    beforeItems: [
      "Use fresh photos taken at the grove.",
      "One image should focus on one symptom pattern.",
      "Upload JPG or PNG with visible fine details.",
      "If needed, repeat with multiple angles.",
    ],
    disclaimer:
      "Disclaimer: This AI analysis provides indicative guidance and should support, not replace, agronomist evaluation and field inspection.",
    sampleTitle: "Supported sample types",
    sampleSubtitle:
      "The recognizer currently performs best on three organ categories. Choose the card that matches your case before image preparation.",
    sampleCards: [
      {
        title: "Leaves",
        description: "Capture both sides of leaves showing clear symptoms, spots, or texture changes.",
      },
      {
        title: "Trunk Section",
        description: "Take close photos of bark cracks, cankers, and discolored internal tissue.",
      },
      {
        title: "Fruit",
        description: "Photograph olives with visible lesions, rot, unusual spots, or deformation.",
      },
    ],
    stepsTitle: "Step by step photo preparation",
    steps: [
      {
        title: "Isolate the affected organ",
        detail: "Pick one symptom type per photo. Keep healthy and diseased parts visible in the same frame when possible.",
        note: "Avoid mixed scenes with soil, sky, and multiple trees.",
      },
      {
        title: "Use natural, even lighting",
        detail: "Shoot in daylight with no hard shadows. Keep the camera steady and focus on symptom details.",
        note: "Do not use zoom if it reduces sharpness.",
      },
      {
        title: "Capture 2 to 4 angles",
        detail: "Take one close shot and one medium shot for context. For trunk issues, include both external and cut section views.",
        note: "Consistent angle variation improves model confidence.",
      },
      {
        title: "Upload the clearest image set",
        detail: "Start with your best photo. If confidence is low, retry with alternative angles or a cleaner background.",
        note: "Repeat diagnosis after treatment to track progress.",
      },
    ],
    doTitle: "Do this",
    doItems: [
      "Wipe the phone lens before taking photos.",
      "Place the target organ at the center of the frame.",
      "Use plain background whenever possible.",
      "Retake blurry images before upload.",
    ],
    avoidTitle: "Avoid this",
    avoidItems: [
      "Do not capture in very dark or overexposed conditions.",
      "Do not include multiple symptom categories in one image.",
      "Do not add filters, effects, or heavy edits.",
      "Do not crop too aggressively after capture.",
    ],
    ctaTitle: "Ready to run diagnosis?",
    ctaSubtitle:
      "Open the recognizer, upload your best image, and review the suggested disease classes. Use this guide each time for more consistent results.",
    ctaButton: "Proceed to the olive disease recognizer",
    footerTagline: "Detect. Protect. Prosper.",
  },
  fr: {
    navBackHome: "Retour à l'accueil",
    navOpenRecognizer: "Ouvrir le détecteur",
    badge: "Guide du détecteur de maladies et ravageurs",
    title: "Capturez de meilleures images d'olivier pour un diagnostic plus fiable.",
    subtitle:
      "Cette page est conçue spécifiquement pour le flux du détecteur OliviaTech. Suivez la checklist ci-dessous avant de téléverser des photos pour améliorer la confiance du modèle.",
    beforeTitle: "Avant de commencer",
    beforeItems: [
      "Utilisez des photos récentes prises dans l'oliveraie.",
      "Une image doit se concentrer sur un seul type de symptôme.",
      "Téléversez des fichiers JPG ou PNG avec des détails nets.",
      "Si nécessaire, reprenez des photos sous plusieurs angles.",
    ],
    disclaimer:
      "Avertissement : cette analyse IA fournit une orientation indicative et doit compléter, et non remplacer, l'évaluation d'un agronome et l'inspection terrain.",
    sampleTitle: "Types d'échantillons pris en charge",
    sampleSubtitle:
      "Le détecteur est actuellement plus performant sur trois catégories d'organes. Choisissez la carte qui correspond à votre cas avant la préparation des images.",
    sampleCards: [
      {
        title: "Feuilles",
        description: "Capturez les deux faces des feuilles avec des symptômes, taches ou changements de texture visibles.",
      },
      {
        title: "Section du tronc",
        description: "Prenez des photos rapprochées des fissures, chancres ou décolorations internes.",
      },
      {
        title: "Fruit",
        description: "Photographiez les olives présentant des lésions, pourritures, taches anormales ou déformations.",
      },
    ],
    stepsTitle: "Préparation des photos étape par étape",
    steps: [
      {
        title: "Isoler l'organe affecté",
        detail: "Choisissez un seul type de symptôme par photo. Si possible, montrez les zones saines et atteintes dans la même image.",
        note: "Évitez les scènes mixtes avec sol, ciel et plusieurs arbres.",
      },
      {
        title: "Utiliser une lumière naturelle uniforme",
        detail: "Prenez les photos en journée, sans ombres dures. Gardez la caméra stable et focalisée sur le symptôme.",
        note: "N'utilisez pas le zoom s'il réduit la netteté.",
      },
      {
        title: "Capturer 2 à 4 angles",
        detail: "Prenez une vue rapprochée et une vue moyenne pour le contexte. Pour le tronc, incluez l'extérieur et la section coupée.",
        note: "La variation d'angles améliore la confiance du modèle.",
      },
      {
        title: "Téléverser la série la plus nette",
        detail: "Commencez avec votre meilleure image. Si la confiance est faible, réessayez avec d'autres angles ou un fond plus propre.",
        note: "Refaites un diagnostic après traitement pour suivre l'évolution.",
      },
    ],
    doTitle: "À faire",
    doItems: [
      "Nettoyez la lentille du téléphone avant la prise de vue.",
      "Placez l'organe ciblé au centre du cadre.",
      "Utilisez un fond simple si possible.",
      "Reprenez toute image floue avant l'envoi.",
    ],
    avoidTitle: "À éviter",
    avoidItems: [
      "Ne capturez pas en conditions très sombres ou surexposées.",
      "N'incluez pas plusieurs catégories de symptômes dans une seule image.",
      "N'ajoutez pas de filtres, effets ou retouches fortes.",
      "Ne recadrez pas trop agressivement après la capture.",
    ],
    ctaTitle: "Prêt à lancer le diagnostic ?",
    ctaSubtitle:
      "Ouvrez le détecteur, téléversez votre meilleure image et vérifiez les classes de maladies proposées. Utilisez ce guide à chaque fois pour des résultats plus cohérents.",
    ctaButton: "Accéder au détecteur de maladies de l'olivier",
    footerTagline: "Détecter. Protéger. Prospérer.",
  },
  ar: {
    navBackHome: "العودة إلى الرئيسية",
    navOpenRecognizer: "فتح أداة التشخيص",
    badge: "دليل أداة تشخيص الآفات والأمراض",
    title: "التقط صور زيتون أفضل للحصول على تشخيص أكثر دقة.",
    subtitle:
      "هذه الصفحة مخصصة لسير عمل أداة التشخيص من OliviaTech. اتبع القائمة التالية قبل رفع الصور حتى يحصل النموذج على ثقة أعلى في التصنيف.",
    beforeTitle: "قبل البدء",
    beforeItems: [
      "استخدم صورا حديثة ملتقطة داخل الحقل.",
      "يفضل أن تركز كل صورة على نمط عرض مرضي واحد.",
      "ارفع صور JPG أو PNG بدقة وتفاصيل واضحة.",
      "عند الحاجة، أعد التصوير من زوايا متعددة.",
    ],
    disclaimer:
      "تنبيه: نتائج التحليل بالذكاء الاصطناعي إرشادية فقط، ويجب أن تدعم تقييم المهندس الزراعي والمعاينة الميدانية ولا تستبدلهما.",
    sampleTitle: "أنواع العينات المدعومة",
    sampleSubtitle: "تعمل الأداة حاليا بأفضل أداء على ثلاثة أنواع من الأعضاء النباتية. اختر النوع المطابق لحالتك قبل تجهيز الصور.",
    sampleCards: [
      {
        title: "الأوراق",
        description: "التقط وجهي الورقة مع ظهور الأعراض أو البقع أو تغيرات القوام بشكل واضح.",
      },
      {
        title: "مقطع من الجذع",
        description: "التقط صورا قريبة للتشققات أو التقرحات أو تغير اللون في الأنسجة الداخلية.",
      },
      {
        title: "الثمار",
        description: "صور ثمار الزيتون التي تظهر عليها آفات أو تعفن أو بقع غير طبيعية أو تشوه.",
      },
    ],
    stepsTitle: "خطوات تجهيز الصور",
    steps: [
      {
        title: "اعزل العضو المصاب",
        detail: "اختر نوع عرض مرضي واحد لكل صورة. يفضل إظهار الجزء السليم والمصاب في الإطار نفسه عند الإمكان.",
        note: "تجنب المشاهد المختلطة التي تشمل التربة والسماء وعدة أشجار.",
      },
      {
        title: "استخدم إضاءة طبيعية متوازنة",
        detail: "التقط الصورة نهارا ومن دون ظلال قوية. ثبت الكاميرا وركز على تفاصيل العرض المرضي.",
        note: "لا تستخدم الزوم إذا كان سيقلل من وضوح الصورة.",
      },
      {
        title: "التقط من 2 إلى 4 زوايا",
        detail: "خذ لقطة قريبة وأخرى متوسطة لإظهار السياق. وفي حالات الجذع، أضف صورة خارجية وصورة للمقطع الداخلي.",
        note: "تنوع الزوايا يحسن ثقة النموذج.",
      },
      {
        title: "ارفع أوضح مجموعة صور",
        detail: "ابدأ بأفضل صورة لديك. إذا كانت الثقة منخفضة، أعد الرفع بزوايا أخرى أو خلفية أنظف.",
        note: "أعد التشخيص بعد المعالجة لمتابعة التحسن.",
      },
    ],
    doTitle: "يفضل القيام بـ",
    doItems: [
      "نظف عدسة الهاتف قبل التصوير.",
      "ضع العضو المستهدف في منتصف الإطار.",
      "استخدم خلفية بسيطة قدر الإمكان.",
      "أعد التقاط أي صورة غير واضحة قبل الرفع.",
    ],
    avoidTitle: "تجنب",
    avoidItems: [
      "لا تلتقط الصور في إضاءة ضعيفة جدا أو مفرطة.",
      "لا تجمع أكثر من فئة أعراض في الصورة الواحدة.",
      "لا تضف فلاتر أو تأثيرات أو تعديلات قوية.",
      "لا تقتطع الصورة بشكل مبالغ بعد الالتقاط.",
    ],
    ctaTitle: "جاهز لبدء التشخيص؟",
    ctaSubtitle: "افتح أداة التشخيص، ارفع أفضل صورة، ثم راجع فئات الأمراض المقترحة. استخدم هذا الدليل في كل مرة لتحصل على نتائج أكثر ثباتا.",
    ctaButton: "الانتقال إلى أداة تشخيص أمراض الزيتون",
    footerTagline: "اكتشف. احمِ. ازدهر.",
  },
};

const DiseaseRecognizerGuidePage: React.FC = () => {
  const { language } = useTranslation();
  const content = diseaseGuideCopy[language];

  return (
    <div className="min-h-screen bg-white text-[#102218]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#0f8c63]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-[#e2b866]/12 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[#dbe6df] bg-white/95 backdrop-blur">
        <nav className="container-full flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={OliviatechLogo} alt="OliviaTech logo" className="h-10 w-auto object-contain sm:h-12" />
            <span className="text-sm font-semibold text-[#214436] sm:text-base">OliviaTech</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="premium-interaction hidden rounded-full border border-[#c8d9cf] px-4 py-2 text-sm font-semibold text-[#214436] hover:border-[#0f8c63] sm:inline-flex"
            >
              {content.navBackHome}
            </a>
            <a
              href="/diseaserecognizer"
              className="premium-interaction inline-flex rounded-full bg-[#0f8c63] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0c7654]"
            >
              {content.navOpenRecognizer}
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="container-full pb-12 pt-14 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <span className="inline-flex rounded-full border border-[#d7e3dc] bg-[#f6fbf8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f8c63]">
                {content.badge}
              </span>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">{content.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#3f5c50] sm:text-lg">{content.subtitle}</p>
            </div>

            <aside className="rounded-3xl border border-[#dbe6df] bg-[#fcfefd] p-6 shadow-[0_18px_40px_rgba(16,34,24,0.07)]">
              <h2 className="text-lg font-semibold">{content.beforeTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#3f5c50]">
                {content.beforeItems.map((item) => (
                  <li key={item} className="rounded-2xl border border-[#e5efe9] bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="container-full pb-4">
          <div className="rounded-2xl border border-[#f4c8c8] bg-[#fff5f5] px-5 py-4 text-sm leading-relaxed text-[#7d2f2f] sm:px-6">
            {content.disclaimer}
          </div>
        </section>

        <section className="container-full section-padding">
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.sampleTitle}</h2>
          <p className="mt-3 max-w-3xl text-[#3f5c50]">{content.sampleSubtitle}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {content.sampleCards.map((card, index) => (
              <article key={card.title} className="rounded-3xl border border-[#dbe6df] bg-white p-6 shadow-[0_14px_34px_rgba(16,34,24,0.07)]">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf7f1]">
                  {sampleIcons[index % sampleIcons.length]}
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3f5c50]">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-full pb-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.stepsTitle}</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {content.steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-[#dbe6df] bg-[#fcfefd] p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f8c63] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#3f5c50]">{step.detail}</p>
                    <p className="mt-3 text-sm font-medium text-[#0f8c63]">{step.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container-full pb-16">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#dbe6df] bg-white p-6">
              <h3 className="text-xl font-semibold">{content.doTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#3f5c50]">
                {content.doItems.map((item) => (
                  <li key={item} className="rounded-2xl bg-[#f6fbf8] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[#eadfce] bg-[#fffcf5] p-6">
              <h3 className="text-xl font-semibold">{content.avoidTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#5f5138]">
                {content.avoidItems.map((item) => (
                  <li key={item} className="rounded-2xl bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="container-full pb-20">
          <div className="rounded-3xl border border-[#dbe6df] bg-gradient-to-r from-[#f2fbf6] to-[#f9fcff] p-8 text-center sm:p-10">
            <h2 className="text-3xl font-semibold sm:text-4xl">{content.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-[#3f5c50]">{content.ctaSubtitle}</p>
            <a
              href="/diseaserecognizer"
              className="premium-interaction mt-7 inline-flex rounded-full bg-[#0f8c63] px-7 py-3 text-sm font-semibold text-white hover:bg-[#0c7654]"
            >
              {content.ctaButton}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dbe6df] bg-white">
        <div className="container-full flex flex-col items-start justify-between gap-2 py-6 text-sm text-[#476357] sm:flex-row sm:items-center">
          <p>Copyright {new Date().getFullYear()} OliviaTech</p>
          <p>{content.footerTagline}</p>
        </div>
      </footer>
    </div>
  );
};

export default DiseaseRecognizerGuidePage;
