// Component Loader - KVSRIT Website
// Handles dynamic injection of reusable components (Navbar, Footer)
// Supports pages at root level, 1-level deep, and 2-levels deep folders

window.components = {
  header: (currentPage = 'index.html', rootPath = '') => {
    const navItems = [
      { name: 'Home', href: 'index.html' },
      {
        name: 'About',
        href: 'about/',
        dropdown: [
          { name: 'About Us', href: 'about/' },
          { name: 'Vision & Mission', href: 'about/' },
          { name: 'Affiliation and Accreditation', href: 'about/' },
          { name: 'Management', href: 'leadership/' },
          { name: 'Principal', href: 'leadership/' },
          { name: 'Administration', href: 'about/' },
          { name: 'Governing Body', href: 'about/' },
          { name: 'College Academic Committee', href: 'about/' },
          { name: 'Service Rules', href: 'about/' },
          { name: 'HR Policies and Strategic Plan', href: 'about/' },
          { name: 'College Organogram', href: 'about/' },
        ]
      },
      {
        name: 'Academics',
        href: 'academics/',
        dropdown: [
          { name: 'Academic Calender', href: 'academics/' },
          { name: 'Regulations and Syllabus', href: 'academics/' },
          { name: 'Exam Cell', href: 'academics/' },
          { name: 'Research and Development Cell', href: 'research/' },
          { name: 'Entrepreneurship Development Cell', href: 'academics/' },
          { name: 'Industry Institute Interaction Cell', href: 'academics/' },
          { name: 'IQAC', href: 'iqac/' },
          { name: 'Policies', href: 'academics/' },
        ]
      },
      {
        name: 'Campus',
        href: 'campus-life/',
        dropdown: [
          { name: 'Campus Life', href: 'campus-life/' },
          { name: 'Student Portal', href: 'student-portal/' },
          { name: 'Alumni', href: 'alumni/' },
          { name: 'Facilities', href: 'facilities/' },
          { name: 'Library', href: 'library/' },
          { name: 'Events', href: 'events/' },
        ]
      },
      {
        name: 'Courses',
        href: 'courses/',
        dropdown: [
          { name: 'B.Tech', href: 'courses/' },
          { name: 'M.Tech', href: 'courses/' },
          { name: 'MBA & MCA', href: 'courses/' },
          { name: 'Diploma', href: 'courses/' },
        ]
      },
      {
        name: 'Departments',
        href: 'departments/',
        dropdown: [
          { name: 'CSE', href: 'departments/cse/' },
          { name: 'ECE', href: 'departments/ece/' },
          { name: 'EEE', href: 'departments/eee/' },
          { name: 'Civil', href: 'departments/ce/' },
          { name: 'Mechanical', href: 'departments/me/' },
          { name: 'H&S', href: 'departments/hs/' },
          { name: 'MBA', href: 'departments/mba/' },
          { name: 'MCA', href: 'departments/mca/' },
          { name: 'Artificial Intelligence', href: 'departments/ai/' },
        ]
      },
      { name: 'Placements', href: 'placements/' },
      {
        name: 'Admissions',
        href: 'admissions/',
        dropdown: [
          { name: 'Admissions Procedure', href: 'admissions/' },
          { name: 'Criteria for Admission', href: 'admissions/' },
          { name: 'Programs Offered', href: 'admissions/' },
          { name: 'Fee Structure', href: 'admissions/' },
          { name: 'Scholarships', href: 'admissions/' },
        ]
      },
      { name: 'Contact', href: 'contact/' },
    ];

    let navHtml = '';
    navItems.forEach(item => {
      if (item.dropdown) {
        navHtml += `
          <div class="relative group">
            <button class="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 focus:outline-none hover:bg-blue-50 transition-colors">
              ${item.name}
              <i data-lucide="chevron-down" class="w-4 h-4 group-hover:rotate-180 transition-transform duration-200"></i>
            </button>
            <div class="absolute left-0 mt-1 w-56 rounded-xl shadow-xl bg-white ring-1 ring-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0 z-50">
              <div class="py-2 px-2">
                ${item.dropdown.map(subItem => `
                  <a href="${rootPath}${subItem.href}" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    ${subItem.name}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      } else {
        navHtml += `
          <a href="${rootPath}${item.href}" class="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-50">
            ${item.name}
          </a>
        `;
      }
    });

    // Mobile nav items
    let mobileNavHtml = '';
    navItems.forEach(item => {
      if (item.dropdown) {
        mobileNavHtml += `
          <div class="py-2">
            <div class="font-bold text-gray-900 py-2">${item.name}</div>
            <div class="pl-4 space-y-1">
              ${item.dropdown.slice(0, 5).map(subItem => `
                <a href="${rootPath}${subItem.href}" class="block py-1 text-gray-600 hover:text-blue-600">${subItem.name}</a>
              `).join('')}
            </div>
          </div>
        `;
      } else {
        mobileNavHtml += `
          <a href="${rootPath}${item.href}" class="block text-lg font-bold text-gray-900 py-2">${item.name}</a>
        `;
      }
    });

    return `
      <header id="main-header" class="sticky top-0 z-50 transition-all duration-300 bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex-shrink-0 flex items-center">
              <a href="${rootPath}index.html" class="flex items-center gap-3 group">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/25 transition-shadow">
                  <i data-lucide="graduation-cap" class="w-7 h-7"></i>
                </div>
                <div class="flex flex-col">
                  <span class="text-xl font-bold text-gray-900 leading-none">KVSRIT</span>
                  <span class="text-xs text-gray-500 font-medium hidden sm:block">Dr. K.V. Subba Reddy Institute of Technology</span>
                </div>
              </a>
            </div>
            <nav class="hidden lg:flex space-x-1 items-center">
              ${navHtml}
              <a href="${rootPath}admissions/" class="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5">
                Apply Now
              </a>
            </nav>
            <div class="flex items-center lg:hidden">
              <button id="mobile-menu-btn" class="p-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors">
                <i data-lucide="menu" class="w-6 h-6"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 px-4 pb-6">
          <div class="py-4 space-y-1">
            ${mobileNavHtml}
            <a href="${rootPath}admissions/" class="block mt-4 bg-blue-600 text-white px-6 py-4 rounded-2xl text-center font-bold">Apply Now</a>
          </div>
        </div>
      </header>
    `;
  },
  footer: (rootPath = '') => {
    const currentYear = new Date().getFullYear();
    return `
      <footer class="relative bg-gray-900 text-white overflow-hidden mt-20">
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[128px]"></div>
          <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px]"></div>
        </div>
        <div class="relative z-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div class="lg:col-span-1">
                <a href="${rootPath}index.html" class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <i data-lucide="graduation-cap" class="w-7 h-7 text-white"></i>
                  </div>
                  <div>
                    <span class="text-xl font-bold block leading-tight">KVSRIT</span>
                    <span class="text-xs text-blue-300">Excellence in Education</span>
                  </div>
                </a>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">
                  Dr. K.V. Subba Reddy Institute of Technology is committed to providing quality education and fostering innovation.
                </p>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
                <ul class="space-y-3">
                  <li><a href="${rootPath}about/" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="${rootPath}academics/" class="text-gray-400 hover:text-white transition-colors">Academics</a></li>
                  <li><a href="${rootPath}admissions/" class="text-gray-400 hover:text-white transition-colors">Admissions</a></li>
                  <li><a href="${rootPath}placements/" class="text-gray-400 hover:text-white transition-colors">Placements</a></li>
                  <li><a href="${rootPath}contact/" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-6">Departments</h4>
                <ul class="space-y-3">
                  <li><a href="${rootPath}departments/cse/" class="text-gray-400 hover:text-white transition-colors">Computer Science</a></li>
                  <li><a href="${rootPath}departments/ece/" class="text-gray-400 hover:text-white transition-colors">Electronics & Communication</a></li>
                  <li><a href="${rootPath}departments/me/" class="text-gray-400 hover:text-white transition-colors">Mechanical</a></li>
                  <li><a href="${rootPath}departments/ai/" class="text-gray-400 hover:text-white transition-colors">Artificial Intelligence</a></li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-6">Contact Us</h4>
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <i data-lucide="map-pin" class="w-5 h-5 text-blue-400 flex-shrink-0"></i>
                    <p class="text-gray-400 text-sm">Dupadu, NH-44, Kurnool, AP - 518218</p>
                  </li>
                  <li class="flex items-center gap-3">
                    <i data-lucide="phone" class="w-5 h-5 text-emerald-400"></i>
                    <a href="tel:+919100033333" class="text-gray-400 text-sm hover:text-white transition-colors">+91 91000 33333</a>
                  </li>
                  <li class="flex items-center gap-3">
                    <i data-lucide="mail" class="w-5 h-5 text-purple-400"></i>
                    <a href="mailto:office@drkvsrit.ac.in" class="text-gray-400 text-sm hover:text-white transition-colors">office@drkvsrit.ac.in</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <p class="text-gray-500 text-sm">© ${currentYear} KVSRIT. All rights reserved.</p>
              <div class="flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                <a href="${rootPath}iqac/" class="hover:text-white transition-colors">IQAC</a>
                <a href="${rootPath}mandatory-disclosures/" class="hover:text-white transition-colors">Disclosures</a>
                <a href="#" class="hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
};
