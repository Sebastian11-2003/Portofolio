
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // CURRENT YEAR
    // ==========================================

    const yearElement = document.getElementById('current-year');

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // ==========================================
    // NAVBAR ACTIVE SECTION
    // ==========================================

    const navLinks = document.querySelectorAll('.nav-links a');

    const sections = document.querySelectorAll(
        'section[id]'
    );

    function setActiveLink(id) {

        navLinks.forEach(link => {

            link.classList.remove('active');
            link.removeAttribute('aria-current');

            if (link.getAttribute('href') === `#${id}`) {

                link.classList.add('active');

                link.setAttribute('aria-current', 'location');

            }

        });

    }


    // ==========================================
    // INTERSECTION OBSERVER
    // ==========================================

    const observerOptions = {

        root: null,

        rootMargin: '-25% 0px -65% 0px',

        threshold: 0

    };


    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    setActiveLink(entry.target.id);

                }

            });

        },

        observerOptions
    );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    // ==========================================
    // NAVIGATION CLICK
    // ==========================================

    navLinks.forEach(link => {

        link.addEventListener('click', () => {

            const targetId = link.getAttribute('href');

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                setActiveLink(targetSection.id);

            }

        });

    });


    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================

    const header = document.querySelector('.header');

    function handleHeaderScroll() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add('scrolled');

        } else {

            header.classList.remove('scrolled');

        }

    }

    window.addEventListener('scroll', handleHeaderScroll);

    handleHeaderScroll();


});
