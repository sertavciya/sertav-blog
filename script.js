document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // LANGUAGE TRANSLATIONS
    // =========================================
    const translations = {
        "head_title": { "tr": "Sertav Çiya Timurtaş | İş Analisti", "en": "Sertav Çiya Timurtaş | Business Analyst", "de": "Sertav Çiya Timurtaş | Business Analyst" },
        "nav_home": { "tr": "Ana Sayfa", "en": "Home", "de": "Startseite" },
        "nav_about": { "tr": "Hakkımda", "en": "About", "de": "Über mich" },
        "nav_experience": { "tr": "Deneyim", "en": "Experience", "de": "Erfahrung" },
        "nav_projects": { "tr": "Projeler", "en": "Projects", "de": "Projekte" },
        "nav_contact": { "tr": "İletişim", "en": "Contact", "de": "Kontakt" },
        "greeting": { "tr": "Merhaba, ben", "en": "Hello, I am", "de": "Hallo, ich bin" },
        "role_static": { "tr": "İş Analisti", "en": "Business Analyst", "de": "Business Analyst" },
        "role": { "tr": "İş Analisti ve Yazılım Mühendisi", "en": "Business Analyst & Software Engineer", "de": "Business Analyst & Softwareentwickler" },
        "description": { "tr": "Yenilikçi yazılım çözümleri, veri analizi ve mikroservis mimarileri üzerine odaklanan deneyimli bir iş analistiyim. Modern arayüzler ve güçlü sistemler tasarlıyorum.", "en": "Experienced business analyst focusing on innovative software solutions, data analysis, and microservices architectures. I design modern interfaces and robust systems.", "de": "Erfahrener Business Analyst mit Fokus auf innovative Softwarelösungen, Datenanalyse und Microservices-Architekturen. Ich entwerfe moderne Schnittstellen und robuste Systeme." },
        "location": { "tr": "Dresden, Almanya", "en": "Dresden, Germany", "de": "Dresden, Deutschland" },
        "btn_contact": { "tr": "İletişime Geç", "en": "Contact Me", "de": "Kontaktiere mich" },
        "btn_projects": { "tr": "Projelerimi Gör", "en": "View Projects", "de": "Projekte ansehen" },
        "btn_linkedin": { "tr": "LinkedIn", "en": "LinkedIn", "de": "LinkedIn" },
        "profile_title": { "tr": "Profil", "en": "Profile", "de": "Profil" },
        "skills_title": { "tr": "Temel Yetenekler", "en": "Core Skills", "de": "Kernkompetenzen" },
        "skill_1": { "tr": "İş Analizi", "en": "Business Analysis", "de": "Business-Analyse" },
        "skill_4": { "tr": "Çevik (Agile)", "en": "Agile", "de": "Agil" },
        "stat_exp": { "tr": "Yıl Deneyim", "en": "Years Exp.", "de": "Jahre Erf." },
        "stat_proj": { "tr": "Proje", "en": "Projects", "de": "Projekte" },
        "stat_tech": { "tr": "Teknoloji", "en": "Technologies", "de": "Technologien" },
        "about_title_1": { "tr": "Hakkımda &", "en": "About &", "de": "Über mich &" },
        "about_title_2": { "tr": "Eğitim", "en": "Education", "de": "Bildung" },
        "edu_title": { "tr": "Eğitim", "en": "Education", "de": "Bildung" },
        "edu_period": { "tr": "Eylül 2018 – Temmuz 2023", "en": "September 2018 – July 2023", "de": "September 2018 – Juli 2023" },
        "edu_school": { "tr": "Beykent Üniversitesi", "en": "Beykent University", "de": "Beykent Universität" },
        "edu_loc": { "tr": "İstanbul, Türkiye", "en": "Istanbul, Turkey", "de": "Istanbul, Türkei" },
        "edu_degree": { "tr": "Bilgisayar Mühendisliği Lisans Derecesi", "en": "Bachelor's Degree in Computer Engineering", "de": "Bachelor-Abschluss in Informatik" },
        "lang_title": { "tr": "Dil Yetkinlikleri", "en": "Language Skills", "de": "Sprachkenntnisse" },
        "lang_tr": { "tr": "Türkçe", "en": "Turkish", "de": "Türkisch" },
        "lang_tr_lvl": { "tr": "Anadil", "en": "Native", "de": "Muttersprache" },
        "lang_en": { "tr": "İngilizce", "en": "English", "de": "Englisch" },
        "lang_en_lvl": { "tr": "Profesyonel (C1)", "en": "Professional (C1)", "de": "Professionell (C1)" },
        "lang_de": { "tr": "Almanca", "en": "German", "de": "Deutsch" },
        "lang_de_lvl": { "tr": "Başlangıç (B1)", "en": "Intermediate (B1)", "de": "Mittelstufe (B1)" },
        "skills_section_title": { "tr": "Yetenekler", "en": "Skills", "de": "Fähigkeiten" },
        "skill_cat_1": { "tr": "Veri ve Veritabanı", "en": "Data & Database", "de": "Daten & Datenbank" },
        "skill_cat_2": { "tr": "İş Analizi & Test", "en": "Business Analysis & Testing", "de": "Business-Analyse & Testing" },
        "skill_cat_3": { "tr": "Araçlar ve Geliştirme", "en": "Tools & Development", "de": "Werkzeuge & Entwicklung" },
        "sc1_t2": { "tr": "Sorgu Optimizasyonu", "en": "Query Optimization", "de": "Abfrageoptimierung" },
        "sc1_t3": { "tr": "Veri Analizi", "en": "Data Analysis", "de": "Datenanalyse" },
        "sc2_t1": { "tr": "Gereksinim Toplama", "en": "Requirement Gathering", "de": "Anforderungserhebung" },
        "sc2_t3": { "tr": "İş Akışı Tasarımı", "en": "Workflow Design", "de": "Workflow-Design" },
        "exp_title_1": { "tr": "Profesyonel", "en": "Professional", "de": "Professionelle" },
        "exp_title_2": { "tr": "Deneyim", "en": "Experience", "de": "Erfahrung" },
        "job1_title": { "tr": "İş Analisti", "en": "Business Analyst", "de": "Business Analyst" },
        "job1_date": { "tr": "Nisan 2023 – Aralık 2024 | İstanbul", "en": "April 2023 – December 2024 | Istanbul", "de": "April 2023 – Dezember 2024 | Istanbul" },
        "job1_d1": { "tr": "Mikroservis mimarisi ve React tabanlı arayüz projelerinde modernizasyon süreçlerine aktif katkı.", "en": "Active contribution to modernization processes in microservice architecture and React-based interface projects.", "de": "Aktiver Beitrag zu Modernisierungsprozessen in der Microservices-Architektur und bei React-basierten Schnittstellenprojekten." },
        "job1_d2": { "tr": "DEV, UAT ve Preprod ortamlarında React tabanlı ekranların manuel ve fonksiyonel testleri.", "en": "Manual and functional testing of React-based screens in DEV, UAT and Preprod environments.", "de": "Manuelle und funktionale Tests von React-basierten Bildschirmen in DEV-, UAT- und Preprod-Umgebungen." },
        "job1_d3": { "tr": "Kullanıcı deneyimini artırmak için UX/UI tasarım ekibi ile koordinasyon.", "en": "Coordination with UX/UI design team to increase user experience.", "de": "Zusammenarbeit mit dem UX/UI-Designteam zur Verbesserung der Benutzererfahrung." },
        "job1_d4": { "tr": "Agile/Scrum çerçevesinde analiz, ürün dokümantasyonu ve SQL tabanlı veri doğrulama.", "en": "Analysis, product documentation and SQL-based data validation within Agile/Scrum framework.", "de": "Analyse, Produktdokumentation und SQL-basierte Datenvalidierung im Agile/Scrum-Framework." },
        "job2_title": { "tr": "Yazılım Mühendisliği Stajyeri", "en": "Software Engineering Intern", "de": "Praktikant Software Engineering" },
        "job2_date": { "tr": "Kasım 2022 – Şubat 2023 | İstanbul", "en": "November 2022 – February 2023 | Istanbul", "de": "November 2022 – Februar 2023 | Istanbul" },
        "job2_d1": { "tr": "Temel Bankacılık ve Uygulama biriminde SQL tabanlı veri işleme ve yetkilendirme süreçleri.", "en": "SQL-based data processing and authorization processes in Core Banking and Application unit.", "de": "SQL-basierte Datenverarbeitung und Autorisierungsprozesse im Bereich Core Banking und Anwendungen." },
        "job2_d2": { "tr": "Kritik bankacılık verilerini analiz etmek için gelişmiş SQL sorguları tasarımı.", "en": "Advanced SQL queries design to analyze critical banking data.", "de": "Design komplexer SQL-Abfragen zur Analyse kritischer Bankdaten." },
        "job2_d3": { "tr": "Preprod test ortamında sürekli kontrol ve bankacılık operasyonlarında otomasyon desteği.", "en": "Continuous control in Preprod test environment and automation support in banking operations.", "de": "Kontinuierliche Kontrolle in der Preprod-Testumgebung und Automatisierungsunterstützung im Bankbetrieb." },
        "job3_title": { "tr": "Yazılım Mühendisliği Stajyeri", "en": "Software Engineering Intern", "de": "Praktikant Software Engineering" },
        "job3_date": { "tr": "Temmuz 2022 – Ağustos 2022 | İstanbul", "en": "July 2022 – August 2022 | Istanbul", "de": "Juli 2022 – August 2022 | Istanbul" },
        "job3_d1": { "tr": "İstanbul için günlük hava durumu verilerini görselleştiren web uygulamasının geliştirilmesi.", "en": "Development of a web application visualizing daily weather data for Istanbul.", "de": "Entwicklung einer Webanwendung zur Visualisierung täglicher Wetterdaten für Istanbul." },
        "job3_d2": { "tr": "C#, ASP.NET ve ilgili frameworkler ile geliştirme ve hata ayıklama süreçleri.", "en": "Development and debugging processes with C#, ASP.NET and related frameworks.", "de": "Entwicklungs- und Debugging-Prozesse mit C#, ASP.NET und zugehörigen Frameworks." },
        "proj_title_1": { "tr": "Öne Çıkan", "en": "Featured", "de": "Ausgewählte" },
        "proj_title_2": { "tr": "Projeler", "en": "Projects", "de": "Projekte" },
        "p1_title": { "tr": "Bankacılık Mikroservis Dönüşümü", "en": "Banking Microservice Transformation", "de": "Banking Microservice-Transformation" },
        "p1_desc": { "tr": "Eski monolitik yapıların modern, güvenli mikroservis mimarisine taşınması ve React arayüz entegrasyonu.", "en": "Migration of legacy monolithic structures to modern, secure microservices architecture and React interface integration.", "de": "Migration veralteter monolithischer Strukturen zu moderner, sicherer Microservices-Architektur und Integration von React-Schnittstellen." },
        "p2_title": { "tr": "Yetkilendirme Otomasyonu Sistemi", "en": "Authorization Automation System", "de": "Autorisierungsautomatisierungssystem" },
        "p2_desc": { "tr": "Bankacılık operasyonları için SQL tabanlı veri doğrulama ve yetkilendirme süreçlerinin otomatikleştirilmesi.", "en": "Automation of SQL-based data validation and authorization processes for banking operations.", "de": "Automatisierung von SQL-basierten Datenvalidierungs- und Autorisierungsprozessen für Bankgeschäfte." },
        "p3_title": { "tr": "Hava Durumu Görselleştirme", "en": "Weather Visualization", "de": "Wettervisualisierung" },
        "p3_desc": { "tr": "Günlük hava durumu verilerini toplayıp grafiklerle görselleştiren uçtan uca web uygulaması.", "en": "End-to-end web application that collects daily weather data and visualizes it with charts.", "de": "End-to-End-Webanwendung, die tägliche Wetterdaten sammelt und in Diagrammen visualisiert." },
        "contact_title": { "tr": "İletişim", "en": "Contact", "de": "Kontakt" },
        "contact_desc": { "tr": "Yeni projeler ve fırsatlar için benimle iletişime geçebilirsiniz.", "en": "You can contact me for new projects and opportunities.", "de": "Sie können mich für neue Projekte und Möglichkeiten kontaktieren." },
        "loc_title": { "tr": "Lokasyon", "en": "Location", "de": "Standort" },
        "form_name": { "tr": "İsminiz", "en": "Your Name", "de": "Ihr Name" },
        "form_email": { "tr": "E-posta Adresiniz", "en": "Your Email", "de": "Ihre E-Mail" },
        "form_message": { "tr": "Mesajınız", "en": "Your Message", "de": "Ihre Nachricht" },
        "form_btn": { "tr": "Mesaj Gönder", "en": "Send Message", "de": "Nachricht Senden" },
        "footer_rights": { "tr": "Tüm hakları saklıdır.", "en": "All rights reserved.", "de": "Alle Rechte vorbehalten." },
        "tag_automation": { "tr": "Otomasyon", "en": "Automation", "de": "Automatisierung" },
        "tag_webdev": { "tr": "Web Geliştirme", "en": "Web Development", "de": "Webentwicklung" },
        "tag_microservice": { "tr": "Mikroservis", "en": "Microservice", "de": "Microservice" },
        "tag_dataviz": { "tr": "Veri Görselleştirme", "en": "Data Visualization", "de": "Datenvisualisierung" }
    };

    // =========================================
    // TYPEWRITER EFFECT
    // =========================================
    const typewriterEl = document.getElementById('typewriter');
    const typewriterWords = {
        tr: ['Yazılım Mühendisi', 'Veri Analisti', 'Scrum Uzmanı', 'UAT Uzmanı'],
        en: ['Software Engineer', 'Data Analyst', 'Scrum Expert', 'UAT Specialist'],
        de: ['Softwareentwickler', 'Datenanalyst', 'Scrum-Experte', 'UAT-Spezialist']
    };
    let twWordIndex = 0;
    let twCharIndex = 0;
    let twDeleting = false;
    let twLang = 'tr';
    let twTimeout = null;

    function typeWrite() {
        const words = typewriterWords[twLang] || typewriterWords['tr'];
        const currentWord = words[twWordIndex % words.length];

        if (twDeleting) {
            twCharIndex--;
        } else {
            twCharIndex++;
        }

        if (typewriterEl) {
            typewriterEl.textContent = currentWord.substring(0, twCharIndex);
        }

        let delay = twDeleting ? 60 : 100;

        if (!twDeleting && twCharIndex === currentWord.length) {
            delay = 2000;
            twDeleting = true;
        } else if (twDeleting && twCharIndex === 0) {
            twDeleting = false;
            twWordIndex++;
            delay = 400;
        }

        twTimeout = setTimeout(typeWrite, delay);
    }

    typeWrite();

    // =========================================
    // LANGUAGE CHANGE
    // =========================================
    function changeLanguage(lang) {
        twLang = lang;
        localStorage.setItem('selectedLang', lang);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[key] && translations[key][lang]) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[key][lang];
                } else {
                    el.innerHTML = translations[key][lang];
                }
            }
        });

        // Handle placeholder translations
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[key] && translations[key][lang]) {
                el.placeholder = translations[key][lang];
            }
        });
    }

    const savedLang = localStorage.getItem('selectedLang') || 'tr';
    changeLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            changeLanguage(e.target.dataset.lang);
        });
    });

    // =========================================
    // MOBILE MENU
    // =========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // =========================================
    // NAVBAR SCROLL EFFECT
    // =========================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // =========================================
    // ACTIVE NAV LINK ON SCROLL
    // =========================================
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href').substring(1) === current);
        });
    });

    // =========================================
    // SCROLL TO TOP BUTTON
    // =========================================
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (scrollTopBtn) {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =========================================
    // INTERSECTION OBSERVER (fade + bars)
    // =========================================
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');

            // Animate skill bars inside this section
            entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = (bar.dataset.width || 0) + '%';
            });

            // Animate language bars inside this section
            entry.target.querySelectorAll('.lang-fill').forEach(bar => {
                bar.style.width = (bar.dataset.width || 0) + '%';
            });

            // Count-up numbers
            entry.target.querySelectorAll('.stat-number').forEach(el => {
                animateCount(el);
            });

            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.fade-in').forEach(el => appearOnScroll.observe(el));

    // =========================================
    // COUNT-UP ANIMATION
    // =========================================
    function animateCount(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1200;
        const step = duration / target;
        let current = 0;

        const timer = setInterval(() => {
            current++;
            el.textContent = current;
            if (current >= target) clearInterval(timer);
        }, step);
    }

    // =========================================
    // CONTACT FORM (AJAX)
    // =========================================
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.submit-btn');
            const originalHTML = btn.innerHTML;

            btn.innerHTML = 'Gönderiliyor... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            fetch(form.action, {
                method: "POST",
                body: new FormData(form)
            })
            .then(response => {
                if (response.ok) {
                    btn.innerHTML = 'Mesaj İletildi! <i class="fas fa-check"></i>';
                    btn.style.background = '#27c93f';
                    form.reset();
                } else {
                    btn.innerHTML = 'Hata Oluştu <i class="fas fa-times"></i>';
                    btn.style.background = '#e11d48';
                }
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            })
            .catch(() => {
                btn.innerHTML = 'Hata Oluştu <i class="fas fa-times"></i>';
                btn.style.background = '#e11d48';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            });
        });
    }

});
