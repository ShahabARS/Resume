"use strict";

const progressBars = document.querySelectorAll(".skills-item__progress");
const portfolioLinks = document.querySelectorAll(".portfolio-item__link")[3];

progressBars.forEach((item) => {
  const level = parseInt(item.getAttribute("skill-level"), 10);
  item.style.setProperty("--skill-level", level + "%");
  if (level < 30) {
    item.style.setProperty("--progress-color", "#be0000");
  } else {
    item.style.setProperty("--progress-color", "#cbe601");
  }
});

portfolioLinks.addEventListener("click", (e) => {
  e.preventDefault();
});

const resources = {
  en: {
    textBtn: "فا",
    r: "R",
    e: "E",
    s: "S",
    u: "U",
    m: "M",
    e2: "E",
    name: "Shahab",
    lastname: "Arshi",
    field: "Frontend Developer",
    email: "E: Shahab.ars.7@gmail.com",
    phone: "P: +98 938 753 4999",
    address: "A: Iran, Karaj/Alborz",
    profileDescription:
      "I am Shahab Arshi, a 21-year-old Computer Engineering (Software) student from Karaj with a strong foundation in web design. I possess solid expertise in HTML, CSS, and responsive page development, along with intermediate JavaScript skills that I am actively enhancing. Passionate about continuous learning, teamwork, and tackling new challenges, I am committed to expanding my technical abilities and advancing my professional growth. While my résumé is still evolving, I am dedicated to acquiring new skills and consistently improving my qualifications. I value your time in reviewing my profile and look forward to future opportunities.",
    education: "Education",
    educationFirstItemDate: "2019 - 2022",
    educationFirstItemPlace: "Karaj, High school",
    educationFirstItemField: "Mobile Phone Repair",
    educationSecondItemDate: "2022 - 2024",
    educationSecondItemPlace: "Karaj, University Jihad Applied Science",
    educationSecondItemField: "Computer Software Engineer",
    educationThirdItemDate: "2024 - Current",
    educationThirdItemPlace: "Tehran, University of Science and Culture",
    educationThirdItemField: "Computer Software Engineer",
    skills: "Skills",
    experience: "Experience",
    dateOfExperience: "Current",
    experienceDecription:
      "I have not yet been officially employed as a programmer, but I worked for a few months in a laptop store as a salesperson. In addition to selling laptops and accessories, I also provided software services such as installing Windows and the necessary tools for customers. At the moment, I am not employed and mostly work on university students’ projects. I am seeking an official opportunity as a junior programmer to gain more experience in programming within a larger environment and through teamwork.",
    portfolio: "Portfolio",
    porfolioCaption: "My Github Profile",
    portfolioFirstItem: "Camping Prototype Website",
    portfolioSecondItem: "NFT Prototype Website",
    portfolioThirdItem: "Personal Website",
    portfolioFourthItem: "Restaurant Website",
    portfolioFourthItemText: "Coming soon",
  },
  fa: {
    textBtn: "En",
    r: "ر",
    e: "ز",
    s: "و",
    u: "م",
    m: "ه",
    e2: "",
    name: "شهاب",
    lastname: "عرشی",
    field: "فرانت‌اند دولوپر",
    email: "E: Shahab.ars.7@gmail.com",
    phone: "P: +98 938 753 4999",
    address: "A: Iran, Karaj/Alborz",
    profileDescription:
      "من شهاب عرشی هستم، دانشجوی ۲۱ ساله‌ی مهندسی کامپیوتر (نرم‌افزار) از کرج با پایه‌ای قوی در طراحی وب. در زمینه‌ی HTML، CSS و توسعه صفحات واکنش‌گرا تخصص خوبی دارم و همچنین مهارت‌های متوسطی در جاوااسکریپت دارم که به طور فعال در حال تقویت آن‌ها هستم. علاقه‌مند به یادگیری مستمر، کار تیمی و مواجهه با چالش‌های جدید هستم و متعهد به گسترش توانایی‌های فنی و پیشرفت حرفه‌ای خود می‌باشم. هرچند رزومه‌ی من همچنان در حال تکمیل است، اما در مسیر کسب مهارت‌های جدید و ارتقای مداوم شایستگی‌هایم تلاش می‌کنم. از وقتی که برای بررسی پروفایل من می‌گذارید قدردانی می‌کنم و منتظر فرصت‌های آینده هستم.",
    education: "تحصیلات",
    educationFirstItemData: "۱۳۹۸ - ۱۴۰۱",
    educationFirstItemPlace: "کرج، هنرستان امام خمینی",
    educationFirstItemField: "تعمیرات تلفن همراه",
    educationSecondItemData: "۱۴۰۱ - ۱۴۰۳",
    educationSecondItemPlace: "کرج، علمی کاربردی جهاد دانشگاهی",
    educationSecondItemField: "مهندسی کامپیوتر - نرم‌افزار",
    educationThirdItemData: "۱۴۰۳ - درحال تحصیل",
    educationThirdItemPlace: "تهران دانشگاه علم و فرهنگ",
    educationThirdItemField: "مهندسی کامپیوتر - نرم‌افزار",
    skills: "مهارت ها",
    experience: "تجربه ها",
    dateOfExperience: "درحال حاضر",
    experienceDecription:
      "تا الان به صورت رسمی به عنوان برنامه‌نویس استخدام نشده‌ام، اما چند ماه در یک فروشگاه لپ‌تاپ به عنوان فروشنده فعالیت کرده‌ام و در کنار فروش لپ‌تاپ و لوازم جانبی، خدمات نرم‌افزاری مانند نصب ویندوز و ابزارهای موردنیاز مشتریان را نیز ارائه داده‌ام. در حال حاضر شاغل نیستم و بیشتر پروژه‌های دانشگاهی دانشجویان را انجام می‌دهم. به دنبال فرصت استخدام رسمی به عنوان برنامه‌نویس جونیور هستم تا در یک محیط گسترده‌تر و در قالب کار تیمی، تجربه بیشتری در حوزه برنامه‌نویسی به دست بیاورم.",
    portfolio: "نمونه کار",
    porfolioCaption: "پروفایل گیت هاب من",
    portfolioFirstItem: "پروتوتایپ وبسایت کمپ",
    portfolioSecondItem: "پروتوتایپ سایت ان‌اف‌تی",
    portfolioThirdItem: "سایت شخصی",
    portfolioFourthItem: "سایت رستوران",
    portfolioFourthItemText: "بزودی",
  },
};

const defaultLang = localStorage.getItem("lang") || "en";
const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("resume-lang__btn");
