/* ========================================
   Pranjal Kumar — Portfolio Script
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initActiveNavHighlight();
    initScrollReveal();
});

/* ----------------------------------------
   Mobile hamburger menu
   ---------------------------------------- */
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('mobile-nav-close');

    if (!menuBtn || !mobileNav) return;

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileNav);
    }

    // Close when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    // Close on backdrop click
    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav) closeMobileNav();
    });

    function closeMobileNav() {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    }
}

/* ----------------------------------------
   Smooth scroll for anchor links
   ---------------------------------------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });
}

/* ----------------------------------------
   Active nav link on scroll
   ---------------------------------------- */
function initActiveNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    if (!navLinks.length || !sections.length) return;

    // Base classes for active vs inactive
    const activeClasses = ['text-secondary', 'font-bold', 'border-b-2', 'border-secondary', 'pb-1'];
    const inactiveClasses = ['text-on-surface-variant'];

    function updateActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const isActive = href === `#${currentSection}`;

            if (isActive) {
                link.classList.remove(...inactiveClasses);
                activeClasses.forEach(cls => link.classList.add(cls));
            } else {
                activeClasses.forEach(cls => link.classList.remove(cls));
                link.classList.add(...inactiveClasses);
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Run on load
}

/* ----------------------------------------
   Scroll reveal animations
   ---------------------------------------- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}
