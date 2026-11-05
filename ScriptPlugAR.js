/* =========================== Daem Accessibility Injector - No iframe (widget) - Injects DOM + CSS + JS =========================== */
const plugHostingUrl2020 = "https://www.asu.edu.eg", // For Using Here And applyChange.js
    youTubeVideoLink = "https://www.youtube.com/embed/QIdM2pP7yMw";
const scriptElementsdkURL = "https://www.asu.edu.eg/www_asu_edu_eg_version_GAW_V10/microsoft-cognitiveservices-speech-sdk/distrib/browser/microsoft.cognitiveservices.speech.sdk.bundle.js";
const scriptApplayChanges = "/www_asu_edu_eg_version_GAW_V10/Plugs/js/applyChange.js";
const src = "https://www.asu.edu.eg/www_asu_edu_eg_version_GAW_V10/Plugs/Languages/ar/plug.html";
const IconclassName = "the-btn Top_Right";
const array = scriptApplayChanges.split("/");
var match = "/" + array[1] + "/";

/**
 * Optional:
 * If you want to prefix all widget assets (fonts/images) with hosting base:
 * Example: plugHostingUrl2020 = https://example.com/
 * assets will become https://example.com/daem_assets/...
 */
const ASSETS_BASE = plugHostingUrl2020 + match + "Plugs/";

function isPageArabic() {
    // Based on your current routing logic:
    if (src.includes("/en/")) return false;
    return true;
}

