// Disable automatic browser scroll restoration on history navigation
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Premium Signage Portfolio Application Controller

// Translation Dictionary
const TRANSLATIONS_DICT = {
    en: {
        brandName: "Bashar Maklad",
        brandSubtitle: "Signage Specialist",
        navLinkPortfolio: "Projects",
        navLinkAbout: "About Me",
        navLinkContact: "Contact",
        heroBadge: "20+ Years Professional Experience",
        heroTitle: "Precision <span>Signage</span> Fabrication & Flawless Installation",
        heroDesc: "Delivering premium build-to-spec signage solutions, combining craftsmanship with CNC accuracy, structural safety, and high-impact visual design. Specializing in LED illumination, ACP Cladding, 3D letters, and shopfitting.",
        heroCtaPrimary: "Explore Gallery",
        heroCtaSecondary: "Get in Touch",
        statExp: "20+",
        statExpLabel: "Years Experience",
        statProj: "53+",
        statProjLabel: "Active Projects",
        statQuality: "100%",
        statQualityLabel: "Highest Quality Standards",
        showcaseBadgeText: "Featured Project",
        showcaseTitle: "Black Motors Exhibition",
        showcaseDesc: "Illuminated Hexagonal ACP Panel Cladding",
        portfolioSectionBadge: "Work Gallery",
        portfolioTitle: "Projects Portfolio",
        portfolioSubtitle: "Explore 53+ categorized projects demonstrating workshop fabrication, assembly, and on-site structural installations.",
        filterBtnAll: "All Projects",
        filterBtn3d: "3D Letters",
        filterBtnLed: "LED & Neon",
        filterBtnExho: "Exhibitions & Cladding",
        filterBtnWrap: "Car Wrapping",
        filterBtnOthers: "Others",
        aboutBadge: "Career Background",
        aboutTitle: "Bashar Maklad",
        aboutSubtitle: "Signage Fabricator & Installer (20+ Years)",
        aboutParagraph1: "Hands-on signage fabricator and installer with 20+ years of experience delivering end-to-end signage projects. Skilled across workshop fabrication and on-site installation for indoor and outdoor environments. Experienced with LED signage, acrylic, ACP cladding, and metal work for commercial applications.",
        aboutParagraph2: "Comfortable working from drawings through production, assembly, wiring, and final install. Focused on clean finishes, safety-first installation, and reliable project delivery.",
        skillFab: "Laser Cutting & Acrylic",
        skillFabDesc: "Precision laser cutting, thermoforming, and custom acrylic fabrication.",
        skillElec: "LED Installation & Wiring",
        skillElecDesc: "Luminous layout design, electrical load balancing, safety, and neon setups.",
        skillInst: "ACP Cladding & Installation",
        skillInstDesc: "On-site structural installation, ACP cladding, metal welding, and frames.",
        skillSafety: "Design & 3D Modeling",
        skillSafetyDesc: "Drawing to production workflows, skilled in Illustrator, Photoshop, and Maya.",
        downloadCvEnBtn: "Download English CV",
        downloadCvArBtn: "تحميل السيرة الذاتية (عربي)",
        contactSectionBadge: "Let's Connect",
        contactTitle: "Get in Touch",
        contactSubtitle: "Interested in recruitment or collaboration? Drop a message or contact me directly via phone or WhatsApp.",
        contactEmailLabel: "Email Address",
        contactPhoneLabel: "Phone Number",
        contactWhatsappLabel: "WhatsApp",
        contactWhatsapp: "Send WhatsApp Message",
        socialTitle: "Professional Networks",
        socialDesc: "Connect on social networks and professional channels.",
        lblFormName: "Full Name",
        lblFormEmail: "Email Address",
        lblFormSubject: "Subject",
        lblFormMessage: "Your Message",
        btnSubmitForm: "Send Message",
        footerCopy: "© 2026 Bashar Maklad. All rights reserved.",
        modalProjectSubtitle: "Signage Project",
        modalDescTitle: "About Project",
        modalMaterialsTitle: "Materials Used",
        modalToolsTitle: "Tools & Machinery",
        videoBadge: "Video",
        photoBadge: "Photo",
        category3d: "3D Letters",
        categoryLed: "LED & Neon",
        categoryExho: "Exhibitions & Cladding",
        categoryWrap: "Car Wrapping",
        categoryOthers: "Others",
        viewProjectBtn: "View Project",
        itemsLabel: "files"
    },
    ar: {
        brandName: "بشار مقلد",
        brandSubtitle: "أخصائي لوحات إعلانية",
        navLinkPortfolio: "المشاريع",
        navLinkAbout: "نبذة عني",
        navLinkContact: "اتصل بي",
        heroBadge: "خبرة مهنية تزيد عن 20 عاماً",
        heroTitle: "دقة في <span>تصنيع</span> وتركيب اللوحات الإعلانية",
        heroDesc: "تقديم حلول لوحات إعلانية فاخرة ومصممة حسب الطلب، تجمع بين البراعة الحرفية ودقة ماكينات CNC، والسلامة الإنشائية والتصميم البصري عالي التأثير. متخصص في إضاءة LED، وتكسية ACP، والأحرف النافرة وتجهيز المحلات.",
        heroCtaPrimary: "استكشف المعرض",
        heroCtaSecondary: "تواصل معي",
        statExp: "20+",
        statExpLabel: "سنوات الخبرة",
        statProj: "53+",
        statProjLabel: "المشاريع النشطة",
        statQuality: "100%",
        statQualityLabel: "أعلى معايير الجودة",
        showcaseBadgeText: "المشروع المميز",
        showcaseTitle: "معرض بلاك موتورز",
        showcaseDesc: "تكسية ألواح ACP بتصميم سداسي مضيء",
        portfolioSectionBadge: "معرض الأعمال",
        portfolioTitle: "معرض الأعمال",
        portfolioSubtitle: "استكشف أكثر من 53 مشروعاً مصنفاً يوضح عمليات التصنيع في الورشة، والتجميع، والتركيبات الإنشائية في الموقع.",
        filterBtnAll: "كل المشاريع",
        filterBtn3d: "أحرف ثلاثية الأبعاد",
        filterBtnLed: "LED ونيون",
        filterBtnExho: "المعارض والتكسية",
        filterBtnWrap: "تغليف السيارات",
        filterBtnOthers: "أعمال أخرى",
        aboutBadge: "المسيرة المهنية",
        aboutTitle: "بشار مقلد",
        aboutSubtitle: "فني تصنيع وتركيب لوحات إعلانية (خبرة 20+ سنة)",
        aboutParagraph1: "فني تصنيع وتركيب لوحات إعلانية ذو خبرة عملية تزيد عن 20 عاماً في تنفيذ مشاريع لوحات إعلانية متكاملة. ماهر في التصنيع داخل الورش وفي التركيب الميداني للمواقع الداخلية والخارجية. خبرة واسعة في لوحات LED، والأكريليك، وتكسية ألواح ACP، والأعمال المعدنية للتطبيقات التجارية.",
        aboutParagraph2: "القدرة على العمل بدءاً من المخططات الهندسية وحتى الإنتاج والتجميع والتمديدات الكهربائية والتركيب النهائي. نركز على التشطيبات النظيفة، والتركيب الآمن كأولوية قصوى، والتسليم الموثوق للمشاريع.",
        skillFab: "القص بالليزر وتصنيع الأكريليك",
        skillFabDesc: "القص الدقيق بالليزر، التشكيل الحراري، وتصنيع الأكريليك المخصص.",
        skillElec: "تركيب إضاءة LED والتمديدات",
        skillElecDesc: "تصميم توزيع الإضاءة، موازنة الأحمال الكهربائية، وتجهيزات النيون.",
        skillInst: "تكسية ألواح ACP والتركيب",
        skillInstDesc: "التركيب الإنشائي الميداني، تكسية ألواح ACP، لحام المعادن والهياكل.",
        skillSafety: "التصميم والنمذجة ثلاثية الأبعاد",
        skillSafetyDesc: "العمل من المخططات إلى التنفيذ، مهارة في Illustrator وPhotoshop وMaya.",
        downloadCvEnBtn: "تحميل السيرة الذاتية بالإنجليزية",
        downloadCvArBtn: "تحميل السيرة الذاتية (عربي)",
        contactSectionBadge: "لنكن على اتصال",
        contactTitle: "تواصل معي",
        contactSubtitle: "هل أنت مهتم بالتوظيف أو التعاون المشترك؟ أرسل رسالة أو اتصل بي مباشرة عبر الهاتف أو الواتساب.",
        contactEmailLabel: "البريد الإلكتروني",
        contactPhoneLabel: "رقم الهاتف",
        contactWhatsappLabel: "واتساب",
        contactWhatsapp: "إرسال رسالة واتساب",
        socialTitle: "الشبكات المهنية",
        socialDesc: "تواصل معي عبر الشبكات المهنية والقنوات الاجتماعية.",
        lblFormName: "الاسم الكامل",
        lblFormEmail: "البريد الإلكتروني",
        lblFormSubject: "الموضوع",
        lblFormMessage: "رسالتك",
        btnSubmitForm: "إرسال الرسالة",
        footerCopy: "© 2026 بشار مقلد. جميع الحقوق محفوظة.",
        modalProjectSubtitle: "مشروع لوحة إعلانية",
        modalDescTitle: "عن المشروع",
        modalMaterialsTitle: "المواد المستخدمة",
        modalToolsTitle: "الأدوات والماكينات",
        videoBadge: "فيديو",
        photoBadge: "صورة",
        category3d: "أحرف ثلاثية الأبعاد",
        categoryLed: "LED ونيون",
        categoryExho: "المعارض والتكسية",
        categoryWrap: "تغليف السيارات",
        categoryOthers: "أخرى",
        viewProjectBtn: "عرض المشروع",
        itemsLabel: "ملفات"
    }
};

