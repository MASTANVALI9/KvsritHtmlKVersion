/**
 * ========================================
 * Latest News & Updates Section
 * JavaScript for Auto-Scrolling & Carousel
 * ========================================
 * 
 * Features:
 * - Auto-scrolling news text (vertical)
 * - Auto-scrolling image carousel (horizontal)
 * - Pause on hover functionality
 * - Manual navigation controls
 * - Responsive and accessible
 */

(function () {
    'use strict';

    // ========================================
    // Configuration
    // ========================================
    const CONFIG = {
        newsScrollSpeed: 30000,        // 30 seconds for full scroll
        carouselAutoPlayInterval: 4000, // 4 seconds per slide
        carouselTransitionSpeed: 500    // 0.5 seconds transition
    };

    // ========================================
    // News Text Auto-Scroll
    // ========================================
    class NewsScroller {
        constructor() {
            this.scrollContent = document.getElementById('newsScrollContent');
            if (!this.scrollContent) return;

            this.init();
        }

        init() {
            // Clone news items for seamless infinite scroll
            this.cloneNewsItems();

            // Pause on hover
            this.setupHoverPause();
        }

        cloneNewsItems() {
            // Clone all news items and append to create infinite scroll effect
            const newsItems = this.scrollContent.querySelectorAll('.news-item');
            newsItems.forEach(item => {
                const clone = item.cloneNode(true);
                this.scrollContent.appendChild(clone);
            });
        }

        setupHoverPause() {
            const wrapper = this.scrollContent.closest('.news-scroll-wrapper');
            if (!wrapper) return;

            // Animation is controlled by CSS, hover state pauses it
            // This is already handled in CSS with :hover pseudo-class
            // But we can add additional JavaScript control if needed

            wrapper.addEventListener('mouseenter', () => {
                this.scrollContent.style.animationPlayState = 'paused';
            });

            wrapper.addEventListener('mouseleave', () => {
                this.scrollContent.style.animationPlayState = 'running';
            });
        }
    }

    // ========================================
    // Image Carousel
    // ========================================
    class ImageCarousel {
        constructor() {
            this.carousel = document.getElementById('imageCarousel');
            this.prevBtn = document.getElementById('prevBtn');
            this.nextBtn = document.getElementById('nextBtn');
            this.indicatorsContainer = document.getElementById('carouselIndicators');

            if (!this.carousel) return;

            this.currentIndex = 0;
            this.items = this.carousel.querySelectorAll('.carousel-item');
            this.totalItems = this.items.length;
            this.autoPlayInterval = null;
            this.isTransitioning = false;

            this.init();
        }

        init() {
            if (this.totalItems === 0) return;

            // Create indicators
            this.createIndicators();

            // Setup navigation
            this.setupNavigation();

            // Start autoplay
            this.startAutoPlay();

            // Pause on hover
            this.setupHoverPause();

            // Handle visibility change (pause when tab is not visible)
            this.handleVisibilityChange();
        }

        createIndicators() {
            this.indicatorsContainer.innerHTML = '';

            for (let i = 0; i < this.totalItems; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('indicator');
                if (i === 0) indicator.classList.add('active');

                indicator.addEventListener('click', () => {
                    this.goToSlide(i);
                });

                this.indicatorsContainer.appendChild(indicator);
            }

            this.indicators = this.indicatorsContainer.querySelectorAll('.indicator');
        }

        setupNavigation() {
            // Previous button
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => {
                    this.previousSlide();
                });
            }

            // Next button
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => {
                    this.nextSlide();
                });
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    this.previousSlide();
                } else if (e.key === 'ArrowRight') {
                    this.nextSlide();
                }
            });

            // Touch/Swipe support
            this.setupTouchNavigation();
        }

        setupTouchNavigation() {
            let touchStartX = 0;
            let touchEndX = 0;

            this.carousel.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            this.carousel.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe(touchStartX, touchEndX);
            }, { passive: true });
        }

        handleSwipe(startX, endX) {
            const swipeThreshold = 50;
            const diff = startX - endX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swiped left - next slide
                    this.nextSlide();
                } else {
                    // Swiped right - previous slide
                    this.previousSlide();
                }
            }
        }

        goToSlide(index) {
            if (this.isTransitioning) return;

            this.isTransitioning = true;
            this.currentIndex = index;

            // Update carousel position
            const offset = -this.currentIndex * 100;
            this.carousel.style.transform = `translateX(${offset}%)`;

            // Update indicators
            this.updateIndicators();

            // Reset autoplay
            this.resetAutoPlay();

            // Allow transitions again after animation completes
            setTimeout(() => {
                this.isTransitioning = false;
            }, CONFIG.carouselTransitionSpeed);
        }

        nextSlide() {
            const nextIndex = (this.currentIndex + 1) % this.totalItems;
            this.goToSlide(nextIndex);
        }

        previousSlide() {
            const prevIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
            this.goToSlide(prevIndex);
        }

        updateIndicators() {
            this.indicators.forEach((indicator, index) => {
                if (index === this.currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, CONFIG.carouselAutoPlayInterval);
        }

        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }

        resetAutoPlay() {
            this.stopAutoPlay();
            this.startAutoPlay();
        }

        setupHoverPause() {
            const wrapper = this.carousel.closest('.image-carousel-wrapper');
            if (!wrapper) return;

            wrapper.addEventListener('mouseenter', () => {
                this.stopAutoPlay();
            });

            wrapper.addEventListener('mouseleave', () => {
                this.startAutoPlay();
            });
        }

        handleVisibilityChange() {
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.stopAutoPlay();
                } else {
                    this.startAutoPlay();
                }
            });
        }
    }

    // ========================================
    // Utility Functions
    // ========================================

    /**
     * Check if element is in viewport
     */
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /**
     * Lazy load images when section is in viewport
     */
    function setupLazyLoading() {
        const images = document.querySelectorAll('.carousel-item img');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // If image has data-src, load it
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }

                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    /**
     * Add smooth scroll behavior for "Read more" links
     */
    function setupSmoothScroll() {
        const newsLinks = document.querySelectorAll('.news-link');

        newsLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // If link has a hash, enable smooth scroll
                if (link.hash) {
                    e.preventDefault();
                    const target = document.querySelector(link.hash);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }

    /**
     * Accessibility: Announce slide changes to screen readers
     */
    function announceSlideChange(slideNumber, totalSlides) {
        const announcement = `Slide ${slideNumber} of ${totalSlides}`;
        const ariaLive = document.createElement('div');
        ariaLive.setAttribute('aria-live', 'polite');
        ariaLive.setAttribute('aria-atomic', 'true');
        ariaLive.className = 'sr-only';
        ariaLive.textContent = announcement;
        document.body.appendChild(ariaLive);

        setTimeout(() => {
            document.body.removeChild(ariaLive);
        }, 1000);
    }

    // ========================================
    // Initialize on DOM Ready
    // ========================================
    function init() {
        // Initialize news scroller
        const newsScroller = new NewsScroller();

        // Initialize image carousel
        const imageCarousel = new ImageCarousel();

        // Setup lazy loading
        if ('IntersectionObserver' in window) {
            setupLazyLoading();
        }

        // Setup smooth scroll
        setupSmoothScroll();

        console.log('✅ News & Updates section initialized successfully');
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