function initTool() {
    const body = document.getElementsByTagName("body")[0];
    const head = document.head || document.getElementsByTagName("head")[0];

    // loading the voices
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };

    // Prevent double-injection
    if (document.getElementById("daem-accessibility-widget")) return;

    const IS_AR = isPageArabic();
    document.documentElement.lang = IS_AR ? "ar" : "en";
    //document.documentElement.dir = IS_AR ? "rtl" : "ltr";

    // i18n
    const I18N = IS_AR
        ? {
            dir: "rtl",
            openMenuAria: "فتح قائمة الإتاحة الرقمية",
            closeMenuAria: "إغلاق القائمة",
            resetTitle: "إعادة تعيين الكل",
            title: "الإتاحة الرقمية من داعم - Alt+O",
            profiles: "إعدادات مسبقة للإختيار",
            logo: `${ASSETS_BASE}daem_assets/ar_daem.png`,
            signHeader: "مترجم لغة الإشارة",
            signClose: "إغلاق فيديو لغة الإشارة",
            signNote: "(رابط الفيديو مزود من الخلفية)",
            profilesLabels: {
                motor: "إعاقة حركية",
                visual: "إعاقة بصرية",
                colorblind: "عمى ألوان",
                dyslexia: "صديق لعسر القراءة",
                lowvision: "ضعف البصر",
                cognitive: "التعلم المعرفي",
                seizure: "الصرع والنوبات",
                adhd: "فرط الحركة",
            },
            featureLabels: {
                "sign-vid": "فيديو لغة الإشارة",
                "sign-font": "خط لغة الإشارة",
                "text-speech": "تحويل النص إلى كلام",
                "speech-text": "تحويل الكلام إلى نص",
                contrast: "تباين الألوان",
                "font-size": "حجم الخط",
                cursor: "مؤشر كبير",
                "line-height": "ارتفاع السطر",
                spacing: "تباعد الأحرف",
                readable: "خط مقروء",
                links: "تحديد الروابط",
                titles: "تحديد العناوين",
                hint: "تلميحات",
                "stop-anim": "إيقاف الحركة",
                "dyslexic-font": "خط عسر القراءة",
                mask: "قناع القراءة",
                "hide-images": "إخفاء الصور",
                "bold-text": "نص غامق",
                "text-align": "محاذاة النص",
                saturation: "التشبع",
            },
            dynamic: {
                listening: "جاري الاستماع...",
                readSelection: "قراءة المحدد",
                textToSpeech: "تحويل النص إلى كلام",
                speechToText: "تحويل الكلام إلى نص",
                slFont: "خط لغة الإشارة",
                slFontFull: "خط الإشارة (كامل)",
                slFontSelect: "خط الإشارة (تحديد)",
                contrast: "تباين الألوان",
                highContrast: "تباين عالٍ",
                desaturate: "إزالة الألوان",
                readingMask: "قناع القراءة",
                readingLine: "خط القراءة",
                textAlign: "محاذاة النص",
                alignLeft: "محاذاة لليسار",
                alignCenter: "محاذاة للوسط",
                alignRight: "محاذاة لليمين",
                signVideo: "فيديو لغة الإشارة",
                hint: "تلميحات / أدوات مساعدة",

                // STT Modal
                sttTitle: "تحدث إلى نص",
                sttHelp: "تحدث الآن…",
                sttStop: "إيقاف",
                sttResume: "استكمال",
                sttClear: "مسح",
                sttCopy: "نسخ",
                sttCopied: "تم النسخ!",
                sttClose: "إغلاق",
                sttStopped: "تم الإيقاف.",
                sttNoMatch: "لم يتم التعرف على الكلام.",
                sttError: "حدث خطأ.",
            },
            hintPrefixes: {
                title: "العنوان",
                alt: "وصف الصورة",
                placeholder: "نص الحقل",
                link: "رابط",
                button: "زر",
            },
            alerts: {
                sttUnsupported:
                    "خدمة تحويل الكلام إلى نص غير متاحة (SpeechSDK غير محمل).",
                ttsUnsupported: "متصفحك لا يدعم تحويل النص إلى كلام.",
                micError: "تعذر الوصول إلى الميكروفون.",
            },
        }
        : {
            dir: "ltr",
            openMenuAria: "Open Accessibility Menu",
            closeMenuAria: "Close Menu",
            resetTitle: "Reset All",
            title: "Daem Accessibility Alt+O",
            profiles: "Accessibility Profiles",
            logo: `${ASSETS_BASE}daem_assets/en_daem.png`,
            signHeader: "Sign Language Interpreter",
            signClose: "Close Sign Language Video",
            signNote: "(Video URL supplied by backend)",
            profilesLabels: {
                motor: "Motor Impairment",
                visual: "Visual Impairment",
                colorblind: "Color Blind",
                dyslexia: "Dyslexia Friendly",
                lowvision: "Low Vision",
                cognitive: "Cognitive Learning",
                seizure: "Seizure / Epileptic",
                adhd: "ADHD",
            },
            featureLabels: {
                "sign-vid": "Sign Lang Video",
                "sign-font": "Sign Lang Font",
                "text-speech": "Text to Speech",
                "speech-text": "Speech to Text",
                contrast: "Color Contrast",
                "font-size": "Font Size",
                cursor: "Large Cursor",
                "line-height": "Line Height",
                spacing: "Char Spacing",
                readable: "Readable Font",
                links: "Highlight Links",
                titles: "Highlight Titles",
                hint: "Hint / Tooltips",
                "stop-anim": "Stop Animation",
                "dyslexic-font": "Dyslexic Font",
                mask: "Reading Mask",
                "hide-images": "Hide Images",
                "bold-text": "Bold Text",
                "text-align": "Text Alignment",
                saturation: "Saturation",
            },
            dynamic: {
                listening: "Listening...",
                readSelection: "Read Selection",
                textToSpeech: "Text to Speech",
                speechToText: "Speech to Text",
                slFont: "Sign Lang Font",
                slFontFull: "SL Font Full",
                slFontSelect: "SL Font Select",
                contrast: "Color Contrast",
                highContrast: "High Contrast",
                desaturate: "Desaturate",
                readingMask: "Reading Mask",
                readingLine: "Reading Line",
                textAlign: "Text Alignment",
                alignLeft: "Align Left",
                alignCenter: "Align Center",
                alignRight: "Align Right",
                signVideo: "Sign Lang Video",
                hint: "Hint / Tooltips",

                // STT Modal
                sttTitle: "Speech to Text",
                sttHelp: "Speak now…",
                sttStop: "Stop",
                sttResume: "Resume",
                sttClear: "Clear",
                sttCopy: "Copy",
                sttCopied: "Copied!",
                sttClose: "Close",
                sttStopped: "Stopped.",
                sttNoMatch: "Speech could not be recognized.",
                sttError: "An error occurred.",
            },
            hintPrefixes: {
                title: "Title",
                alt: "Image Alt Text",
                placeholder: "Placeholder",
                link: "Link",
                button: "Button",
            },
            alerts: {
                sttUnsupported:
                    "Speech to Text service not available (SpeechSDK not loaded).",
                ttsUnsupported: "Your browser does not support Text to Speech.",
                micError: "Could not access microphone.",
            },
        };

    /* --------------------------- 1) External CSS dependency (Font Awesome) --------------------------- */
    const faHref =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    const faAlready =
        Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(
            (l) => {
                const href = l.href || "";
                return (
                    href.includes("font-awesome") ||
                    href.includes("fontawesome") ||
                    href === faHref
                );
            }
        ) || !!document.querySelector(`link[href="${faHref}"]`);

    if (!faAlready) {
        const faLink = document.createElement("link");
        faLink.rel = "stylesheet";
        faLink.href = faHref;
        head.appendChild(faLink);
    }

    /* --------------------------- 2) Inject widget DOM (NO iframe) --------------------------- */
    const widgetWrapper = document.createElement("div");
    widgetWrapper.id = "daem-accessibility-widget";
    widgetWrapper.setAttribute("dir", I18N.dir);
    if (IS_AR) widgetWrapper.classList.add("daem-acc-ar");

    widgetWrapper.innerHTML = `
    <div id="daem-acc-filter-overlay"></div>

    <button id="daem-access-trigger" class="${IconclassName}" aria-label="${I18N.openMenuAria}" type="button">
      <i class="fa-solid fa-universal-access"></i>
    </button>

    <div id="daem-access-panel" aria-hidden="true">
      <div class="daem-access-header" id="acc-drag-handle">
        <h3>${I18N.title}</h3>
        <div class="daem-access-actions">
          <button id="daem-access-reset" title="${I18N.resetTitle}" type="button">
            <i class="fa-solid fa-rotate-left"></i>
          </button>
          <button id="daem-access-close" aria-label="${I18N.closeMenuAria}" type="button">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <div class="daem-profiles-accordion">
        <div class="daem-profiles-header" id="profiles-toggle" role="button" tabindex="0">
          <span>${I18N.profiles}</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>

        <div class="daem-profiles-content" id="daem-profiles-content">
          <div class="daem-profiles-grid">
            <button class="daem-profile-btn" data-profile="motor" type="button">
              <i class="fa-solid fa-keyboard"></i>
              ${I18N.profilesLabels.motor}
            </button>

            <button class="daem-profile-btn" data-profile="visual" type="button">
              <i class="fa-solid fa-eye-slash"></i>
              ${I18N.profilesLabels.visual}
            </button>

            <button class="daem-profile-btn" data-profile="colorblind" type="button">
              <i class="fa-solid fa-palette"></i>
              ${I18N.profilesLabels.colorblind}
            </button>

            <button class="daem-profile-btn" data-profile="dyslexia" type="button">
              <i class="fa-solid fa-book-open"></i>
              ${I18N.profilesLabels.dyslexia}
            </button>

            <button class="daem-profile-btn" data-profile="lowvision" type="button">
              <i class="fa-solid fa-magnifying-glass"></i>
              ${I18N.profilesLabels.lowvision}
            </button>

            <button class="daem-profile-btn" data-profile="cognitive" type="button">
              <i class="fa-solid fa-brain"></i>
              ${I18N.profilesLabels.cognitive}
            </button>

            <button class="daem-profile-btn" data-profile="seizure" type="button">
              <i class="fa-solid fa-bolt"></i>
              ${I18N.profilesLabels.seizure}
            </button>

            <button class="daem-profile-btn" data-profile="adhd" type="button">
              <i class="fa-solid fa-person-rays"></i>
              ${I18N.profilesLabels.adhd}
            </button>
          </div>
        </div>
      </div>

      <div class="daem-access-grid"></div>

      <div class="daem-access-footer">
        <img src="${I18N.logo}" alt="Daem Logo" style="max-height: 50px;">
      </div>
    </div>

    <div id="daem-reading-mask"></div>
    <div id="daem-reading-line"></div>

    <div id="daem-sign-lang-modal">
      <div class="daem-sign-header">
        <span><i class="fa-solid fa-hands-asl-interpreting"></i> ${I18N.signHeader}</span>
        <button class="daem-sign-close" aria-label="${I18N.signClose}" type="button">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="daem-sign-video-content">
        <iframe
          id="daem-sign-lang-iframe"
          src=""
          title="Sign Language Interpreter Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

      </div>
    </div>

    <!-- Speech-to-Text Popup (NO iframe) -->
    <div id="daem-stt-modal" aria-hidden="true">
      <div class="daem-stt-card" role="dialog" aria-modal="true" aria-labelledby="daem-stt-title">
        <div class="daem-stt-header">
          <div id="daem-stt-title" class="daem-stt-title">${I18N.dynamic.sttTitle}</div>
          <button id="daem-stt-close" class="daem-stt-close" type="button" aria-label="${I18N.dynamic.sttClose}">✕</button>
        </div>

        <div class="daem-stt-body">
          <div id="daem-stt-help" class="daem-stt-help">${I18N.dynamic.sttHelp}</div>
          <textarea
            id="daem-stt-text"
            class="daem-stt-text"
            rows="6"           
          ></textarea>
           

          <div class="daem-stt-actions">
            <button id="daem-stt-copy" class="daem-stt-btn" type="button">
              <i class="fa-solid fa-copy"></i> <span>${I18N.dynamic.sttCopy}</span>
            </button>

            <button id="daem-stt-clear" class="daem-stt-btn" type="button">
              <i class="fa-solid fa-eraser"></i> <span>${I18N.dynamic.sttClear}</span>
            </button>

            <button id="daem-stt-stop" class="daem-stt-btn" type="button">
              <i class="fa-solid fa-circle-stop"></i> <span>${I18N.dynamic.sttStop}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="daem-hint-tooltip"
      style="position:absolute;display:none;background:#fffcc2;border:1px solid #f9e29a;padding:5px 8px;border-radius:4px;font-size:12px;pointer-events:none;z-index:10004;max-width:300px;"
    ></div>
  `;

    /* --------------------------- 3) Inject CSS (existing + RTL patches + STT modal) --------------------------- */
    const styleElement = document.createElement("style");

    styleElement.innerHTML = `
  /* ========== Your Host Floating Button ========== */
  .the-btn{
    position: fixed;
    background-color: #12cd6a;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
    line-height: 35px !important;
    z-index: 100000000;
    background-color: #a20303;
    border: 4px solid #a20303;
    padding: 0;
  }
  .Top_Left {left: 25px;top: 20px;}
  .Top_Right {right: 25px;top: 20px;}
  .Top_Center {left: 49%;top: 20px;}
  .Middle_Left {left: 25px;top: 50%;}
  .Middle_Right {right: 25px;top: 50%;}
  .Bottom_Right {right: 25px;bottom: 20px;}
  .Bottom_Center {left: 49%;bottom: 20px;}
  .Bottom_Left {left: 25px;bottom: 20px;}
  .the-btn img{width: 35px;height: auto;}

  /* ========== Widget Variables ========== */
  :root{
    --daem-acc-primary: #2563eb;
    --daem-acc-bg: #ffffff;
    --daem-acc-text: #1f2937;
    --daem-acc-active-bg: #eff6ff;
    --daem-acc-active-border: #3b82f6;
    --daem-reading-mask-height: 100px;
  }

  /* Custom Fonts */
  @font-face {
    font-family: 'AmericanSignLanguage';
    src: url('${ASSETS_BASE}daem_assets/AmericanSignLanguage.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'ArabicSignLanguage';
    src: url('${ASSETS_BASE}daem_assets/daemArabicSignLangFont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'OpenDyslexic';
    src: url('${ASSETS_BASE}daem_assets/OpenDyslexic-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  /* Filter overlay */
  #daem-acc-filter-overlay{
    position: fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    pointer-events:none;
    z-index:9998;
    display:none;
  }
  body.daem-acc-contrast-1 #daem-acc-filter-overlay { display:block; backdrop-filter: contrast(150%); -webkit-backdrop-filter: contrast(150%); }
  body.daem-acc-contrast-2 #daem-acc-filter-overlay { display:block; backdrop-filter: grayscale(100%); -webkit-backdrop-filter: grayscale(100%); }
  body.daem-acc-saturation-1 #daem-acc-filter-overlay { display:block; backdrop-filter: saturate(150%); -webkit-backdrop-filter: saturate(150%); }
  body.daem-acc-saturation-2 #daem-acc-filter-overlay { display:block; backdrop-filter: saturate(200%); -webkit-backdrop-filter: saturate(200%); }
  body.daem-acc-saturation-3 #daem-acc-filter-overlay { display:block; backdrop-filter: saturate(300%); -webkit-backdrop-filter: saturate(300%); }

  body.daem-acc-contrast-1{
    background-color:#000 !important;
    color:#fff !important;
  }
  body.daem-acc-contrast-1 *:not(#daem-accessibility-widget, #daem-accessibility-widget *){
    background-color:#000 !important;
    color:#fff !important;
    border-color:#fff !important;
  }

  /* Widget container */
 #daem-accessibility-widget {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    z-index: 99999999999 !important;
    filter: none !important;
    position: relative !important;
    display: block;
}

  /* Widget trigger (internal) */
  #daem-access-trigger{
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: auto;
    width: 60px;
    height: 60px;
    /*background: var(--daem-acc-primary);*/
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 28px;
    cursor: pointer;
    z-index: 10000;
    background-color: #a20303;
    border: 4px solid #a20303
  }

  /* Panel (default LTR slide from left) */
  #daem-access-panel{
    position: fixed;
    top: 0;
    left: -400px;
    right: auto;
    width: 380px;
    height: 100vh;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 10px 0 30px rgba(0,0,0,0.15);
    transition: left 0.4s;
    display: flex;
    flex-direction: column;
    z-index: 10001;
    overflow-y: auto;
  }
  #daem-access-panel.daem-is-open{ left: 0; right: auto; }

  /* Header */
.daem-access-header{
  padding: 12px 20px;        /* ✅ مسافة أعلى/أسفل أوضح */
  min-height: 52px;          /* ✅ ارتفاع ثابت قريب من التصميم */
  max-height: none;          /* ✅ الغِ التقييد اللي بيضغط الهيدر */
  cursor: grab;
  display: flex;
  align-items: center;       /* ✅ توسيط رأسي حقيقي */
  justify-content: space-between;
  background: #fff;
}

/* Title */
.daem-access-header h3{
  margin: 0 !important;
  font-size: 17px !important;
  line-height: 1.2;          /* ✅ يمنع تقطيع/ضغط */
}

/* Actions wrapper */
.daem-access-actions{
  display: flex;
  align-items: center;
  gap: 8px;                  /* ✅ بدل اللعب في margins */
}

/* Buttons */

  .daem-access-header button{
    font-size: 14px;
    background-color: var(--daem-acc-primary);
    color: white !important;
    border: none;
    border-radius: 5px;
    padding: 8px 10px;
    line-height: 1;
    cursor: pointer;
    margin-left: 5px;
    box-shadow: none !important;
  }

  /* Profiles accordion */
  .daem-profiles-accordion{ border-bottom: 1px solid rgba(0,0,0,0.1); background:#fff; }
  .daem-profiles-header{
    padding: 15px 20px;
    cursor: pointer;
    font-weight: 600;
    color: var(--daem-acc-primary);
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#f8fafc;
  }
  .daem-profiles-header:hover{ background:#f1f5f9; }
  .daem-profiles-content{ display:none; padding: 15px 20px; background:#fff; }
  .daem-profiles-content.daem-active{ display:block; }
  .daem-profiles-grid{ display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .daem-profile-btn {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 10px;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
    color: var(--daem-acc-text) !important;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    box-shadow: none !important;
}
  .daem-profile-btn:hover{ background:#f9fafb; border-color:#d1d5db; }
  .daem-profile-btn.daem-active{
    background: var(--daem-acc-active-bg);
    border: 2px solid var(--daem-acc-active-border);
    color: var(--daem-acc-primary);
    font-weight: bold;
  }
  .daem-profile-btn i{ margin-bottom: 5px; font-size: 18px; }

  /* Feature grid */
  .daem-access-grid{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 25px;
    flex-grow: 1;
  }
  .daem-access-btn{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:white;
    border:1px solid rgba(0,0,0,0.05);
    border-radius:16px;
    padding:15px 10px;
    cursor:pointer;
    position:relative;
    height:110px;
    color: var(--daem-acc-text);
    text-align:center;
    font-size: 14px !important;
    font-weight: 400 !important;
  }
  .daem-access-btn.daem-active{
    background: var(--daem-acc-active-bg);
    border:2px solid var(--daem-acc-active-border);
    color:#1d4ed8;
  }
  .daem-access-btn i{
    font-size:28px;
    margin-bottom:12px;
    color: var(--daem-acc-text);
  }
  .daem-access-btn.daem-active i{ color: var(--daem-acc-primary); }

  .daem-level-badge{
    position:absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background-color: var(--daem-acc-primary);
    color: white;
    border-radius: 50%;
    font-size: 11px;
    font-weight: bold;
    display:none;
    justify-content:center;
    align-items:center;
  }
  .daem-access-btn.daem-active .daem-level-badge[data-level]:not([data-level="1"]){ display:flex; }

  .daem-shortcut-badge{
    position:absolute;
    top:5px;
    right:5px;
    font-size: 10px;
    opacity: 0.7;
  }

  /* Recording pulse */
  @keyframes daem-pulse-red {
    0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
    100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
  }
  .daem-access-btn.daem-recording-active{
    border-color:#ef4444 !important;
    color:#ef4444 !important;
    animation: daem-pulse-red 2s infinite;
  }
  .daem-access-btn.daem-recording-active i{ color:#ef4444 !important; }

  /* Footer */
  .daem-access-footer{
    height: 50px;
    min-height: 50px;
    background:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 5px 0;
    border-top: 1px solid #d1d5db;
    flex-shrink: 0;
    position: sticky;
    bottom: 0;
  }
  .daem-access-footer img{ max-height:100%; max-width:90%; object-fit:contain; }

  /* Cursor */
  body.daem-acc-cursor *{
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewport="0 0 128 128" style="fill:black;font-size:88px;"><text y="80%">👆🏻</text></svg>') 32 0, auto !important;
  }

  /* Sign language modal */
  #daem-sign-lang-modal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 680px;
    max-width: 90vw;
    /* height: 550px */
    background: rgba(0,0,0,0.9);
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    z-index: 10005;
    display:none;
    flex-direction:column;
    overflow:hidden;
  }
  #daem-sign-lang-modal.daem-active{ display:flex; }
  #daem-sign-lang-modal .daem-sign-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 10px 15px;
    background: var(--daem-acc-primary);
    color:white;
    flex-shrink: 0;
  }
  #daem-sign-lang-modal .daem-sign-header span i{ margin-right:8px; }
  #daem-sign-lang-modal .daem-sign-close{
    background:none;
    border:none;
    color:white;
    font-size:20px;
    cursor:pointer;
  }
  /* Sign language video container */
#daem-sign-lang-modal .daem-sign-video-content {
  flex-grow: 1;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Iframe itself */
#daem-sign-lang-iframe {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
  max-height: 100%;
}


  /* الأهم */
  object-fit: contain;   /* يمنع القص */
  background: black;
}


  /* Reading mask/line */
  #daem-reading-mask{
  display:none;
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events:none;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.75) 0%,
    rgba(0,0,0,0.75) var(--rm-top, 40%),
    rgba(0,0,0,0)     var(--rm-top, 40%),
    rgba(0,0,0,0)     var(--rm-bottom, 60%),
    rgba(0,0,0,0.75)  var(--rm-bottom, 60%),
    rgba(0,0,0,0.75)  100%
  );
}
body.daem-acc-mask-1 #daem-reading-mask{ display:block; }

  #daem-reading-mask.daem-moving{
    mask-image: linear-gradient(to bottom, black 0%, transparent 0%, transparent var(--daem-reading-mask-height), black var(--daem-reading-mask-height));
    -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 0%, transparent var(--daem-reading-mask-height), black var(--daem-reading-mask-height));
  }

  #daem-reading-mask{
  display:none;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: 9998;
  background: rgba(0,0,0,0.7);
  pointer-events:none;
}
body.daem-acc-mask-1 #daem-reading-mask{ display:block; }
#daem-reading-mask.daem-moving{
  mask-image: linear-gradient(...);
  -webkit-mask-image: linear-gradient(...);
}


  #daem-reading-line{
    display:none;
    position: fixed;
    width: 30%;
    height: 5px;
    background-color: yellow;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    pointer-events:none;
    z-index: 9999;
    transform: translate(-50%, -50%);
  }
  #daem-reading-line::after{
  content:"";
  position:absolute;
  left:50%;
  top:-10px; /* فوق الخط */
  transform:translateX(-50%);
  width:0;
  height:0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid yellow;  /* نفس لون الخط */
  filter: drop-shadow(0 1px 0 #000); /* حد بسيط */
}
  body.daem-acc-mask-2 #daem-reading-line{ display:block; }

  /* Effects */

  /* Default (English/Latin) */
  body.daem-acc-sign-font-1 *:not(#daem-accessibility-widget, #daem-accessibility-widget *, #daem-sign-lang-modal, #daem-sign-lang-modal *) {
    font-family: 'AmericanSignLanguage', sans-serif !important;
  }
  /* Arabic override */
  body.daem-acc-sign-font-1 *:lang(ar):not(#daem-accessibility-widget, #daem-accessibility-widget *, #daem-sign-lang-modal, #daem-sign-lang-modal *) {
    font-family: 'ArabicSignLanguage', sans-serif !important;
  }

  /* highlight */
  span.daem-acc-sl-highlight {
    font-size: 150% !important;
    background-color: yellow !important;
    color: black !important;
    padding: 2px 0;
    display: inline-block;
  }
  span.daem-acc-sl-highlight:lang(ar) { font-family: 'ArabicSignLanguage', sans-serif !important; }
  span.daem-acc-sl-highlight:not(:lang(ar)) { font-family: 'AmericanSignLanguage', sans-serif !important; }

  body.daem-acc-fontsize-1 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { font-size: 25px !important; }
  body.daem-acc-fontsize-2 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { font-size: 30px !important; }
  body.daem-acc-fontsize-3 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { font-size: 35px !important; }
  body.daem-acc-fontsize-4 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { font-size: 40px !important; }

  body.daem-acc-lineheight-1 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { line-height: 1.75 !important; }
  body.daem-acc-lineheight-2 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { line-height: 2 !important; }
  body.daem-acc-lineheight-3 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { line-height: 2.25 !important; }
  body.daem-acc-lineheight-4 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { line-height: 2.5 !important; }

  body.daem-acc-spacing-1 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { letter-spacing: 1px !important; word-spacing: 2px !important; }
  body.daem-acc-spacing-2 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { letter-spacing: 2px !important; word-spacing: 4px !important; }
  body.daem-acc-spacing-3 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { letter-spacing: 3px !important; word-spacing: 6px !important; }
  body.daem-acc-spacing-4 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { letter-spacing: 4px !important; word-spacing: 8px !important; }

  body.daem-acc-links a:not(#daem-accessibility-widget a){
    text-decoration: underline !important;
    background-color: yellow !important;
    color: black !important;
    padding: 2px;
  }

  body.daem-acc-titles h1:not(#daem-accessibility-widget *),
  body.daem-acc-titles h2:not(#daem-accessibility-widget *),
  body.daem-acc-titles h3:not(#daem-accessibility-widget *),
  body.daem-acc-titles h4:not(#daem-accessibility-widget *),
  body.daem-acc-titles h5:not(#daem-accessibility-widget *),
  body.daem-acc-titles h6:not(#daem-accessibility-widget *){
    border: 2px solid var(--daem-acc-primary) !important;
    padding: 5px !important;
  }

  body.daem-acc-dyslexic-font *:not(#daem-accessibility-widget, #daem-accessibility-widget *) {
    font-family: 'OpenDyslexic', sans-serif !important;
  }
  body.daem-acc-font *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { font-family: Arial, sans-serif !important; }

  body.daem-acc-stop-anim *:not(#daem-accessibility-widget, #daem-accessibility-widget *),
  body.daem-acc-stop-anim *:not(#daem-accessibility-widget, #daem-accessibility-widget *):before,
  body.daem-acc-stop-anim *:not(#daem-accessibility-widget, #daem-accessibility-widget *):after{
    animation:none !important;
    transition:none !important;
  }

  body.daem-acc-hide-images img:not(#daem-accessibility-widget img){ display:none !important; }

  body.daem-acc-bold-1 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { font-weight: 700 !important; }
  body.daem-acc-bold-2 *:not(#daem-accessibility-widget, #daem-accessibility-widget *) { font-weight: 900 !important; }

  body.daem-acc-align-left *:not(#daem-accessibility-widget *) { text-align:left !important; }
  body.daem-acc-align-center *:not(#daem-accessibility-widget *) { text-align:center !important; }
  body.daem-acc-align-right *:not(#daem-accessibility-widget *) { text-align:right !important; }

  /* ===== RTL patches (Arabic) ===== */
  #daem-accessibility-widget.daem-acc-ar #daem-access-trigger{ left: auto; right: 20px; }
  #daem-accessibility-widget.daem-acc-ar #daem-access-panel{
    left: auto;
    right: -400px;
    transition: right 0.4s;
    box-shadow: -10px 0 30px rgba(0,0,0,0.15);
  }
  #daem-accessibility-widget.daem-acc-ar #daem-access-panel.daem-is-open{ right: 0; left: auto; }
  #daem-accessibility-widget.daem-acc-ar .daem-shortcut-badge{ right: auto; left: 5px; }
  #daem-accessibility-widget.daem-acc-ar .daem-level-badge{ left: auto; right: 5px; }

  /* ===== Speech-to-Text Modal ===== */
  #daem-stt-modal{
    position: fixed;
    inset: 0;
    display: none;
    z-index: 10006;
    background: rgba(0,0,0,0.55);
    align-items: center;
    justify-content: center;
    padding: 14px;
  }
  #daem-stt-modal.daem-active{ display:flex; }
  #daem-stt-modal .daem-stt-card{
    width: 560px;
    max-width: 95vw;
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.25);
    overflow: hidden;
  }
  #daem-stt-modal .daem-stt-header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 12px 14px;
    background: var(--daem-acc-primary);
    color: #fff;
  }
  #daem-stt-modal .daem-stt-title{ font-weight: 700; }
  #daem-stt-modal .daem-stt-close{
    background: transparent;
    border: none;
    color: #fff !important;
    font-size: 18px;
    cursor: pointer;
    box-shadow: none !important;
    width: auto !important;
  }
  #daem-stt-modal .daem-stt-body{ padding: 14px; }
  #daem-stt-modal .daem-stt-help{
    font-size: 13px;
    opacity: 0.85;
    margin-bottom: 8px;
  }
  #daem-stt-modal .daem-stt-text{
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 10px;
    resize: vertical;
    font-size: 14px;
    outline: none;
    box-shadow: none !important;
    background: #fff !important;
  }
  #daem-stt-modal .daem-stt-actions{
    display:flex;
    gap: 10px;
    margin-top: 10px;
    justify-content: flex-end;
  }
  #daem-stt-modal .daem-stt-btn{
    border: none;
    border-radius: 10px;
    padding: 10px 12px;
    cursor: pointer;
    background: #f3f4f6 !important;

    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: none !important;
    color: #343a40 !important;
  }
  #daem-stt-modal .daem-stt-btn i{ font-size: 14px; }
  #daem-stt-modal .daem-stt-btn:hover{ background:#e5e7eb; }

  #daem-accessibility-widget.daem-acc-ar #daem-stt-modal .daem-stt-card,
  #daem-accessibility-widget.daem-acc-ar #daem-stt-modal { direction: rtl; }
  `;

    /* --------------------------- 4) Inject scripts you already had --------------------------- */
    const scriptElement = document.createElement("script");
    scriptElement.src = plugHostingUrl2020 + scriptApplayChanges;

    const scriptElementsdk = document.createElement("script");
    scriptElementsdk.src = scriptElementsdkURL;

    /* --------------------------- 5) Append everything --------------------------- */
    body.appendChild(styleElement);
    body.appendChild(widgetWrapper);
    body.appendChild(scriptElement);
    body.appendChild(scriptElementsdk);

    /* --------------------------- 6) Widget behavior (JS) --------------------------- */
    const panel = document.getElementById("daem-access-panel");
    const accessTrigger = document.getElementById("daem-access-trigger");
    const accessClose = document.getElementById("daem-access-close");
    const accessReset = document.getElementById("daem-access-reset");
    const container = document.querySelector("#daem-access-panel .daem-access-grid");
    const readingMask = document.getElementById("daem-reading-mask");
    const readingLine = document.getElementById("daem-reading-line");
    const hintTooltip = document.getElementById("daem-hint-tooltip");
    const signLangModal = document.getElementById("daem-sign-lang-modal");
    const signLangIframe = document.getElementById("daem-sign-lang-iframe");

    // STT Modal elements
    const sttModal = document.getElementById("daem-stt-modal");
    const sttTitle = document.getElementById("daem-stt-title");
    const sttHelp = document.getElementById("daem-stt-help");
    const sttText = document.getElementById("daem-stt-text");
    const sttClose = document.getElementById("daem-stt-close");
    const sttStop = document.getElementById("daem-stt-stop");
    const sttClear = document.getElementById("daem-stt-clear");
    const sttCopy = document.getElementById("daem-stt-copy");

    const SIGN_VIDEO_URL = youTubeVideoLink; // provided by backend

    // Feature definitions (localized labels)
    const features = [
        {
            id: "sign-vid",
            label: I18N.featureLabels["sign-vid"],
            icon: "fa-hands-asl-interpreting",
            key: "1",
        },
        {
            id: "sign-font",
            label: I18N.featureLabels["sign-font"],
            icon: "fa-hand-holding-heart",
            key: "2",
        },
        {
            id: "text-speech",
            label: I18N.featureLabels["text-speech"],
            icon: "fa-volume-high",
            key: "3",
        },
        {
            id: "speech-text",
            label: I18N.featureLabels["speech-text"],
            icon: "fa-microphone",
            key: "4",
        },
        {
            id: "contrast",
            label: I18N.featureLabels.contrast,
            icon: "fa-circle-half-stroke",
            key: "C",
        },
        {
            id: "font-size",
            label: I18N.featureLabels["font-size"],
            icon: "fa-text-height",
            key: "F",
        },
        {
            id: "cursor",
            label: I18N.featureLabels.cursor,
            icon: "fa-arrow-pointer",
            key: "M",
        },
        {
            id: "line-height",
            label: I18N.featureLabels["line-height"],
            icon: "fa-arrows-left-right-to-line",
            key: "L",
        },
        {
            id: "spacing",
            label: I18N.featureLabels.spacing,
            icon: "fa-text-width",
            key: "S",
        },
        {
            id: "readable",
            label: I18N.featureLabels.readable,
            icon: "fa-font",
            key: "R",
        },
        { id: "links", label: I18N.featureLabels.links, icon: "fa-link", key: "H" },
        {
            id: "titles",
            label: I18N.featureLabels.titles,
            icon: "fa-heading",
            key: "T",
        },
        {
            id: "hint",
            label: I18N.featureLabels.hint,
            icon: "fa-circle-question",
            key: "Q",
        },
        {
            id: "stop-anim",
            label: I18N.featureLabels["stop-anim"],
            icon: "fa-circle-stop",
            key: "P",
        },
        {
            id: "dyslexic-font",
            label: I18N.featureLabels["dyslexic-font"],
            icon: "fa-file-signature",
            key: "D",
        },
        {
            id: "mask",
            label: I18N.featureLabels.mask,
            icon: "fa-eye-slash",
            key: "V",
        },
        {
            id: "hide-images",
            label: I18N.featureLabels["hide-images"],
            icon: "fa-eye-slash",
            key: "I",
        },
        {
            id: "bold-text",
            label: I18N.featureLabels["bold-text"],
            icon: "fa-bold",
            key: "B",
        },
        {
            id: "text-align",
            label: I18N.featureLabels["text-align"],
            icon: "fa-align-center",
            key: "G",
        },
        {
            id: "saturation",
            label: I18N.featureLabels.saturation,
            icon: "fa-droplet",
            key: "U",
        },
    ];

    // Build feature buttons
    features.forEach((feat) => {
        const btn = document.createElement("div");
        btn.className = "daem-access-btn";
        btn.setAttribute("data-id", feat.id);
        btn.setAttribute("role", "button");
        btn.setAttribute("aria-pressed", "false");
        btn.innerHTML = `
      <div class="daem-shortcut-badge">Alt+${feat.key}</div>
      <div class="daem-level-badge"></div>
      <i class="fa-solid ${feat.icon}"></i>
      <span>${feat.label}</span>
    `;
        btn.addEventListener("click", () => toggleFeature(feat.id, btn));
        container.appendChild(btn);
    });

    // Draggable panel
    makePanelDraggable(panel, document.getElementById("acc-drag-handle"));

    function makePanelDraggable(draggableElement, handle) {
        let isDragging = false;
        let startX;
        let initialOffset;
        const PANEL_WIDTH = 380;

        function getCurrentOffset() {
            if (IS_AR) {
                const styleRight = draggableElement.style.right;
                return styleRight && styleRight !== "0px" ? parseFloat(styleRight) : 0;
            }
            const styleLeft = draggableElement.style.left;
            return styleLeft && styleLeft !== "0px" ? parseFloat(styleLeft) : 0;
        }

        function setOffset(val) {
            if (IS_AR) draggableElement.style.right = `${val}px`;
            else draggableElement.style.left = `${val}px`;
        }

        function onStart(e) {
            if (!draggableElement.classList.contains("daem-is-open")) return;
            if (e.button !== 0 && !e.touches) return;
            isDragging = true;
            document.body.style.userSelect = "none";
            initialOffset = getCurrentOffset();
            draggableElement.style.transition = "none";
            startX = e.clientX || (e.touches && e.touches[0].clientX);
        }

        function onMove(e) {
            if (!isDragging) return;
            e.preventDefault();
            const currentX = e.clientX || (e.touches && e.touches[0].clientX);
            const dx = currentX - startX;
            let newOffset = IS_AR ? initialOffset - dx : initialOffset + dx;
            const maxOffset = Math.max(0, window.innerWidth - PANEL_WIDTH);
            const minOffset = 0;
            newOffset = Math.min(newOffset, maxOffset);
            newOffset = Math.max(newOffset, minOffset);
            setOffset(newOffset);
            draggableElement.classList.add("daem-is-open");
        }

        function onEnd() {
            if (!isDragging) return;
            isDragging = false;
            document.body.style.userSelect = "";
            if (IS_AR) draggableElement.style.transition = "right 0.4s";
            else draggableElement.style.transition = "left 0.4s";
            const finalOffset = getCurrentOffset();
            const maxOffset = Math.max(0, window.innerWidth - PANEL_WIDTH);
            if (finalOffset < 0) setOffset(0);
            else if (finalOffset > maxOffset) setOffset(maxOffset);
            draggableElement.classList.add("daem-is-open");
        }

        handle.addEventListener("mousedown", onStart);
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onEnd);

        handle.addEventListener("touchstart", (e) => onStart(e), {
            passive: false,
        });
        document.addEventListener("touchmove", (e) => onMove(e), {
            passive: false,
        });
        document.addEventListener("touchend", onEnd);
    }

    // State
    let fontSizeLevel = 0;
    let contrastLevel = 0;
    let lineHeightLevel = 0;
    let charSpacingLevel = 0;
    let textToSpeechLevel = 0;
    let signFontLevel = 0;
    let readingMaskLevel = 0;
    let boldLevel = 0;
    let textAlignLevel = 0;
    let saturationLevel = 0;

    let isHintModeActive = false;

    let ttsSynth = null;
    let ttsIsSpeaking = false;

    // ---------- Speech-to-Text (Azure SpeechSDK) state ----------
    let sttController = null; // { stop(), close() ... }
    let sttFinalText = "";
    let sttRecognizer = null;
    let sttIsRunning = false;
    let sttTargetElement = null;

    // Helper: editable field
    function getActiveEditableElement() {
        const el = document.activeElement;
        if (!el) return null;
        const tag = (el.tagName || "").toUpperCase();
        if (tag === "INPUT" || tag === "TEXTAREA") return el;
        if (el.isContentEditable) return el;
        return null;
    }

    function writeTextToElement(el, value) {
        if (!el) return;
        const tag = (el.tagName || "").toUpperCase();
        if (tag === "INPUT" || tag === "TEXTAREA") {
            el.value = value;
            el.dispatchEvent(new Event("input", { bubbles: true }));
            el.dispatchEvent(new Event("change", { bubbles: true }));
            return;
        }
        if (el.isContentEditable) {
            el.innerText = value;
            el.dispatchEvent(new Event("input", { bubbles: true }));
        }
    }

    function setSttBoth(value) {
        sttText.value = value;
        writeTextToElement(sttTargetElement, value);
    }

    function setStopButtonUI(isRunning) {
        const icon = sttStop.querySelector("i");
        const text = sttStop.querySelector("span");
        if (isRunning) {
            if (icon) icon.className = "fa-solid fa-circle-stop";
            if (text) text.innerText = I18N.dynamic.sttStop;
        } else {
            if (icon) icon.className = "fa-solid fa-circle-play";
            if (text) text.innerText = I18N.dynamic.sttResume;
        }
    }

    async function copySttText() {
        const value = (sttText.value || "").trim();
        if (!value) return;

        try {
            await navigator.clipboard.writeText(value);
        } catch (e) {
            // Fallback
            sttText.focus();
            sttText.select();
            document.execCommand("copy");
            sttText.setSelectionRange(0, 0);
        }

        const labelSpan = sttCopy.querySelector("span");
        const old = labelSpan ? labelSpan.innerText : "";
        if (labelSpan) labelSpan.innerText = I18N.dynamic.sttCopied || "Copied!";
        setTimeout(() => {
            if (labelSpan) labelSpan.innerText = I18N.dynamic.sttCopy || old;
        }, 900);
    }

    function openSttModal() {
        // localize (in case)
        sttTitle.textContent = I18N.dynamic.sttTitle;
        sttHelp.textContent = I18N.dynamic.sttHelp;

        const clearSpan = sttClear.querySelector("span");
        const copySpan = sttCopy.querySelector("span");
        if (clearSpan) clearSpan.innerText = I18N.dynamic.sttClear;
        if (copySpan) copySpan.innerText = I18N.dynamic.sttCopy;

        sttClose.setAttribute("aria-label", I18N.dynamic.sttClose);
        setStopButtonUI(sttIsRunning);

        sttModal.classList.add("daem-active");
        sttModal.setAttribute("aria-hidden", "false");
        sttText.focus();
    }

    function closeSttModal() {
        sttModal.classList.remove("daem-active");
        sttModal.setAttribute("aria-hidden", "true");
    }

    // Close on overlay click
    sttModal.addEventListener("click", (e) => {
        if (e.target === sttModal) {
            stopSpeechToText(true);
        }
    });

    sttClose.addEventListener("click", () => stopSpeechToText(true));
    sttCopy.addEventListener("click", copySttText);

    sttClear.addEventListener("click", () => {
        sttFinalText = "";
        setSttBoth("");
    });

    // Stop/Resume toggle
    sttStop.addEventListener("click", () => {
        // Pause
        if (sttRecognizer && sttIsRunning) {
            sttRecognizer.stopContinuousRecognitionAsync(
                () => {
                    sttIsRunning = false;
                    sttHelp.textContent = I18N.dynamic.sttStopped;
                    setStopButtonUI(false);
                },
                (err) => {
                    console.error("stopContinuousRecognitionAsync error:", err);
                    sttIsRunning = false;
                    sttHelp.textContent = I18N.dynamic.sttError;
                    setStopButtonUI(false);
                }
            );
            return;
        }

        // Resume
        if (sttRecognizer && !sttIsRunning) {
            sttHelp.textContent = I18N.dynamic.sttHelp;
            sttRecognizer.startContinuousRecognitionAsync(
                () => {
                    sttIsRunning = true;
                    setStopButtonUI(true);
                },
                (err) => {
                    console.error("startContinuousRecognitionAsync error:", err);
                    sttIsRunning = false;
                    sttHelp.textContent = I18N.dynamic.sttError;
                    setStopButtonUI(false);
                }
            );
        }
    });

    /**
     * speakToText (integrated)
     * - Opens popup
     * - Starts continuous recognition
     * - Writes into popup + active field
     */
    function speakToText() {
        const SpeechSDK = window.SpeechSDK;
        if (!SpeechSDK) {
            alert(I18N.alerts.sttUnsupported);
            return null;
        }

        // Capture active field at start (selected field)
        sttTargetElement = getActiveEditableElement();

        // Reset UI state
        sttFinalText = "";
        sttHelp.textContent = I18N.dynamic.sttHelp;
        sttText.value = "";
        openSttModal();

        // Azure config (same as your old function)
        const subscriptionKey = "C22K2jy9NMPmh8OI34FGxcqrC18WSZBnAnNnXpsqHxeVbWKRSBEAJQQJ99CAAC5RqLJXJ3w3AAAYACOGGW2s";
        const serviceRegion = "westeurope";
        const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
            subscriptionKey,
            serviceRegion
        );
        speechConfig.speechRecognitionLanguage = IS_AR ? "ar-EG" : "en-US";

        const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

        // Cleanup any old recognizer
        try {
            if (sttRecognizer) sttRecognizer.close && sttRecognizer.close();
        } catch (e) { }

        sttRecognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
        sttIsRunning = true;
        setStopButtonUI(true);

        // Partial updates
        sttRecognizer.recognizing = (s, e) => {
            const partial = e.result && e.result.text ? e.result.text.trim() : "";
            const combined = (
                sttFinalText ? `${sttFinalText} ${partial}` : partial
            ).trim();
            if (combined) setSttBoth(combined);
        };

        // Final updates
        sttRecognizer.recognized = (s, e) => {
            if (!e.result) return;

            if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
                const chunk = (e.result.text || "").trim();
                if (chunk) {
                    sttFinalText = (
                        sttFinalText ? `${sttFinalText} ${chunk}` : chunk
                    ).trim();
                    setSttBoth(sttFinalText);
                }
            } else if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
                sttHelp.textContent = I18N.dynamic.sttNoMatch;
            }
        };

        sttRecognizer.canceled = (s, e) => {
            if (e && e.errorDetails) {
                console.log("STT canceled:", e.errorDetails);
                sttHelp.textContent = I18N.dynamic.sttError;
            } else {
                sttHelp.textContent = I18N.dynamic.sttStopped;
            }
            stopSpeechToText(false);
        };

        sttRecognizer.sessionStopped = () => {
            sttHelp.textContent = I18N.dynamic.sttStopped;
            stopSpeechToText(false);
        };

        sttRecognizer.startContinuousRecognitionAsync(
            () => { },
            (err) => {
                console.error("startContinuousRecognitionAsync error:", err);
                sttHelp.textContent = I18N.dynamic.sttError;
                sttIsRunning = false;
                setStopButtonUI(false);
            }
        );

        return {
            stop: () => stopSpeechToText(false),
            close: () => stopSpeechToText(true),
        };
    }

    function stopSpeechToText(closePopup) {
        // Stop recognizer if running
        if (sttRecognizer && sttIsRunning) {
            sttRecognizer.stopContinuousRecognitionAsync(
                () => {
                    sttIsRunning = false;
                    sttHelp.textContent = I18N.dynamic.sttStopped;
                    setStopButtonUI(false);
                },
                (err) => {
                    console.error("stopContinuousRecognitionAsync error:", err);
                    sttIsRunning = false;
                    sttHelp.textContent = I18N.dynamic.sttError;
                    setStopButtonUI(false);
                }
            );
        } else {
            sttIsRunning = false;
            setStopButtonUI(false);
        }

        // Update widget button UI if exists
        const sttBtn = document.querySelector('.daem-access-btn[data-id="speech-text"]');
        if (sttBtn) {
            sttBtn.classList.remove("daem-recording-active", "daem-active");
            const sp = sttBtn.querySelector("span");
            if (sp) sp.innerText = I18N.dynamic.speechToText;
        }

        if (closePopup) closeSttModal();
        sttController = null;
    }

    function toggleSpeechToText(btnElement) {
        // If currently active => pause (keep popup open)
        if (btnElement.classList.contains("daem-recording-active")) {
            if (sttRecognizer && sttIsRunning) {
                sttRecognizer.stopContinuousRecognitionAsync(() => {
                    sttIsRunning = false;
                    sttHelp.textContent = I18N.dynamic.sttStopped;
                    setStopButtonUI(false);
                });
            }
            btnElement.classList.remove("daem-recording-active");
            btnElement.querySelector("span").innerText = I18N.dynamic.speechToText;
            return;
        }

        // Start
        sttController = speakToText();
        if (!sttController) return;

        btnElement.classList.add("daem-recording-active", "daem-active");
        btnElement.querySelector("span").innerText = I18N.dynamic.listening;
    }

    function stopAzureTts() {
        try {
            if (ttsSynth) {
                ttsSynth.close();
                ttsSynth = null;
            }
        } catch (e) { }
        ttsIsSpeaking = false;
    }

    function speakAzure(text) {
        const SpeechSDK = window.SpeechSDK;
        if (!SpeechSDK) {
            alert("Azure SpeechSDK is not loaded.");
            return;
        }

        // stop any ongoing TTS before starting a new one
        stopAzureTts();

        const subscriptionKey = "C22K2jy9NMPmh8OI34FGxcqrC18WSZBnAnNnXpsqHxeVbWKRSBEAJQQJ99CAAC5RqLJXJ3w3AAAYACOGGW2s";
        const serviceRegion = "westeurope";
        const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
            subscriptionKey,
            serviceRegion
        );

        // Pick voice + language
        if (IS_AR) {
            speechConfig.speechSynthesisLanguage = "ar-EG";
            speechConfig.speechSynthesisVoiceName = "ar-EG-SalmaNeural";
            // speechConfig.speechSynthesisVoiceName = "ar-EG-ShakirNeural";
        } else {
            speechConfig.speechSynthesisLanguage = "en-US";
            speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";
        }

        const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
        ttsSynth = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);
        ttsIsSpeaking = true;

        ttsSynth.speakTextAsync(
            text,
            (result) => {
                try {
                    ttsSynth.close();
                } catch (e) { }
                ttsSynth = null;
                ttsIsSpeaking = false;
            },
            (err) => {
                console.error("Azure TTS error:", err);
                stopAzureTts();
                alert(
                    IS_AR ? "حدث خطأ في تحويل النص إلى كلام." : "Text-to-speech failed."
                );
            }
        );
    }

    // Open/close panel
    function togglePanel() {
        const isOpen = panel.classList.toggle("daem-is-open");
        accessTrigger.setAttribute("aria-expanded", String(isOpen));

        // Slide behavior differs for RTL
        if (IS_AR) {
            panel.style.transition = "right 0.4s";
            panel.style.right = isOpen ? "0px" : "-400px";
            panel.style.left = "auto";
        } else {
            panel.style.transition = "left 0.4s";
            panel.style.left = isOpen ? "0px" : "-400px";
            panel.style.right = "auto";
        }
    }

    function Open_Tool() {
        if (!panel.classList.contains("daem-is-open")) togglePanel();
    }

    accessTrigger.addEventListener("click", togglePanel);

    accessClose.addEventListener("click", () => {
        panel.classList.remove("daem-is-open");
        if (IS_AR) {
            panel.style.transition = "right 0.4s";
            panel.style.right = "-400px";
            panel.style.left = "auto";
        } else {
            panel.style.transition = "left 0.4s";
            panel.style.left = "-400px";
            panel.style.right = "auto";
        }
    });

    // Level badge
    function updateLevelBadge(btnElement, level) {
        const badge = btnElement.querySelector(".daem-level-badge");
        btnElement.classList.remove("daem-active");

        if (level > 1 || (btnElement.dataset.id === "text-align" && level > 0)) {
            badge.innerText = String(level);
            badge.setAttribute("data-level", String(level));
            btnElement.classList.add("daem-active");
        } else if (level === 1) {
            badge.removeAttribute("data-level");
            badge.innerText = "";
            btnElement.classList.add("daem-active");
        } else {
            badge.removeAttribute("data-level");
            badge.innerText = "";
        }
    }

    // Selection handler (TTS + sign font select)
    function handleSelectionAction() {
        if (textToSpeechLevel === 1) readSelection();
        if (signFontLevel === 2) applySignFontToSelection();
    }

    function readSelection() {
        const selectedText = window.getSelection().toString().trim();
        if (!selectedText) return;
        speakAzure(selectedText);
    }

    function applySignFontToSelection() {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText.length > 0) {
            removeSignFontHighlight();

            const range = selection.getRangeAt(0);
            const wrapper = document.createElement("span");
            wrapper.setAttribute("lang", IS_AR ? "ar" : "en");
            wrapper.setAttribute("dir", IS_AR ? "rtl" : "ltr");
            wrapper.className = "daem-acc-sl-highlight";

            try {
                range.surroundContents(wrapper);
            } catch (e) {
                selection.removeAllRanges();
                return;
            }

            selection.removeAllRanges();
        } else {
            removeSignFontHighlight();
        }
    }

    function removeSignFontHighlight() {
        document.querySelectorAll("span.daem-acc-sl-highlight").forEach((span) => {
            const parent = span.parentNode;
            while (span.firstChild) parent.insertBefore(span.firstChild, span);
            parent.removeChild(span);
        });
    }

    // Text to speech toggle
    function toggleTextToSpeech(btnElement) {
        const SpeechSDK = window.SpeechSDK;
        if (!SpeechSDK) {
            alert(
                IS_AR
                    ? "خدمة تحويل النص إلى كلام غير متاحة (SpeechSDK غير محمل)."
                    : "Text-to-speech service is not available (SpeechSDK not loaded)."
            );
            return;
        }

        // Stop any ongoing Azure TTS first
        stopAzureTts();

        // Toggle level (on/off)
        textToSpeechLevel = textToSpeechLevel === 1 ? 0 : 1;

        // Remove previous listeners
        document.removeEventListener("mouseup", handleSelectionAction);
        document.removeEventListener("touchend", handleSelectionAction);

        if (textToSpeechLevel === 1) {
            // ENABLE TTS: read selection on mouse/touch release
            document.addEventListener("mouseup", handleSelectionAction);
            document.addEventListener("touchend", handleSelectionAction);
            btnElement.classList.add("daem-active");
            btnElement.querySelector("span").innerText = I18N.dynamic.readSelection;
        } else {
            // DISABLE TTS
            btnElement.classList.remove("daem-active");
            btnElement.querySelector("span").innerText = I18N.dynamic.textToSpeech;

            // If sign-font selection mode is still active, keep selection handler
            if (signFontLevel === 2) {
                document.addEventListener("mouseup", handleSelectionAction);
                document.addEventListener("touchend", handleSelectionAction);
            }
        }

        updateLevelBadge(btnElement, textToSpeechLevel);
    }

    // Sign font toggle
    function toggleSignFont(btnElement) {
        signFontLevel = (signFontLevel + 1) % 3;

        document.body.classList.remove("daem-acc-sign-font-1");
        document.removeEventListener("mouseup", handleSelectionAction);
        document.removeEventListener("touchend", handleSelectionAction);
        removeSignFontHighlight();

        if (signFontLevel === 1) {
            document.body.classList.add("daem-acc-sign-font-1");
            btnElement.querySelector("span").innerText = I18N.dynamic.slFontFull;
        } else if (signFontLevel === 2) {
            document.addEventListener("mouseup", handleSelectionAction);
            document.addEventListener("touchend", handleSelectionAction);
            btnElement.querySelector("span").innerText = I18N.dynamic.slFontSelect;
        } else {
            btnElement.querySelector("span").innerText = I18N.dynamic.slFont;
        }

        // If TTS is active, ensure handler still exists
        if (textToSpeechLevel === 1 && signFontLevel !== 2) {
            document.addEventListener("mouseup", handleSelectionAction);
            document.addEventListener("touchend", handleSelectionAction);
        }

        updateLevelBadge(btnElement, signFontLevel);
    }

    // Sign video modal
    function closeSignLangModal() {
        signLangModal.classList.remove("daem-active");
        signLangIframe.src = "";
        const btnElement = document.querySelector(
            '.daem-access-btn[data-id="sign-vid"]'
        );
        if (btnElement) btnElement.classList.remove("daem-active");
    }

    signLangModal
        .querySelector(".daem-sign-close")
        .addEventListener("click", closeSignLangModal);

    function toggleSignLanguage(btnElement) {
        const isActive = btnElement.classList.contains("daem-active");
        if (!isActive) {
            signLangIframe.src = SIGN_VIDEO_URL || "";
            signLangModal.classList.add("daem-active");
            btnElement.classList.add("daem-active");
        } else {
            closeSignLangModal();
        }
    }

    const MASK_HALF = 50; // = 100px total height like your design

    function moveMask(e) {
        const mouseY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
        const mouseX = e.clientX || (e.touches ? e.touches[0].clientX : 0);

        if (readingMaskLevel === 1) {
            // Clamp in pixels so gradient is ALWAYS valid
            const topPx = Math.max(0, mouseY - MASK_HALF);
            const bottomPx = Math.min(window.innerHeight, mouseY + MASK_HALF);

            const maskStyle =
                `linear-gradient(to bottom,
        rgba(0,0,0,1) 0px,
        rgba(0,0,0,1) ${topPx}px,
        rgba(0,0,0,0) ${topPx}px,
        rgba(0,0,0,0) ${bottomPx}px,
        rgba(0,0,0,1) ${bottomPx}px,
        rgba(0,0,0,1) 100%)`;

            readingMask.style.webkitMaskImage = maskStyle;
            readingMask.style.maskImage = maskStyle;
        } else if (readingMaskLevel === 2) {
            readingLine.style.top = `${mouseY}px`;
            readingLine.style.left = `${mouseX}px`;
        }
    }

    function toggleReadingMask(btnElement) {
        readingMaskLevel = (readingMaskLevel + 1) % 3;

        document.body.classList.remove("daem-acc-mask-1", "daem-acc-mask-2");

        // مهم: شيل listeners من window (هنستخدم window بدل document)
        window.removeEventListener("mousemove", moveMask);
        window.removeEventListener("touchmove", moveMask);

        let buttonText = I18N.dynamic.readingMask;

        if (readingMaskLevel === 1) {
            document.body.classList.add("daem-acc-mask-1");
            readingMask.classList.add("daem-moving");
            document.addEventListener("mousemove", moveMask);
            document.addEventListener("touchmove", moveMask);

            // initialize immediately
            moveMask({ clientY: window.innerHeight / 2 });
        } else if (readingMaskLevel === 2) {
            document.body.classList.add("daem-acc-mask-2");

            // ✅ تحديث فوري
            moveMask({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

            window.addEventListener("mousemove", moveMask);
            window.addEventListener("touchmove", moveMask, { passive: true });

            btnElement.classList.add("daem-active");
            buttonText = I18N.dynamic.readingLine;
        } else {
            btnElement.classList.remove("daem-active");
        }

        btnElement.querySelector("span").innerText = buttonText;
        updateLevelBadge(btnElement, readingMaskLevel);
    }


    // Hint mode
    function getHintText(element) {
        if (element.hasAttribute && element.hasAttribute("tab-hint"))
            return element.getAttribute("tab-hint");
        if (element.title) return `${I18N.hintPrefixes.title}: ${element.title}`;
        if (element.alt) return `${I18N.hintPrefixes.alt}: ${element.alt}`;
        if (element.placeholder)
            return `${I18N.hintPrefixes.placeholder}: ${element.placeholder}`;
        if (element.tagName === "A" && element.innerText)
            return `${I18N.hintPrefixes.link}: ${element.innerText}`;
        if (element.tagName === "BUTTON" && element.innerText)
            return `${I18N.hintPrefixes.button}: ${element.innerText}`;
        return null;
    }

    function showHint(e) {
        const element = e.target;
        const hintText = getHintText(element);

        if (
            hintText &&
            isHintModeActive &&
            !element.closest("#daem-accessibility-widget")
        ) {
            hintTooltip.innerText = hintText;
            hintTooltip.style.display = "block";
            const rect = element.getBoundingClientRect();
            hintTooltip.style.left = `${rect.left + window.scrollX + 10}px`;
            hintTooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
        }
    }

    function hideHint() {
        hintTooltip.style.display = "none";
    }

    function toggleHintMode(btnElement) {
        isHintModeActive = !isHintModeActive;

        if (isHintModeActive) {
            document.addEventListener("mouseover", showHint);
            document.addEventListener("focusin", showHint);
            document.addEventListener("mouseout", hideHint);
            document.addEventListener("focusout", hideHint);
            btnElement.classList.add("daem-active");
        } else {
            document.removeEventListener("mouseover", showHint);
            document.removeEventListener("focusin", showHint);
            document.removeEventListener("mouseout", hideHint);
            document.removeEventListener("focusout", hideHint);
            hideHint();
            btnElement.classList.remove("daem-active");
        }
    }

    // Toggle dispatcher
    function toggleFeature(id, btnElement) {
        if (!btnElement) {
            btnElement = document.querySelector(`.daem-access-btn[data-id="${id}"]`);
            if (!btnElement) return;
        }

        if (id === "speech-text") return toggleSpeechToText(btnElement);
        if (id === "text-speech") return toggleTextToSpeech(btnElement);
        if (id === "sign-font") return toggleSignFont(btnElement);
        if (id === "sign-vid") return toggleSignLanguage(btnElement);
        if (id === "mask") return toggleReadingMask(btnElement);
        if (id === "hint") return toggleHintMode(btnElement);

        let currentLevel = 0;

        switch (id) {
            case "contrast":
                contrastLevel = (contrastLevel + 1) % 3;
                currentLevel = contrastLevel;
                document.body.classList.remove("daem-acc-contrast-1", "daem-acc-contrast-2");
                if (contrastLevel === 1) document.body.classList.add("daem-acc-contrast-1");
                else if (contrastLevel === 2)
                    document.body.classList.add("daem-acc-contrast-2");

                btnElement.querySelector("span").innerText =
                    contrastLevel === 1
                        ? I18N.dynamic.highContrast
                        : contrastLevel === 2
                            ? I18N.dynamic.desaturate
                            : I18N.dynamic.contrast;
                break;

            case "line-height":
                lineHeightLevel = (lineHeightLevel + 1) % 5;
                currentLevel = lineHeightLevel;
                document.body.classList.remove(
                    "daem-acc-lineheight-1",
                    "daem-acc-lineheight-2",
                    "daem-acc-lineheight-3",
                    "daem-acc-lineheight-4"
                );
                if (lineHeightLevel > 0)
                    document.body.classList.add(`daem-acc-lineheight-${lineHeightLevel}`);
                break;

            case "font-size":
                fontSizeLevel = (fontSizeLevel + 1) % 5;
                currentLevel = fontSizeLevel;
                document.body.classList.remove(
                    "daem-acc-fontsize-1",
                    "daem-acc-fontsize-2",
                    "daem-acc-fontsize-3",
                    "daem-acc-fontsize-4"
                );
                if (fontSizeLevel > 0)
                    document.body.classList.add(`daem-acc-fontsize-${fontSizeLevel}`);
                break;

            case "spacing":
                charSpacingLevel = (charSpacingLevel + 1) % 5;
                currentLevel = charSpacingLevel;
                document.body.classList.remove(
                    "daem-acc-spacing-1",
                    "daem-acc-spacing-2",
                    "daem-acc-spacing-3",
                    "daem-acc-spacing-4"
                );
                if (charSpacingLevel > 0)
                    document.body.classList.add(`daem-acc-spacing-${charSpacingLevel}`);
                break;

            case "cursor":
                document.body.classList.toggle("daem-acc-cursor");
                currentLevel = document.body.classList.contains("daem-acc-cursor") ? 1 : 0;
                break;

            case "readable":
                document.body.classList.toggle("daem-acc-font");
                currentLevel = document.body.classList.contains("daem-acc-font") ? 1 : 0;
                break;

            case "dyslexic-font":
                document.body.classList.toggle("daem-acc-dyslexic-font");
                currentLevel = document.body.classList.contains("daem-acc-dyslexic-font")
                    ? 1
                    : 0;
                break;

            case "links":
                document.body.classList.toggle("daem-acc-links");
                currentLevel = document.body.classList.contains("daem-acc-links") ? 1 : 0;
                break;

            case "titles":
                document.body.classList.toggle("daem-acc-titles");
                currentLevel = document.body.classList.contains("daem-acc-titles") ? 1 : 0;
                break;

            case "stop-anim":
                document.body.classList.toggle("daem-acc-stop-anim");
                currentLevel = document.body.classList.contains("daem-acc-stop-anim")
                    ? 1
                    : 0;
                break;

            case "hide-images":
                document.body.classList.toggle("daem-acc-hide-images");
                currentLevel = document.body.classList.contains("daem-acc-hide-images")
                    ? 1
                    : 0;
                break;

            case "bold-text":
                boldLevel = (boldLevel + 1) % 3;
                currentLevel = boldLevel;
                document.body.classList.remove("daem-acc-bold-1", "daem-acc-bold-2");
                if (boldLevel > 0) document.body.classList.add(`daem-acc-bold-${boldLevel}`);
                break;

            case "text-align":
                textAlignLevel = (textAlignLevel + 1) % 4;
                currentLevel = textAlignLevel;

                document.body.classList.remove(
                    "daem-acc-align-left",
                    "daem-acc-align-center",
                    "daem-acc-align-right"
                );
                let alignLabel = I18N.dynamic.textAlign;

                if (textAlignLevel === 1) {
                    document.body.classList.add("daem-acc-align-left");
                    alignLabel = I18N.dynamic.alignLeft;
                } else if (textAlignLevel === 2) {
                    document.body.classList.add("daem-acc-align-center");
                    alignLabel = I18N.dynamic.alignCenter;
                } else if (textAlignLevel === 3) {
                    document.body.classList.add("daem-acc-align-right");
                    alignLabel = I18N.dynamic.alignRight;
                }

                btnElement.querySelector("span").innerText = alignLabel;
                break;

            case "saturation":
                saturationLevel = (saturationLevel + 1) % 4;
                currentLevel = saturationLevel;
                document.body.classList.remove(
                    "daem-acc-saturation-1",
                    "daem-acc-saturation-2",
                    "daem-acc-saturation-3"
                );
                if (saturationLevel > 0)
                    document.body.classList.add(`daem-acc-saturation-${saturationLevel}`);
                break;
        }

        updateLevelBadge(btnElement, currentLevel);
    }

    // Reset function
    function resetAll() {
        document.body.className = "";
        document.body.removeAttribute("style");

        fontSizeLevel = 0;
        contrastLevel = 0;
        lineHeightLevel = 0;
        charSpacingLevel = 0;
        textToSpeechLevel = 0;
        signFontLevel = 0;
        readingMaskLevel = 0;
        boldLevel = 0;
        textAlignLevel = 0;
        saturationLevel = 0;

        // Stop STT and close popup on reset
        stopSpeechToText(true);

        document.querySelectorAll(".daem-access-btn").forEach((btn) => {
            btn.classList.remove("daem-active", "daem-recording-active");

            const badge = btn.querySelector(".daem-level-badge");
            if (badge) {
                badge.removeAttribute("data-level");
                badge.innerText = "";
            }

            const id = btn.dataset.id;

            // Restore defaults
            if (id && I18N.featureLabels[id])
                btn.querySelector("span").innerText = I18N.featureLabels[id];

            // Special ones that change dynamically
            if (id === "contrast")
                btn.querySelector("span").innerText = I18N.dynamic.contrast;
            if (id === "sign-font")
                btn.querySelector("span").innerText = I18N.dynamic.slFont;
            if (id === "text-speech")
                btn.querySelector("span").innerText = I18N.dynamic.textToSpeech;
            if (id === "speech-text")
                btn.querySelector("span").innerText = I18N.dynamic.speechToText;
            if (id === "mask")
                btn.querySelector("span").innerText = I18N.dynamic.readingMask;
            if (id === "text-align")
                btn.querySelector("span").innerText = I18N.dynamic.textAlign;
            if (id === "sign-vid")
                btn.querySelector("span").innerText = I18N.dynamic.signVideo;
            if (id === "hint")
                btn.querySelector("span").innerText = I18N.dynamic.hint;
        });

        document
            .querySelectorAll(".daem-profile-btn")
            .forEach((pBtn) => pBtn.classList.remove("daem-active"));

        window.speechSynthesis && stopAzureTts();

        document.removeEventListener("mouseup", handleSelectionAction);
        document.removeEventListener("touchend", handleSelectionAction);

        removeSignFontHighlight();

        document.body.classList.remove("daem-acc-mask-1", "daem-acc-mask-2");
        //readingMask.classList.remove("moving");
        document.removeEventListener("mousemove", moveMask);
        document.removeEventListener("touchmove", moveMask);

        if (isHintModeActive) {
            // Turn off hint mode cleanly
            isHintModeActive = true;
            toggleHintMode(document.querySelector('.daem-access-btn[data-id="hint"]'));
        }

        closeSignLangModal();
        hintTooltip.style.display = "none";
    }

    accessReset.addEventListener("click", resetAll);

    // Keyboard shortcuts: Alt+A open panel, Alt+<key> features, Alt+O panel
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.key && e.key.toUpperCase() === "A") {
            e.preventDefault();
            togglePanel();
            return;
        }
        if (e.altKey && e.key) {
            const key = e.key.toUpperCase();
            const feature = features.find((f) => f.key === key);
            if (feature) {
                e.preventDefault();
                toggleFeature(feature.id);
            }
        }
        if (e.altKey && e.code === "KeyO") {
            e.preventDefault();
            togglePanel();
        }
    });

    // Profiles accordion logic
    const profilesToggle = document.getElementById("profiles-toggle");
    const profilesContent = document.getElementById("daem-profiles-content");

    profilesToggle.addEventListener("click", () => {
        profilesContent.classList.toggle("daem-active");
        const icon = profilesToggle.querySelector("i");
        if (profilesContent.classList.contains("daem-active")) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        } else {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }
    });

    // Profiles presets
    const profileBtns = document.querySelectorAll(".daem-profile-btn");

    profileBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const profileType = btn.dataset.profile;
            const wasActive = btn.classList.contains("daem-active");

            resetAll();
            if (wasActive) return;

            btn.classList.add("daem-active");

            const setFeature = (id, targetLevel) => {
                for (let i = 0; i < targetLevel; i++) toggleFeature(id);
            };

            switch (profileType) {
                case "motor":
                    toggleFeature("speech-text");
                    break;
                case "visual":
                    toggleFeature("text-speech");
                    break;
                case "colorblind":
                    setFeature("saturation", 3);
                    break;
                case "dyslexia":
                    toggleFeature("dyslexic-font");
                    break;
                case "lowvision":
                    setFeature("saturation", 3);
                    setFeature("font-size", 2);
                    toggleFeature("cursor");
                    break;
                case "cognitive":
                    setFeature("saturation", 2);
                    setFeature("font-size", 2);
                    setFeature("mask", 2);
                    break;
                case "seizure":
                    setFeature("contrast", 2);
                    break;
                case "adhd":
                    setFeature("mask", 1);
                    setFeature("saturation", 1);
                    break;
            }
        });
    });
}
if (document.readyState === "complete") initTool();
else
    document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") initTool();
    });