// State Variables
let currentLang = localStorage.getItem("portfolio_lang") || "en";
let currentTheme = localStorage.getItem("portfolio_theme") || "light";
let activeCategory = "all";
let currentProject = null;
let currentLightboxIndex = 0;
let currentLightboxMedia = [];
let visibleProjectsCount = 12; // State for infinite scroll pagination
let loadMoreObserver = null;   // Intersection observer instance
let lastViewedProjectSlug = null; // Stores last project active in modal
let isModalClosing = false; // Flag to prevent scroll jumping on modal close
let lastModalCloseTime = 0; // Timestamp of when the modal was last closed

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    // Set Theme
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon();
    
    // Set Language
    applyLanguage(currentLang);
    
    let galleryStatePushed = false;
    
    // Header shadow & Scroll progress states
    window.addEventListener("scroll", () => {
        const header = document.getElementById("mainHeader");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Push gallery history state once user scrolls down to projects
        if (window.scrollY > 400 && !galleryStatePushed && !window.location.hash) {
            history.pushState({ galleryScrolled: true }, "", "#gallery");
            galleryStatePushed = true;
        } else if (window.scrollY < 100 && galleryStatePushed && window.location.hash === "#gallery") {
            history.replaceState("", document.title, window.location.pathname + window.location.search);
            galleryStatePushed = false;
        }
    });
    
    // Close mobile menu when clicking nav links
    const navLinksList = document.querySelectorAll(".nav-links a");
    navLinksList.forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });
    
    // Close mobile menu when clicking outside of it
    document.addEventListener("click", (event) => {
        const nav = document.querySelector(".nav-links");
        const mobileMenuBtn = document.getElementById("mobileMenuBtn");
        
        if (nav && nav.classList.contains("open")) {
            if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                closeMobileMenu();
            }
        }
    });
    
    // Route handler for deep links & browser back/forward buttons
    window.addEventListener("hashchange", handleRoute);
    
    // Intercept back button for Lightbox & Modal
    window.addEventListener("popstate", (event) => {
        const lightbox = document.getElementById("lightbox");
        if (lightbox && lightbox.style.display === "flex") {
            closeLightbox(true);
            return;
        }
        
        const modal = document.getElementById("projectModal");
        const modalIsOpen = modal && (modal.classList.contains("show") || modal.style.display === "flex");
        
        handleRoute();
        
        // If modal was already closed, and we pop to root (not during or just after modal close), scroll to top
        const wasModalJustClosed = (Date.now() - lastModalCloseTime) < 1000;
        if (!modalIsOpen && !isModalClosing && !wasModalJustClosed && !window.location.hash) {
            scrollToTop();
        }
    });
    
    handleRoute(); // Execute on initial load
    
    // Bind swipe events for the project modal
    bindModalSwipeEvents();
    
    // Bind swipe events for the fullscreen media lightbox
    bindLightboxSwipeEvents();
});

