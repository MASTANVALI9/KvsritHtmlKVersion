/**
 * Component Loader
 * Responsible for injecting reusable HTML components (navbar, footer) into the DOM.
 * KVSRIT Architecture - Component Loader
 * Handles dynamic injection of reusable components (Navbar, Footer)
 * Optimized for local file preview (bypass CORS) and server deployment.
 */

// Embedded Templates for local parity (bypass CORS on file://)
const NAVBAR_HTML = `
<!-- Top Bar -->
<div class="bg-blue-900 text-white py-2 text-xs hidden md:block">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
            <span class="flex items-center gap-1"><i data-lucide="phone" class="w-3 h-3"></i> +91 91000 33333</span>
            <span class="flex items-center gap-1"><i data-lucide="mail" class="w-3 h-3"></i> office@drkvsrit.ac.in</span>
        </div>
        <div class="flex items-center gap-4">
            <a href="index.html" class="hover:text-blue-300">Home</a>
            <span class="text-gray-500">|</span>
            <a href="admissions.html" class="hover:text-blue-300">Admissions</a>
            <span class="text-gray-500">|</span>
            <a href="contact.html" class="hover:text-blue-300">Contact Us</a>
        </div>
    </div>
</div>

<!-- Main Navigation -->
<nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <!-- Logo (Icon Based for reliability) -->
            <div class="flex-shrink-0 flex items-center">
                <a href="index.html" class="flex items-center gap-3 group">
                    <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:bg-blue-700 transition-all">
                        <i data-lucide="graduation-cap" class="w-7 h-7"></i>
                    </div>
                    <div class="hidden lg:block">
                        <h1 class="text-xl font-bold text-blue-900 leading-tight">KVSRIT</h1>
                        <p class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Engineering Excellence</p>
                    </div>
                </a>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden xl:flex items-center space-x-1">
                <a href="index.html" class="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="about.html" class="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600">About Us</a>
                <a href="admissions.html" class="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600">Admissions</a>
                <a href="faculty.html" class="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600">Faculty</a>
                <a href="contact.html" class="px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600">Contact</a>
                <a href="admissions.html" class="ml-4 bg-blue-600 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-700 hover:shadow-xl transition-all">Apply Now</a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="xl:hidden flex items-center">
                <button id="mobile-menu-btn" class="p-2 text-gray-600 hover:text-blue-600 focus:outline-none">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="xl:hidden hidden bg-gray-50 border-t border-gray-100 pb-10 px-6">
        <div class="py-6 flex flex-col space-y-4">
            <a href="index.html" class="text-lg font-bold text-gray-900 py-2">Home</a>
            <a href="about.html" class="text-lg font-bold text-gray-900 py-2">About Us</a>
            <a href="admissions.html" class="text-lg font-bold text-gray-900 py-2">Admissions</a>
            <a href="contact.html" class="text-lg font-bold text-gray-900 py-2">Contact</a>
            <a href="admissions.html" class="bg-blue-600 text-white px-6 py-4 rounded-2xl text-center font-bold">Apply Now</a>
        </div>
    </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="bg-gray-900 text-gray-300 pt-20 pb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div class="space-y-6">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                        <i data-lucide="graduation-cap" class="w-6 h-6"></i>
                    </div>
                    <span class="text-xl font-black text-white px-1">KVSRIT</span>
                </div>
                <p class="text-sm leading-relaxed text-gray-400">Dr. K.V. Subba Reddy Institute of Technology (KVSRIT). Established 2007. Passion for Excellence.</p>
            </div>
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-8">Quick Links</h4>
                <ul class="space-y-4 text-sm">
                    <li><a href="about.html" class="hover:text-blue-500 transition-colors">About Us</a></li>
                    <li><a href="admissions.html" class="hover:text-blue-500 transition-colors">Admissions</a></li>
                    <li><a href="faculty.html" class="hover:text-blue-500 transition-colors">Faculty</a></li>
                    <li><a href="contact.html" class="hover:text-blue-500 transition-colors">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-8">Legal</h4>
                <ul class="space-y-4 text-sm">
                    <li><a href="#" class="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-blue-500 transition-colors">Terms of Use</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-widest mb-8">Get In Touch</h4>
                <p class="text-sm text-gray-500 mb-4">Dupadu, NH-44, Kurnool, AP - 518 218</p>
                <p class="text-sm text-white font-bold mb-2">+91 91000 33333</p>
                <p class="text-sm text-blue-400 font-bold uppercase">office@drkvsrit.ac.in</p>
            </div>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Determine the root path for assets based on current page location
    const isInsideFolder = window.location.pathname.includes('/departments/');
    const rootPath = isInsideFolder ? '../' : './';

    // Inject Components
    const navPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navPlaceholder) {
        navPlaceholder.innerHTML = NAVBAR_HTML;
        adjustLinks(navPlaceholder, rootPath);
        initMobileMenu();
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = FOOTER_HTML;
        adjustLinks(footerPlaceholder, rootPath);
    }

    // Refresh Lucide Icons (handles injected icons)
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

/**
 * Adjusts relative links based on the current page's depth.
 */
function adjustLinks(container, rootPath) {
    if (rootPath === './') return;

    const links = container.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.includes('mailto:')) {
            // Prepend rootPath to internal links
            link.setAttribute('href', rootPath + href);
        }
    });

    const imgs = container.querySelectorAll('img');
    imgs.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http')) {
            img.setAttribute('src', rootPath + src);
        }
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}
