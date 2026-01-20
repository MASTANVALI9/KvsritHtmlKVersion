/**
 * Main Application Script - KVSRIT Website
 * Handles component injection, scroll effects, mobile menu, and animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get the app container
    const app = document.getElementById('app');

    // Ensure components are loaded
    if (!window.components) {
        console.error("Components library not loaded!");
        return;
    }

    if (app) {
        // Get rootPath from window (set per page) or auto-detect
        let rootPath = window.rootPath || '';

        // Auto-detect if not set
        if (!rootPath) {
            const path = window.location.pathname;
            // Count directory depth to determine rootPath
            // Files in subfolders like /about/ need '../'
            // Files in nested subfolders like /departments/cse/ need '../../'
            const pathParts = path.split('/').filter(p => p && !p.includes('.html'));
            const depth = pathParts.length;

            if (depth >= 2) {
                rootPath = '../../';
            } else if (depth === 1) {
                rootPath = '../';
            } else {
                rootPath = '';
            }
        }

        try {
            // Current page identification for nav highlighting
            const page = window.location.pathname.split("/").pop() || 'index.html';

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
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Toggle icon between menu and x
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('data-lucide', 'menu');
                } else {
                    icon.setAttribute('data-lucide', 'x');
                }
                // Re-render Lucide icons
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }
        });
    }

    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    } else {
        // Retry once after a delay
        setTimeout(() => {
            if (window.lucide) window.lucide.createIcons();
        }, 1000);
    }

    // Initialize Counters Animation (Stats) if present
    const statValues = document.querySelectorAll('.text-3xl.font-bold.text-gray-900.mb-1, .text-4xl.font-bold.text-gray-900.mb-1, [data-counter]');
    if (statValues.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const valueStr = target.innerText;
                    const value = parseInt(valueStr.replace(/[^0-9]/g, ''));
                    const suffix = valueStr.replace(/[0-9]/g, '');

                    if (!isNaN(value) && value > 0) {
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
        }, { threshold: 0.5 });

        statValues.forEach(stat => observer.observe(stat));
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation classes on scroll
    const animateElements = document.querySelectorAll('[data-animate]');
    if (animateElements.length > 0) {
        const animateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                    animateObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animateElements.forEach(el => animateObserver.observe(el));
    }
});