// Toggle Theme (Dark / Light)
function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("portfolio_theme", currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById("themeIcon");
    if (currentTheme === "dark") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

// Toggle Language (EN / AR)
function toggleLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("portfolio_lang", currentLang);
    applyLanguage(currentLang);
}

// Apply Language strings to the UI elements
function applyLanguage(lang) {
    const dict = TRANSLATIONS_DICT[lang];
    
    // 1. Toggle body dir attribute & class
    if (lang === "ar") {
        document.body.dir = "rtl";
        document.body.classList.add("rtl");
        document.getElementById("langSwitchBtn").textContent = "EN";
    } else {
        document.body.dir = "ltr";
        document.body.classList.remove("rtl");
        document.getElementById("langSwitchBtn").textContent = "AR";
    }
    
    // 2. Translate static DOM elements using their IDs
    for (const [id, value] of Object.entries(dict)) {
        const element = document.getElementById(id);
        if (element) {
            // Check if value contains HTML markup (e.g. <span>)
            if (value.includes("<span")) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    }
    
    // Translate placeholders
    const nameInput = document.getElementById("formName");
    const emailInput = document.getElementById("formEmail");
    const subjectInput = document.getElementById("formSubject");
    const msgTextarea = document.getElementById("formMessage");
    
    if (nameInput) nameInput.placeholder = lang === "ar" ? "أدخل اسمك الكامل..." : "Enter your name...";
    if (emailInput) emailInput.placeholder = lang === "ar" ? "أدخل بريدك الإلكتروني..." : "Enter your email...";
    if (subjectInput) subjectInput.placeholder = lang === "ar" ? "أدخل موضوع الرسالة..." : "Enter message subject...";
    if (msgTextarea) msgTextarea.placeholder = lang === "ar" ? "اكتب رسالتك هنا..." : "Type your message here...";
    
    // 3. Re-render projects with translated content
    renderProjects();
    
    // 4. Update modal text if open
    if (currentProject) {
        updateModalContent(currentProject);
    }

    // 5. Build Projects Dropdown
    buildProjectsDropdown();
}

// Mobile Hamburger Menu Toggle
function toggleMobileMenu() {
    const nav = document.querySelector(".nav-links");
    const menuIcon = document.querySelector("#mobileMenuBtn i");
    
    if (!nav || !menuIcon) return;
    
    nav.classList.toggle("open");
    
    if (nav.classList.contains("open")) {
        menuIcon.className = "fa-solid fa-xmark";
    } else {
        menuIcon.className = "fa-solid fa-bars";
    }
}

// Close Mobile Menu Helper
function closeMobileMenu() {
    const nav = document.querySelector(".nav-links");
    const menuIcon = document.querySelector("#mobileMenuBtn i");
    if (nav && nav.classList.contains("open")) {
        nav.classList.remove("open");
        if (menuIcon) menuIcon.className = "fa-solid fa-bars";
    }
}

// Classify projects into category filters dynamically
function getProjectCategory(proj) {
    const id = proj.id.toLowerCase();
    const nameAr = (proj.name_ar || "").toLowerCase();
    const nameEn = (proj.name_en || "").toLowerCase();
    
    if (nameEn.includes("wrap") || nameAr.includes("تغليف") || nameAr.includes("سيارات") || id.includes("wrapping")) {
        return "wrapping";
    }
    if (nameEn.includes("neon") || nameEn.includes("led") || nameAr.includes("نيون") || nameAr.includes("مضاء") || nameAr.includes("اضاء") || nameAr.includes("إضاء") || id.includes("led") || id.includes("neon")) {
        return "led-neon";
    }
    if (nameEn.includes("letter") || nameEn.includes("raised") || nameEn.includes("acrylic") || nameEn.includes("box") || nameAr.includes("أحرف") || nameAr.includes("اكريليك") || nameAr.includes("علب") || nameAr.includes("صواني") || id.includes("raised") || id.includes("letters") || id.includes("acrylic")) {
        return "3d-raised";
    }
    if (nameEn.includes("exhibition") || nameEn.includes("decor") || nameEn.includes("stand") || nameEn.includes("cladding") || nameAr.includes("معرض") || nameAr.includes("ستاند") || nameAr.includes("ديكور") || nameAr.includes("واجه") || id.includes("exhibition") || id.includes("cladding") || id.includes("decor")) {
        return "exhibitions";
    }
    return "others";
}

// Filter Category Click
function filterCategory(category, element) {
    activeCategory = category;
    visibleProjectsCount = 12; // Reset count for infinite scroll
    
    // Toggle active filter button style
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    element.classList.add("active");
    
    renderProjects();
}

// Render Projects Bento Grid
function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    if (typeof rawProjectsData === 'undefined') {
        grid.innerHTML = "<p>Database not found. Please verify image_data_web.js is loaded.</p>";
        return;
    }
    
    // Filter projects
    const filteredProjects = rawProjectsData.filter(proj => {
        if (activeCategory === "all") return true;
        return getProjectCategory(proj) === activeCategory;
    });
    
    // Get current chunk to render
    const projectsToRender = filteredProjects.slice(0, visibleProjectsCount);
    
    // Render Bento Cards
    projectsToRender.forEach((proj, index) => {
        const card = document.createElement("div");
        
        // Define Bento Grid size spans for visual variety
        let bentoClass = "";
        if (index % 12 === 0) {
            bentoClass = "featured-large";  // Large 2x2 bento card
        } else if (index % 12 === 3 || index % 12 === 7) {
            bentoClass = "featured-wide";   // Wide 2x1 bento card
        } else if (index % 12 === 5 || index % 12 === 9) {
            bentoClass = "featured-tall";   // Tall 1x2 bento card
        }
        
        card.className = `project-card ${bentoClass}`;
        card.setAttribute("data-slug", proj.folder_name);
        
        // Load first image/video as thumbnail
        const firstFile = proj.files && proj.files[0];
        let mediaHtml = "";
        let isVideoBadge = false;
        
        if (firstFile) {
            const path = firstFile.filepath;
            const thumbPath = firstFile.thumbpath || path;
            if (firstFile.is_video) {
                isVideoBadge = true;
                mediaHtml = `<video src="${path}" preload="none" muted loop playsinline></video>
                             <div class="modal-media-play-icon" style="width:36px; height:36px; font-size:14px;"><i class="fa-solid fa-play"></i></div>`;
            } else {
                // Add explicit width/height markers or auto aspect for performance
                mediaHtml = `<img src="${thumbPath}" alt="${proj.name_en}" loading="lazy" width="360" height="280">`;
            }
        }
        
        const title = currentLang === "ar" ? proj.name_ar : (proj.name_en || proj.name_ar);
        const categoryKey = "category" + getProjectCategory(proj).split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
        const categoryLabel = TRANSLATIONS_DICT[currentLang][categoryKey] || TRANSLATIONS_DICT[currentLang].categoryOthers;
        const totalFiles = proj.files ? proj.files.length : 0;
        
        const videoBadgeLabel = TRANSLATIONS_DICT[currentLang].videoBadge;
        const itemsLabelText = TRANSLATIONS_DICT[currentLang].itemsLabel;
        
        card.innerHTML = `
            <div class="project-media-container">
                ${mediaHtml}
                <div class="project-card-overlay"></div>
                <div class="project-card-badges">
                    ${isVideoBadge ? `<span class="card-badge video-badge"><i class="fa-solid fa-video"></i> ${videoBadgeLabel}</span>` : ""}
                    <span class="card-badge"><i class="fa-solid fa-images"></i> ${totalFiles} ${itemsLabelText}</span>
                </div>
            </div>
            <div class="project-card-content">
                <div class="project-card-info">
                    <h3>${title}</h3>
                    <p><span class="category">${categoryLabel}</span> • ${proj.date_range}</p>
                </div>
            </div>
        `;
        
        // Open project detail modal on click
        card.onclick = () => {
            window.location.hash = `#/project/${proj.folder_name}`;
        };
        
        // Autoplay video thumbnail on hover
        if (isVideoBadge) {
            card.onmouseenter = () => {
                const v = card.querySelector("video");
                if (v) v.play().catch(() => {});
            };
            card.onmouseleave = () => {
                const v = card.querySelector("video");
                if (v) {
                    v.pause();
                    v.currentTime = 0;
                }
            };
        }
        
        grid.appendChild(card);
    });
    
    // Setup dynamic load more trigger
    setupLoadMoreTrigger(filteredProjects.length);
}

