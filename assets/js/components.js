/**
 * KVSRIT Component Loader (Enhanced Navbar)
 * - Global Navbar + Footer injection on every page
 * - Mega-menu for Departments, Search overlay, Student Portal, Apply Now
 * - Works in root and nested directories via relative path adjustment
 * - Active route highlighting, sticky header with compact mode on scroll
 * - Basic keyboard accessibility for dropdowns and search overlay
 */

// Embedded Templates to avoid fetch/CORS issues when opened as file://
const NAVBAR_HTML = `
<!-- Top Bar -->
<div class="bg-blue-900 text-white py-2 text-xs hidden md:block">
  <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
    <div class="flex items-center gap-4">
      <span class="flex items-center gap-1"><i data-lucide="phone" class="w-3 h-3"></i> +91 91000 33333</span>
      <span class="flex items-center gap-1"><i data-lucide="mail" class="w-3 h-3"></i> office@drkvsrit.ac.in</span>
    </div>
    <div class="flex items-center gap-4">
      <a href="mandatory-disclosures/index.html" class="hover:text-blue-300">Mandatory Disclosures</a>
      <span class="text-gray-500">|</span>
      <a href="alumni/index.html" class="hover:text-blue-300">Alumni</a>
      <span class="text-gray-500">|</span>
      <a href="contact.html" class="hover:text-blue-300">Contact Us</a>
    </div>
  </div>
</div>

<!-- Main Navigation -->
<nav id="main-nav" class="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div id="nav-inner" class="flex justify-between items-center h-20">
      <!-- Logo -->
      <div class="flex-shrink-0 flex items-center">
        <a href="index.html" class="flex items-center gap-4 group">
          <img src="images/logo.png" alt="KVSRIT Logo" class="h-17">
          <div class="hidden lg:block">
            <h1 class="text-lg font-bold text-blue-900 leading-tight">KVSRIT</h1>
            <p class="text-[10px] text-gray-500 font-medium uppercase tracking-tight">Dr. K.V. Subba Reddy Institute of Technology</p>
          </div>
        </a>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden xl:flex items-center space-x-1">
        <a href="index.html" class="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</a>

        <!-- About Dropdown -->
        <div class="relative group" data-dropdown>
          <button aria-haspopup="true" aria-expanded="false"
            class="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 group focus:outline-none">
            About Us <i data-lucide="chevron-down" class="w-4 h-4 group-hover:rotate-180 transition-transform"></i>
          </button>
          <div role="menu"
            class="absolute left-0 mt-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
            <div class="py-2">
              <a href="about/index.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Vision & Mission</a>
              <a href="about/index.html#management" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Management</a>
              <a href="about/index.html#principal" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Principal</a>
              <a href="about/index.html#accreditation" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Accreditation</a>
            </div>
          </div>
        </div>

        <a href="admissions.html" class="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600">Admissions</a>
        <a href="academics/index.html" class="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600">Academics</a>

        <!-- Departments Mega Menu -->
        <div class="relative group" data-dropdown>
          <button aria-haspopup="true" aria-expanded="false"
            class="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 group focus:outline-none">
            Departments <i data-lucide="chevron-down" class="w-4 h-4 group-hover:rotate-180 transition-transform"></i>
          </button>
          <div role="menu"
            class="absolute left-0 mt-0 w-[640px] bg-white border border-gray-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] p-4">
            <div class="grid grid-cols-2 gap-2">
              <a href="departments/cse/index.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50">
                <div class="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center"><i data-lucide="cpu" class="w-5 h-5 text-blue-700"></i></div>
                <div>
                  <div class="text-sm font-semibold text-gray-800">Computer Science (CSE)</div>
                  <div class="text-[11px] text-gray-500">B.Tech</div>
                </div>
              </a>
              <a href="departments/ai/index.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50">
                <div class="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center"><i data-lucide="brain" class="w-5 h-5 text-violet-700"></i></div>
                <div>
                  <div class="text-sm font-semibold text-gray-800">CSE (AI & ML)</div>
                  <div class="text-[11px] text-gray-500">B.Tech</div>
                </div>
              </a>
              <a href="departments/ece/index.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50">
                <div class="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center"><i data-lucide="radio" class="w-5 h-5 text-amber-700"></i></div>
                <div>
                  <div class="text-sm font-semibold text-gray-800">Electronics (ECE)</div>
                  <div class="text-[11px] text-gray-500">B.Tech</div>
                </div>
              </a>
              <a href="departments/eee/index.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50">
                <div class="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center"><i data-lucide="zap" class="w-5 h-5 text-emerald-700"></i></div>
                <div>
                  <div class="text-sm font-semibold text-gray-800">Electrical (EEE)</div>
                  <div class="text-[11px] text-gray-500">B.Tech</div>
                </div>
              </a>
              <a href="departments/ce/index.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50">
                <div class="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center"><i data-lucide="ruler" class="w-5 h-5 text-sky-700"></i></div>
                <div>
                  <div class="text-sm font-semibold text-gray-800">Civil (CE)</div>
                  <div class="text-[11px] text-gray-500">B.Tech</div>
                </div>
              </a>
              <a href="departments/me/index.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50">
                <div class="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center"><i data-lucide="cog" class="w-5 h-5 text-rose-700"></i></div>
                <div>
                  <div class="text-sm font-semibold text-gray-800">Mechanical (ME)</div>
                  <div class="text-[11px] text-gray-500">B.Tech</div>
                </div>
              </a>
              <a href="departments/mba/index.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50">
                <div class="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center"><i data-lucide="briefcase" class="w-5 h-5 text-indigo-700"></i></div>
                <div>
                  <div class="text-sm font-semibold text-gray-800">Management (MBA/MCA)</div>
                  <div class="text-[11px] text-gray-500">PG</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <a href="placements.html" class="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600">Placements</a>
        <a href="campus-life/index.html" class="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600">Campus Life</a>

        <!-- Right Actions -->
        <div class="flex items-center gap-2 pl-2 ml-2 border-l border-gray-100">
          <a href="student-portal/index.html" class="px-4 h-10 inline-flex items-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium">Student Portal</a>
          <button id="search-btn" aria-label="Search" class="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100">
            <i data-lucide="search" class="w-5 h-5"></i>
          </button>
          <a href="admissions.html" class="ml-1 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 hover:shadow-lg transition-all">Apply Now</a>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="xl:hidden flex items-center gap-2">
        <button id="search-btn-mobile" aria-label="Search" class="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100">
          <i data-lucide="search" class="w-6 h-6"></i>
        </button>
        <button id="mobile-menu-btn" class="p-2 text-gray-600 hover:text-blue-600 focus:outline-none">
          <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="xl:hidden hidden bg-gray-50 border-t border-gray-100 pb-6 px-4">
    <div class="py-4 flex flex-col space-y-2">
      <a href="index.html" class="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-blue-50 rounded-lg">Home</a>
      <a href="about/index.html" class="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-blue-50 rounded-lg">About Us</a>
      <a href="admissions.html" class="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-blue-50 rounded-lg">Admissions</a>
      <a href="departments/ai.html" class="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-blue-50 rounded-lg">Departments</a>
      <a href="placements/index.html" class="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-blue-50 rounded-lg">Placements</a>
      <a href="student-portal/index.html" class="px-4 py-3 text-base font-semibold text-gray-700 hover:bg-blue-50 rounded-lg">Student Portal</a>
      <a href="admissions.html" class="mx-4 mt-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-bold">Apply Now</a>
    </div>
  </div>
</nav>

<!-- Search Overlay -->
<div id="search-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm hidden items-start justify-center pt-24 z-[60]">
  <div class="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 mx-4">
    <div class="flex items-center gap-3">
      <i data-lucide="search" class="w-5 h-5 text-gray-500"></i>
      <input id="search-input" type="text" placeholder="Search site..." class="w-full outline-none text-gray-900 placeholder-gray-400">
      <button id="search-close" class="p-2 rounded-lg text-gray-600 hover:bg-gray-100" aria-label="Close search"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <div id="search-suggestions" class="mt-4 text-sm text-gray-500">Type to search pages like Admissions, Departments, Placements...</div>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer class="bg-gray-900 text-gray-300 pt-20 pb-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <!-- College Info -->
      <div class="space-y-6">
        <img src="images/logo.png" alt="KVSRIT Logo" class="h-16 brightness-0 invert">
        <p class="text-sm leading-relaxed text-gray-400">
          Dr. K.V. Subba Reddy Institute of Technology (KVSRIT) is established in 2007 with a mission to produce high-quality engineering professionals.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><i data-lucide="facebook" class="w-4 h-4"></i></a>
          <a href="#" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors"><i data-lucide="twitter" class="w-4 h-4"></i></a>
          <a href="#" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"><i data-lucide="instagram" class="w-4 h-4"></i></a>
          <a href="#" class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
        </div>
      </div>

        <!-- Quick Links -->
      <div>
        <h4 class="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-blue-600">Quick Links</h4>
        <ul class="space-y-4 text-sm">
          <li><a href="about/index.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> About Us</a></li>
          <li><a href="admissions.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> Admissions</a></li>
          <li><a href="academics/index.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> Academics</a></li>
          <li><a href="placements/index.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> Placements</a></li>
          <li><a href="contact.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> Contact Us</a></li>
        </ul>
      </div>

      <!-- Academics -->
      <div>
        <h4 class="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-blue-600">Academics</h4>
        <ul class="space-y-4 text-sm">
          <li><a href="courses/index.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> B.Tech Programs</a></li>
          <li><a href="courses/index.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> Post Graduation</a></li>
          <li><a href="exam-cell.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> Exam Cell</a></li>
          <li><a href="library/index.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> Library</a></li>
          <li><a href="facilities/index.html" class="hover:text-blue-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3 text-blue-600"></i> Campus Facilities</a></li>
        </ul>
      </div>

      <!-- Get in Touch -->
      <div>
        <h4 class="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-blue-600">Get In Touch</h4>
        <ul class="space-y-6 text-sm">
          <li class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0"><i data-lucide="map-pin" class="w-5 h-5 text-blue-500"></i></div>
            <p class="text-gray-400">Dupadu, NH-44, Kurnool, Andhra Pradesh - 518 218</p>
          </li>
          <li class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0"><i data-lucide="phone" class="w-5 h-5 text-emerald-500"></i></div>
            <p class="text-gray-400">+91 91000 33333</p>
          </li>
          <li class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0"><i data-lucide="mail" class="w-5 h-5 text-amber-500"></i></div>
            <p class="text-gray-400">office@drkvsrit.ac.in</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-xs text-gray-500">© ${new Date().getFullYear()} Dr. K.V. Subba Reddy Institute of Technology. All rights reserved.</p>
      <div class="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-gray-600">
        <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-white transition-colors">Terms of Use</a>
        <a href="#" class="hover:text-white transition-colors">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Determine rootPath for nested routes
  // Determine rootPath for nested routes
  // Prioritize global rootPath if set (for static file deployments)
  // Determine rootPath for nested routes
  const rootPath = window.rootPath !== undefined ? window.rootPath : (
    (() => {
      const path = window.location.pathname;
      // For file:// support on windows, normalize slashes and remove drive letter if present
      const normalizedPath = path.replace(/\\/g, '/').replace(/^[A-Z]:/i, '');
      const segments = normalizedPath.split('/').filter(s => s.length > 0);

      // If the path ends with .html, the last segment is the file.
      // We need to count segments *before* the file.
      // E.g., /project/about/index.html -> [project, about, index.html]
      // We need to know how many steps to get back to the root (where index.html is)

      // Find the project root index. We assume 'kvsrithtml' is a root-level marker or calculate based on depth.
      // A better way: check if we are in a known nested structure.
      const isDept = /\/departments\//.test(normalizedPath);
      const isAbout = /\/about\//.test(normalizedPath);
      const isAcademics = /\/academics\//.test(normalizedPath);
      const isCampus = /\/campus-life\//.test(normalizedPath);
      const isPlacements = /\/placements\//.test(normalizedPath);
      const isStudentPortal = /\/student-portal\//.test(normalizedPath);

      const isCourses = /\/courses\//.test(normalizedPath);

      // Multi-level nesting check (e.g. departments/cse/index.html)
      const deptMatch = normalizedPath.match(/\/departments\/([^\/]+)\//);
      if (deptMatch) return '../../';

      if (isDept || isAbout || isAcademics || isCampus || isPlacements || isStudentPortal || isCourses) {
        return '../';
      }
      return './';
    })()
  );

  const navPlaceholder = document.getElementById('navbar-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder) {
    navPlaceholder.innerHTML = NAVBAR_HTML;
    adjustLinks(navPlaceholder, rootPath);
    initMobileMenu();
    highlightActive(navPlaceholder, rootPath);
    initSearchOverlay();
    initDropdownA11y();
  }

  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_HTML;
    adjustLinks(footerPlaceholder, rootPath);
  }

  // Refresh icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
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
});

// Adjust internal links and images for nested pages
function adjustLinks(container, rootPath) {
  if (rootPath === './') return;

  container.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;
    link.setAttribute('href', rootPath + href);
  });

  container.querySelectorAll('img[src]').forEach(img => {
    const src = img.getAttribute('src');
    if (!src) return;
    if (src.startsWith('http')) return;
    img.setAttribute('src', rootPath + src);
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

function highlightActive(container, rootPath) {
  const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  container.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const target = href.replace(rootPath, '').toLowerCase();
    if (current === target || (current === 'index.html' && (target === '' || target.endsWith('index.html')))) {
      a.classList.add('text-blue-600');
    }
  });
}


function initSearchOverlay() {
  const overlay = document.getElementById('search-overlay');
  const openBtns = [document.getElementById('search-btn'), document.getElementById('search-btn-mobile')].filter(Boolean);
  const closeBtn = document.getElementById('search-close');
  const input = document.getElementById('search-input');

  const open = () => {
    if (!overlay) return;
    overlay.classList.remove('hidden');
    setTimeout(() => input && input.focus(), 0);
  };
  const close = () => overlay && overlay.classList.add('hidden');

  openBtns.forEach(b => b.addEventListener('click', open));
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

function initDropdownA11y() {
  const dropdowns = document.querySelectorAll('[data-dropdown] > button');
  dropdowns.forEach(btn => {
    const parent = btn.parentElement;
    const menu = parent && parent.querySelector('[role="menu"]');
    if (!menu) return;

    // Toggle aria-expanded on focus/keyboard
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if (!expanded) menu.classList.remove('invisible', 'opacity-0');
      } else if (e.key === 'Escape') {
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.add('invisible', 'opacity-0');
        btn.blur();
      }
    });

    // Close when leaving dropdown area via keyboard
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.add('invisible', 'opacity-0');
        btn.focus();
      }
    });
  });
}
