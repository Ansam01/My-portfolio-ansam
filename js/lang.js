document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langToggle");
  if (!btn) return;

  let lang = localStorage.getItem("lang") || "ar";

  const t = {
    ar: {
      pageTitle: "Portfolio | أنسام",

      navHome: "الرئيسية",
      navAbout: "من أنا",
      navSkills: "المهارات",
      navProjects: "المشاريع",
      navCertificates: "الشهادات",
      navContact: "تواصل",

      heroRole: "مطورة ويب • UI/UX Designer",
      heroTitleBefore: "مرحبًا، أنا",
      heroName: "أنسام",
      heroTitleAfter: "👋",
      heroDesc: "أبني مواقع وتجارب مستخدم جميلة. مهتمة بـ Web Development و UI/UX ومشاريع تقنية تخدم المجتمع.",
      heroBtnProjects: "استكشف مشاريعي",
      heroBtnContact: "تواصل معي",
      location: "📍 السعودية",
      miniGithub: "GitHub",
      miniLinkedIn: "LinkedIn",

      heroCardTitle: "نبذة سريعة",
      heroCardDesc: "مطورة برمجيات أعمل على تطوير مواقع ويب حديثة بتجربة مستخدم مرتّبة وسهلة. لدي تجربة في ربط الواجهة الأمامية بالباك-إند باستخدام Node.js وMySQL، وأهتم بتحويل الأفكار إلى حلول عملية قابلة للتنفيذ، مع تركيز دائم على التنظيم والبساطة.",

      aboutTitle: "من أنا",
      aboutDesc: "خريجة برمجة وعلوم الحاسب أمتلك شغفًا بالتقنية وتطوير الحلول الرقمية أتميّز بروح المبادرة وحب التعلّم ولدي مهارات في تطوير مواقع الويب تصميم الواجهات والعمل مع قواعد البيانات اكتسبت خبرة عملية من خلال التدريب والمشاريع التطبيقية، وأسعى للمشاركة في مشاريع تقنية تُحدث أثرًا إيجابيًا وتضيف قيمة حقيقية.",

      skillsTitle: "المهارات",
      skillsFE: "Front-End",
      skillsUIUX: "UI / UX",
      skillsBE: "Back-End",
      skillsTools: "Tools",

      certificatesTitle: "الشهادات والدورات",
      cert1Title: "UI/UX Design",
      cert1Desc: "معسكر تصميم UI/UX",
      cert2Title: "التحول الرقمي",
      cert2Desc: "ورشة عمل بعنوان أهمية ذكاء الأعمال في مستقبل التحول الرقمي: التحديات والحلول",
      cert3Title: "دورة الذكاء الاصطناعي",
      cert3Desc: "مفاهيم الذكاء الاصطناعي وتطبيقاته المتقدمة",

      projectsTitle: "المشاريع",
      proj1Title: "دليل رفد",
      proj1Desc: "منصة سياحية رقمية تهدف إلى دعم السياحة الداخلية في المملكة، تساعد المستخدمين على اكتشاف الوجهات السياحية والمعالم البارزة بسهولة.",
      proj2Title: "Power BI Dashboard",
      proj2Desc: "تهدف لوحة المعلومات إلى عرض نظرة شاملة عن بيانات الموظفين من حيث التوزيع، العدد، الرواتب، والمراكز، مع إمكانية التصفية والتحليل السريع لدعم اتخاذ القرار.",
      proj3Title: "Helpdesk Lite",
      proj3Desc: "نظام بلاغات ودعم فني لإدارة التذاكر وتتبع الصيانة.",
      proj4Title: "تطبيق مستوحى – UI/UX",
      proj4Desc: "تصميم واجهات وتجربة مستخدم لتطبيق مستوحى، مع التركيز على سهولة الاستخدام وبناء رحلة مستخدم واضحة من الفكرة إلى التنفيذ.",

      viewBtn: "عرض",
      githubBtn: "GitHub",

      cvTitle: "السيرة الذاتية",
      cvDesc: "يمكنك عرض السيرة الذاتية أو تنزيلها بصيغة PDF",
      viewCV: "عرض السيرة",
      downloadCV: "تحميل السيرة",

      contactTitle: "تواصل",
      contactDesc: "يسعدني تواصلكم عبر أي من الطرق التالية:",
      

      formName: "الاسم",
      formEmail: "البريد",
      formMessage: "رسالتك",
      formSend: "إرسال",
      formHint: "",

      phName: "اسمك",
      phEmail: "name@email.com",
      phMessage: "اكتب رسالتك هنا...",

      footerText: "© {year} جميع الحقوق محفوظة — أنسام"
    },

    en: {
      pageTitle: "Portfolio | Ansam",

      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navCertificates: "Certificates",
      navContact: "Contact",

      heroRole: "Web Developer • UI/UX Designer",
      heroTitleBefore: "Hi, I'm",
      heroName: "Ansam",
      heroTitleAfter: "👋",
      heroDesc: "I build modern websites and clean user experiences. Interested in Web Development, UI/UX, and community-focused tech projects.",
      heroBtnProjects: "View Projects",
      heroBtnContact: "Contact Me",
      location: "📍 Saudi Arabia",
      miniGithub: "GitHub",
      miniLinkedIn: "LinkedIn",

      heroCardTitle: "Quick Overview",
      heroCardDesc: "Software developer focused on building modern websites with clear and organized user experiences. Experienced in integrating front-end with back-end using Node.js and MySQL, with a strong focus on simplicity and structure.",

      aboutTitle: "About Me",
      aboutDesc: "Programming and Computer Science graduate passionate about technology and digital solutions. I enjoy learning, taking initiative, and building practical web solutions and UI designs. I gained hands-on experience through training and applied projects, and I aim to contribute to impactful technical projects.",

      skillsTitle: "Skills",
      skillsFE: "Front-End",
      skillsUIUX: "UI / UX",
      skillsBE: "Back-End",
      skillsTools: "Tools",

      certificatesTitle: "Certificates & Courses",
      cert1Title: "UI/UX Design",
      cert1Desc: "UI/UX Design Bootcamp",
      cert2Title: "Digital Transformation",
      cert2Desc: "Workshop: The importance of Business Intelligence in the future of Digital Transformation (Challenges & Solutions)",
      cert3Title: "Artificial Intelligence",
      cert3Desc: "AI concepts and advanced applications",

      projectsTitle: "Projects",
      proj1Title: "Dalil Rafed",
      proj1Desc: "A digital tourism platform that supports domestic tourism in Saudi Arabia, helping users discover destinations and landmarks easily.",
      proj2Title: "Power BI Dashboard",
      proj2Desc: "A dashboard that provides an overview of employee data (distribution, counts, salaries, and roles) with filters for fast insights and decision support.",
      proj3Title: "Helpdesk Lite",
      proj3Desc: "A helpdesk & ticketing system to manage requests and track maintenance.",
      proj4Title: "Inspired App – UI/UX",
      proj4Desc: "A UI/UX project for an Inspired app, focusing on usability and building a clear user journey from idea to execution.",

      viewBtn: "View",
      githubBtn: "GitHub",

      cvTitle: "CV",
      cvDesc: "You can view or download my CV in PDF format.",
      viewCV: "View CV",
      downloadCV: "Download CV",

      contactTitle: "Contact",
      contactDesc: "Feel free to reach out through any of the following methods:",
      

      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSend: "Send",
      formHint: "",

      phName: "Your name",
      phEmail: "name@email.com",
      phMessage: "Write your message here...",

      footerText: "© {year} All rights reserved — Ansam"
    }
  };

  function apply(l) {
    // title
    if (t[l].pageTitle) document.title = t[l].pageTitle;

    // data-key
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (!t[l][key]) return;

      if (key === "footerText") {
        const year = new Date().getFullYear();
        el.textContent = t[l][key].replace("{year}", year);
      } else {
        el.textContent = t[l][key];
      }
    });

    // placeholders data-ph
    document.querySelectorAll("[data-ph]").forEach(el => {
      const key = el.getAttribute("data-ph");
      if (t[l][key]) el.setAttribute("placeholder", t[l][key]);
    });

    // dir + button text
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    btn.textContent = l === "ar" ? "EN" : "AR";

    localStorage.setItem("lang", l);
  }

  btn.addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    apply(lang);
  });

  apply(lang);
});