// Setup Load More Trigger for Infinite Scroll
function setupLoadMoreTrigger(totalFilteredCount) {
    const existingTrigger = document.getElementById("loadMoreTrigger");
    if (existingTrigger) {
        if (loadMoreObserver) {
            loadMoreObserver.unobserve(existingTrigger);
        }
        existingTrigger.remove();
    }
    
    if (visibleProjectsCount >= totalFilteredCount) {
        return;
    }
    
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    
    const trigger = document.createElement("div");
    trigger.id = "loadMoreTrigger";
    trigger.className = "load-more-trigger";
    trigger.innerHTML = `<div class="loading-spinner"></div>`;
    
    grid.parentNode.insertBefore(trigger, grid.nextSibling);
    
    if (!loadMoreObserver) {
        loadMoreObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                visibleProjectsCount += 12;
                renderProjects();
            }
        }, {
            rootMargin: "250px"
        });
    }
    
    loadMoreObserver.observe(trigger);
}

// Router to handle URL changes (Deep Links)
function handleRoute() {
    const hash = window.location.hash;
    const projectPrefix = "#/project/";
    
    if (hash.startsWith(projectPrefix)) {
        const slug = hash.substring(projectPrefix.length);
        const project = rawProjectsData.find(p => p.folder_name === slug);
        if (project) {
            showProjectModal(project);
            return;
        }
    }
    
    // Close modal if URL is root
    hideProjectModal();
}

