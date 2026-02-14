

// سنة الفوتر
document.getElementById("year").textContent = new Date().getFullYear();

// منيو للجوال
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// إغلاق القائمة عند الضغط على رابط
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// تفعيل Active Link أثناء التمرير
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let current = "home";
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });

  navItems.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", setActiveLink);
setActiveLink();

// نموذج التواصل (واجهة فقط)
const form = document.getElementById("contactForm");
const hint = document.getElementById("formHint");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  hint.textContent = "تم استلام رسالتك (هذا نموذج تجريبي). إذا تبينه يرسل فعليًا بنستخدم Formspree.";
  form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langToggle");
  if (!btn) return console.error("langToggle not found");

  let lang = localStorage.getItem("lang") || "ar";

  const translations = {
    ar: {
      navHome: "الرئيسية",
      navAbout: "من أنا",
      navSkills: "المهارات",
      navProjects: "المشاريع",
      navCertificates: "الشهادات",
      navContact: "تواصل"
    },
    en: {
      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navCertificates: "Certificates",
      navContact: "Contact"
    }
  };

  function apply(l) {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (translations[l] && translations[l][key]) el.textContent = translations[l][key];
    });

    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    btn.textContent = l === "ar" ? "EN" : "AR";
    localStorage.setItem("lang", l);
  }

  btn.addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    console.log("Switched to:", lang);
    apply(lang);
  });

  apply(lang);
});
console.log("main.js loaded ✅");

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.querySelector(".dropdown-menu");

  if(menuBtn && menu){
    menuBtn.addEventListener("click", () => {
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    // إغلاق القائمة إذا ضغطتِ خارجها
    document.addEventListener("click", (e) => {
      if(!e.target.closest(".dropdown")) menu.style.display = "none";
    });
  }
});
