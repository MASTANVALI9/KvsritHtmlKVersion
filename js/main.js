document.addEventListener('DOMContentLoaded', () => {
    // Inject Header and Footer
    const app = document.getElementById('app');

    // Ensure components are loaded
    if (!window.components) {
        console.error("Components library not loaded!");
        return;
    }

    if (app) {
        // Current page identification for nav highlighting
        // Handle local file system paths where pathname might not work as expected
        const path = window.location.pathname;
        const page = path.split("/").pop() || 'index.html';

        try {
            const rootPath = window.rootPath || '';
            const headerHtml = window.components.header(page, rootPath);
            const footerHtml = window.components.footer(rootPath);

            app.insertAdjacentHTML('afterbegin', headerHtml);
            app.insertAdjacentHTML('beforeend', footerHtml);
        } catch (e) {
            console.error("Error injecting components:", e);
        }
    }

    // Header Scroll Effect
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
                header.classList.remove('bg-white', 'shadow-md');
            } else {
                header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
                header.classList.add('bg-white', 'shadow-md');
            }
        });
    }

    // Mobile Menu Toggle
    // Use event delegation or re-query since header is injected dynamically
    // But since valid script order runs this AFTER injection, simply querying is fine.
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    } else {
        // Fallback or retry?
        // Sometimes CDN takes time. Maybe retry once?
        setTimeout(() => {
            if (window.lucide) window.lucide.createIcons();
        }, 1000);
    }

    // Initialize Counters (Stats) if present
    const statsSection = document.getElementById('stats-section'); // Add id to section in index.html if not present?
    // Actually our stats items are just there. The original had animation.
    // Let's add simple animation for stats if we see them
    const statValues = document.querySelectorAll('.text-3xl.font-bold.text-gray-900.mb-1');
    if (statValues.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Simple counter animation
                    const target = entry.target;
                    const valueStr = target.innerText;
                    const value = parseInt(valueStr.replace(/[^0-9]/g, ''));
                    const suffix = valueStr.replace(/[0-9]/g, '');

                    if (!isNaN(value)) {
                        let current = 0;
                        const increment = Math.ceil(value / 50);
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= value) {
                                current = value;
                                clearInterval(timer);
                            }
                            target.innerText = current + suffix;
                        }, 20);
                        observer.unobserve(target);
                    }
                }
            });
        });

        statValues.forEach(stat => observer.observe(stat));
    }
});