// Global scroll locking helpers
let scrollPosition = 0;
let isScrollLocked = false;

function lockScroll() {
    if (isScrollLocked) return;
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    isScrollLocked = true;
}

function unlockScroll() {
    if (!isScrollLocked) return;
    
    let targetScroll = scrollPosition;
    
    // Find the offset of the currently active project card to scroll directly to it
    if (lastViewedProjectSlug) {
        const card = document.querySelector(`[data-slug="${lastViewedProjectSlug}"]`);
        if (card) {
            const cardRect = card.getBoundingClientRect();
            const absoluteCardTop = scrollPosition + cardRect.top;
            
            // Center the card in the viewport
            targetScroll = absoluteCardTop - (window.innerHeight / 2) + (cardRect.height / 2);
            
            // Clamp scroll value to document bounds
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
        }
    }
    
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    
    window.scrollTo(0, targetScroll);
    isScrollLocked = false;
}

// Show Project Details Modal
function showProjectModal(project) {
    currentProject = project;
    lastViewedProjectSlug = project.folder_name; // Track active project slug
    updateModalContent(project);
    
    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
        lockScroll();
    }, 10);

    // Bind modal navigation keys
    document.addEventListener("keydown", handleModalKeys);
}

// Hide Project Details Modal
function hideProjectModal() {
    const modal = document.getElementById("projectModal");
    if (!modal || !modal.classList.contains("show")) return;
    
    currentProject = null;
    isModalClosing = true; // Set closing flag
    lastModalCloseTime = Date.now(); // Record close timestamp
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        unlockScroll();
        isModalClosing = false; // Reset closing flag
    }, 400);

    // Remove hash from URL by going back if we have project hash
    if (window.location.hash.startsWith("#/project/")) {
        history.back();
    }

    // Unbind modal navigation keys
    document.removeEventListener("keydown", handleModalKeys);
}

// Navigate between projects in the modal (Left/Right arrow buttons) with smooth slide transition
function navigateProject(direction) {
    if (!currentProject) return;
    
    const currentIndex = rawProjectsData.findIndex(p => p.id === currentProject.id);
    if (currentIndex === -1) return;
    
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
        newIndex = rawProjectsData.length - 1;
    } else if (newIndex >= rawProjectsData.length) {
        newIndex = 0;
    }
    
    const newProj = rawProjectsData[newIndex];
    const container = document.querySelector(".modal-container");
    if (!container) {
        window.location.hash = "#/project/" + newProj.folder_name;
        return;
    }
    
    // Determine transition classes based on direction (flipped in RTL to match visual flow)
    const isRtl = document.body.classList.contains("rtl");
    const animDirection = isRtl ? -direction : direction;
    const outClass = animDirection > 0 ? "slide-out-left" : "slide-out-right";
    const isNext = animDirection > 0;
    const inClass = isNext ? "slide-in-left" : "slide-in-right";
    
    // 1. Start slide-out animation
    container.classList.add("navigating", outClass);
    
    // 2. Once slide-out completes, swap content and trigger slide-in from opposite side
    setTimeout(() => {
        // Update URL hash using replaceState to avoid cluttering history
        history.replaceState(null, document.title, window.location.pathname + window.location.search + "#/project/" + newProj.folder_name);
        
        currentProject = newProj;
        lastViewedProjectSlug = newProj.folder_name; // Update scroll target project
        updateModalContent(newProj);
        
        // Instantly teleport container to the starting position on the opposite side
        container.classList.remove(outClass);
        container.classList.add(inClass);
        
        // Force reflow
        container.offsetHeight;
        
        // Slide back to normal center position smoothly
        container.classList.remove(inClass);
        
        // Remove navigation transition rules after slide-in finishes
        setTimeout(() => {
            container.classList.remove("navigating");
        }, 350);
    }, 350);
}

// Handle modal keyboard shortcuts (Esc to close, Left/Right arrows to navigate)
function handleModalKeys(event) {
    // If the lightbox is open, let lightbox handle the keys instead
    const lightbox = document.getElementById("lightbox");
    if (lightbox && lightbox.style.display === "flex") {
        return;
    }
    
    if (event.key === "Escape") {
        hideProjectModal();
    } else if (event.key === "ArrowRight") {
        const isRtl = document.body.classList.contains("rtl");
        navigateProject(isRtl ? -1 : 1);
    } else if (event.key === "ArrowLeft") {
        const isRtl = document.body.classList.contains("rtl");
        navigateProject(isRtl ? 1 : -1);
    }
}

// Close Modal when clicking outside
function closeProjectModal(event) {
    hideProjectModal();
}

// Update Modal Contents dynamically
function updateModalContent(project) {
    const title = currentLang === "ar" ? project.name_ar : (project.name_en || project.name_ar);
    const desc = currentLang === "ar" ? project.description_ar : (project.description_en || project.description_ar);
    
    document.getElementById("modalProjectName").textContent = title;
    document.getElementById("modalProjectSubtitle").textContent = project.date_range;
    document.getElementById("modalProjectDesc").textContent = desc || (currentLang === "ar" ? "لا يوجد وصف متوفر للمشروع." : "No description available for this project.");
    
    // Translate modal titles
    const dict = TRANSLATIONS_DICT[currentLang];
    document.getElementById("modalDescTitle").textContent = dict.modalDescTitle;
    document.getElementById("modalMaterialsTitle").textContent = dict.modalMaterialsTitle;
    document.getElementById("modalToolsTitle").textContent = dict.modalToolsTitle;
    
    // Populate Materials
    const materialsContainer = document.getElementById("modalMaterialsList");
    materialsContainer.innerHTML = "";
    const materials = project.materials || [];
    if (materials.length > 0) {
        materials.forEach(m => {
            const tag = document.createElement("span");
            tag.className = "info-tag";
            tag.textContent = m;
            materialsContainer.appendChild(tag);
        });
    } else {
        materialsContainer.innerHTML = `<span style="font-size:12px; color:var(--text-muted);">${currentLang === "ar" ? "أكريليك، لوحات إعلانية، ومواد تصنيع متنوعة" : "Acrylic, LEDs, steel frames"}</span>`;
    }
    
    // Populate Tools
    const toolsContainer = document.getElementById("modalToolsList");
    toolsContainer.innerHTML = "";
    const tools = project.tools || [];
    if (tools.length > 0) {
        tools.forEach(t => {
            const tag = document.createElement("span");
            tag.className = "info-tag";
            tag.textContent = t;
            toolsContainer.appendChild(tag);
        });
    } else {
        toolsContainer.innerHTML = `<span style="font-size:12px; color:var(--text-muted);">${currentLang === "ar" ? "ماكينة قص ليزر، راوتر CNC، أدوات تصنيع وتركيب" : "Laser cutter, CNC router, hand tools"}</span>`;
    }
    
    // Populate Media items (Images/Videos Grid)
    const mediaGrid = document.getElementById("modalMediaGrid");
    mediaGrid.innerHTML = "";
    
    currentLightboxMedia = project.files || [];
    
    currentLightboxMedia.forEach((file, index) => {
        const mediaCard = document.createElement("div");
        mediaCard.className = "modal-media-card";
        
        let innerHtml = "";
        if (file.is_video) {
            innerHtml = `<video src="${file.filepath}" preload="none" muted></video>
                         <div class="modal-media-play-icon"><i class="fa-solid fa-play"></i></div>`;
        } else {
            const thumbPath = file.thumbpath || file.filepath;
            innerHtml = `<img src="${thumbPath}" alt="${file.filename}" loading="lazy" width="220" height="165">`;
        }
        
        mediaCard.innerHTML = innerHtml;
        
        // Open lightbox on click
        mediaCard.onclick = () => {
            openLightbox(index);
        };
        
        mediaGrid.appendChild(mediaCard);
    });
}

// Lightbox Open & Viewer
function openLightbox(index) {
    currentLightboxIndex = index;
    const media = currentLightboxMedia[index];
    if (!media) return;
    
    // Push state so back button on mobile closes lightbox first
    history.pushState({ lightboxOpen: true }, "");
    
    const container = document.getElementById("lightboxContainer");
    container.className = ""; // Reset transition classes
    container.innerHTML = "";
    
    // Show spinner while loading
    const spinner = document.getElementById("lightboxSpinner");
    if (spinner) spinner.style.display = "block";
    
    if (media.is_video) {
        const video = document.createElement("video");
        video.src = media.filepath;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        video.className = "lightbox-content";
        video.style.maxWidth = "100%";
        video.style.maxHeight = "80vh";
        
        video.onloadeddata = () => {
            if (spinner) spinner.style.display = "none";
        };
        video.oncanplay = () => {
            if (spinner) spinner.style.display = "none";
        };
        
        container.appendChild(video);
    } else {
        const img = new Image();
        img.className = "lightbox-content";
        img.alt = "Lightbox Visual";
        img.onload = () => {
            if (spinner) spinner.style.display = "none";
            container.appendChild(img);
        };
        img.src = media.filepath;
    }
    
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "flex";
    
    // Show/Hide lightbox next/prev buttons dynamically based on files count
    const prevBtn = lightbox.querySelector(".lightbox-nav-btn.prev");
    const nextBtn = lightbox.querySelector(".lightbox-nav-btn.next");
    if (prevBtn && nextBtn) {
        if (currentLightboxMedia.length <= 1) {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        } else {
            prevBtn.style.display = "flex";
            nextBtn.style.display = "flex";
        }
    }
    
    // Bind arrow keys for navigation
    document.addEventListener("keydown", handleLightboxKeys);
}

function closeLightbox(isPopState = false) {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox || lightbox.style.display !== "flex") return;
    
    lightbox.style.display = "none";
    
    const container = document.getElementById("lightboxContainer");
    container.innerHTML = ""; // Stop playing video if active
    
    document.removeEventListener("keydown", handleLightboxKeys);
    
    // If closed manually (not via browser back), pop history state
    if (!isPopState) {
        history.back();
    }
}

// Keyboard shortcuts for Lightbox (Left / Right / Esc)
function handleLightboxKeys(event) {
    const isRtl = document.body.classList.contains("rtl");
    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowRight") {
        // ArrowRight: Next image in LTR, Previous image in RTL
        navigateLightbox(isRtl ? -1 : 1);
    } else if (event.key === "ArrowLeft") {
        // ArrowLeft: Previous image in LTR, Next image in RTL
        navigateLightbox(isRtl ? 1 : -1);
    }
}

// Navigate inside Lightbox with smooth slide transition
function navigateLightbox(direction) {
    if (currentLightboxMedia.length <= 1) return;
    
    let newIndex = currentLightboxIndex + direction;
    if (newIndex >= currentLightboxMedia.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = currentLightboxMedia.length - 1;
    }
    
    const container = document.getElementById("lightboxContainer");
    if (!container) return;
    
    // Determine transition classes based on direction (flipped in RTL to match visual flow)
    const isRtl = document.body.classList.contains("rtl");
    const animDirection = isRtl ? -direction : direction;
    const outClass = animDirection > 0 ? "slide-out-left" : "slide-out-right";
    const inClass = animDirection > 0 ? "slide-in-left" : "slide-in-right";
    
    // 1. Start slide-out animation
    container.classList.add("navigating", outClass);
    
    // 2. Swap content and slide-in from opposite side after transition completes
    setTimeout(() => {
        currentLightboxIndex = newIndex;
        const media = currentLightboxMedia[newIndex];
        if (!media) return;
        
        container.innerHTML = "";
        
        // Show spinner while loading next/prev item
        const spinner = document.getElementById("lightboxSpinner");
        if (spinner) spinner.style.display = "block";
        
        if (media.is_video) {
            const video = document.createElement("video");
            video.src = media.filepath;
            video.controls = true;
            video.autoplay = true;
            video.playsInline = true;
            video.className = "lightbox-content";
            video.style.maxWidth = "100%";
            video.style.maxHeight = "80vh";
            
            video.onloadeddata = () => {
                if (spinner) spinner.style.display = "none";
            };
            video.oncanplay = () => {
                if (spinner) spinner.style.display = "none";
            };
            
            container.appendChild(video);
        } else {
            const img = new Image();
            img.className = "lightbox-content";
            img.alt = "Lightbox Visual";
            img.onload = () => {
                if (spinner) spinner.style.display = "none";
                container.appendChild(img);
            };
            img.src = media.filepath;
        }
        
        // Instantly teleport container to starting position on opposite side
        container.classList.remove(outClass);
        container.classList.add(inClass);
        
        // Force reflow
        container.offsetHeight;
        
        // Slide back to normal center position smoothly
        container.classList.remove(inClass);
        
        // Remove navigation transition rules after slide-in finishes
        setTimeout(() => {
            container.classList.remove("navigating");
        }, 300);
    }, 300);
}

// Build Projects Dropdown Menu dynamically
function buildProjectsDropdown() {
    const dropdownMenu = document.getElementById("projectsDropdownMenu");
    if (!dropdownMenu) return;
    dropdownMenu.innerHTML = "";
    
    if (typeof rawProjectsData === 'undefined') return;
    
    rawProjectsData.forEach(proj => {
        const li = document.createElement("li");
        const title = currentLang === "ar" ? proj.name_ar : (proj.name_en || proj.name_ar);
        li.innerHTML = `<a class="dropdown-item" href="javascript:void(0)" onclick="selectProjectFromDropdown('${proj.folder_name}')">${title}</a>`;
        dropdownMenu.appendChild(li);
    });
}

// Handle project selection from dropdown (Smooth scroll, pulse, open modal)
function selectProjectFromDropdown(folderName) {
    // Close mobile menu if open
    closeMobileMenu();
    
    // 1. Reset filter category to show the selected project card
    activeCategory = "all";
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    const allBtn = document.getElementById("filterBtnAll");
    if (allBtn) allBtn.classList.add("active");
    
    renderProjects();
    
    // 2. Scroll to the projects gallery section first
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
    // 3. Find the project card, scroll it into view, pulse it, and open detail modal
    setTimeout(() => {
        const card = document.querySelector(`[data-slug="${folderName}"]`);
        if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            card.classList.add("highlight-pulse");
            
            // Wait for highlight pulse and then open modal via hash change
            setTimeout(() => {
                card.classList.remove("highlight-pulse");
                window.location.hash = `#/project/${folderName}`;
            }, 1200);
        } else {
            // Fallback: Open modal directly if card is not found
            window.location.hash = `#/project/${folderName}`;
        }
    }, 600);
}

// Show/Hide Scroll to Top Button on scroll
window.addEventListener("scroll", () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    }
});

// Scroll smoothly back to top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Swipe Gesture Variables for Modal
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

// Bind touch/swipe events to the modal container
function bindModalSwipeEvents() {
    const modalContainer = document.querySelector(".modal-container");
    if (!modalContainer) return;
    
    modalContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    modalContainer.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleModalSwipe();
    }, { passive: true });
}

// Handle horizontal touch swipes
function handleModalSwipe() {
    // Lock project swipe if media fullscreen lightbox is open
    const lightbox = document.getElementById("lightbox");
    if (lightbox && lightbox.style.display === "flex") {
        return;
    }
    
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    
    const swipeThresholdX = 60; // min horizontal distance required
    const swipeThresholdY = 40; // max vertical distance allowed to prevent diagonal/scroll conflict
    
    // Validate horizontal swipe without vertical scrolling interference
    if (Math.abs(diffX) > swipeThresholdX && Math.abs(diffY) < swipeThresholdY) {
        const isRtl = document.body.classList.contains("rtl");
        if (diffX > 0) {
            // Swipe Right -> Previous Project (LTR) / Next Project (RTL)
            navigateProject(isRtl ? 1 : -1);
        } else {
            // Swipe Left -> Next Project (LTR) / Previous Project (RTL)
            navigateProject(isRtl ? -1 : 1);
        }
    }
}

// Swipe Gesture Variables for Lightbox
let lightboxTouchStartX = 0;
let lightboxTouchStartY = 0;
let lightboxTouchEndX = 0;
let lightboxTouchEndY = 0;

// Bind touch/swipe events to the lightbox container
function bindLightboxSwipeEvents() {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    
    lightbox.addEventListener("touchstart", (e) => {
        lightboxTouchStartX = e.changedTouches[0].screenX;
        lightboxTouchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    lightbox.addEventListener("touchend", (e) => {
        lightboxTouchEndX = e.changedTouches[0].screenX;
        lightboxTouchEndY = e.changedTouches[0].screenY;
        handleLightboxSwipe();
    }, { passive: true });
}

// Handle horizontal touch swipes inside the lightbox
function handleLightboxSwipe() {
    const diffX = lightboxTouchEndX - lightboxTouchStartX;
    const diffY = lightboxTouchEndY - lightboxTouchStartY;
    
    const swipeThresholdX = 60; // min horizontal distance
    const swipeThresholdY = 40; // max vertical distance
    
    if (Math.abs(diffX) > swipeThresholdX && Math.abs(diffY) < swipeThresholdY) {
        const isRtl = document.body.classList.contains("rtl");
        if (diffX > 0) {
            // Swipe Right -> Previous image (LTR) / Next image (RTL)
            navigateLightbox(isRtl ? 1 : -1);
        } else {
            // Swipe Left -> Next image (LTR) / Previous image (RTL)
            navigateLightbox(isRtl ? -1 : 1);
        }
    }
}
