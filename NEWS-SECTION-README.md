# Latest News & Updates Section

## 📋 Overview

A professional, clean, and modern **Latest News & Announcements** section designed specifically for college websites. This component features auto-scrolling news text and an image carousel for events, built with vanilla HTML, CSS, and JavaScript.

---

## ✨ Features

### 🔹 News Scrolling (Left Side)
- ✅ Vertical auto-scroll animation
- ✅ Pause on hover
- ✅ Seamless infinite loop
- ✅ News badges (New, Important)
- ✅ Date stamps with icons
- ✅ "Read more" links
- ✅ Clean, academic styling

### 🔹 Image Carousel (Right Side)
- ✅ Horizontal auto-scroll
- ✅ Smooth transitions
- ✅ Pause on hover
- ✅ Manual navigation (prev/next buttons)
- ✅ Keyboard navigation (arrow keys)
- ✅ Touch/swipe support for mobile
- ✅ Indicator dots
- ✅ Image overlays with captions

### 🔹 Responsive Design
- ✅ Desktop, tablet, and mobile optimized
- ✅ Grid layout adapts to screen size
- ✅ Touch-friendly controls
- ✅ Smooth animations

### 🔹 Accessibility
- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Reduced motion support
- ✅ Screen reader friendly

---

## 📁 File Structure

```
kvsrithtml/
├── news-section.html              # Standalone demo page
├── assets/
│   ├── css/
│   │   └── news-section.css       # All styles
│   ├── js/
│   │   └── news-section.js        # All functionality
│   └── images/
│       └── events/                # Event images folder
│           ├── convocation.jpg
│           ├── tech-fest.jpg
│           ├── placement.jpg
│           ├── cultural-fest.jpg
│           ├── sports-meet.jpg
│           └── workshop.jpg
```

---

## 🚀 Quick Start

### Option 1: Standalone Page
Simply open `news-section.html` in your browser to see the component in action.

### Option 2: Integrate into Existing Page

Add this section to your existing HTML page:

```html
<!-- Add CSS in <head> -->
<link rel="stylesheet" href="assets/css/news-section.css">

<!-- Add HTML section where you want it to appear -->
<section class="news-section" id="news-updates">
    <!-- Copy the entire section from news-section.html -->
</section>

<!-- Add JavaScript before closing </body> -->
<script src="assets/js/news-section.js"></script>
```

---

## 🎨 Customization Guide

### 1️⃣ Update News Items

Edit the news items in the HTML file:

```html
<div class="news-item">
    <div class="news-badge">New</div>  <!-- Optional badge -->
    <h4 class="news-title">Your News Title</h4>
    <p class="news-date">📅 January 27, 2026</p>
    <p class="news-description">Your news description here...</p>
    <a href="#" class="news-link">Read more →</a>
</div>
```

**Badge Options:**
- `<div class="news-badge">New</div>` - Blue badge
- `<div class="news-badge important">Important</div>` - Red pulsing badge
- Remove the badge div entirely for no badge

### 2️⃣ Update Event Images

Replace the images in `assets/images/events/` folder with your own event photos.

**Image Requirements:**
- Format: JPG, PNG, or WebP
- Recommended size: 1200x800px (3:2 aspect ratio)
- File size: < 500KB for optimal loading

Update the image carousel HTML:

```html
<div class="carousel-item">
    <div class="image-wrapper">
        <img src="assets/images/events/your-image.jpg" alt="Event description">
        <div class="image-overlay">
            <h4>Event Title</h4>
            <p>Event description</p>
        </div>
    </div>
</div>
```

### 3️⃣ Adjust Colors

Edit the CSS variables in `news-section.css`:

```css
:root {
    --primary-blue: #2563eb;      /* Main blue color */
    --primary-dark: #1e40af;      /* Darker blue */
    --accent-blue: #3b82f6;       /* Accent color */
    --text-dark: #1f2937;         /* Dark text */
    --text-gray: #6b7280;         /* Gray text */
}
```

### 4️⃣ Adjust Timing

Edit the configuration in `news-section.js`:

```javascript
const CONFIG = {
    newsScrollSpeed: 30000,        // News scroll duration (ms)
    carouselAutoPlayInterval: 4000, // Time per slide (ms)
    carouselTransitionSpeed: 500    // Transition speed (ms)
};
```

### 5️⃣ Adjust Heights

Edit the CSS for different section heights:

```css
.news-scroll-wrapper,
.image-carousel-wrapper {
    height: 500px;  /* Change this value */
}
```

---

## 📱 Responsive Breakpoints

The component automatically adapts to different screen sizes:

- **Desktop**: 2-column grid (news left, images right)
- **Tablet** (< 968px): Single column, stacked layout
- **Mobile** (< 640px): Optimized for small screens

---

## ⚙️ Configuration Options

### News Scroll Animation

The news scroll is controlled by CSS animation. To modify:

```css
@keyframes scrollNews {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
}

.news-scroll-content {
    animation: scrollNews 30s linear infinite;
}
```

### Carousel Auto-Play

To disable auto-play, comment out this line in `news-section.js`:

```javascript
// this.startAutoPlay();  // Comment this line
```

---

## 🎯 Integration Examples

### Example 1: Add to Homepage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KVSRIT - Home</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/news-section.css">
</head>
<body>
    <!-- Your existing header/navbar -->
    
    <!-- Your hero section -->
    
    <!-- NEWS SECTION -->
    <section class="news-section" id="news-updates">
        <!-- Copy section content here -->
    </section>
    
    <!-- Your other sections -->
    
    <script src="assets/js/news-section.js"></script>
</body>
</html>
```

### Example 2: Create Dedicated News Page

Use `news-section.html` as a template for a dedicated news/announcements page.

---

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: Uses modern CSS features (Grid, Flexbox, CSS Variables). IE11 not supported.

---

## 📝 Adding/Removing Items

### Add More News Items

1. Copy an existing news item `<div class="news-item">...</div>`
2. Paste it in the `news-scroll-content` div
3. Update the content
4. The JavaScript automatically handles cloning for infinite scroll

### Add More Carousel Images

1. Copy an existing carousel item `<div class="carousel-item">...</div>`
2. Paste it in the `image-carousel` div
3. Update the image source and caption
4. The JavaScript automatically creates indicators

### Remove Items

Simply delete the entire `<div class="news-item">` or `<div class="carousel-item">` block.

---

## 🎨 Styling Tips

### Match Your College Colors

Replace the blue theme with your college colors:

```css
:root {
    --primary-blue: #your-color;
    --primary-dark: #your-dark-color;
    --accent-blue: #your-accent;
}
```

### Add Dark Mode

Add this media query to support dark mode:

```css
@media (prefers-color-scheme: dark) {
    .news-section {
        background: #1f2937;
    }
    .news-item {
        background: #374151;
        color: #f9fafb;
    }
}
```

---

## 🐛 Troubleshooting

### Images Not Loading

1. Check image paths are correct
2. Ensure images exist in `assets/images/events/`
3. Check file permissions

### Carousel Not Auto-Scrolling

1. Check JavaScript console for errors
2. Ensure `news-section.js` is loaded
3. Verify element IDs match (`imageCarousel`, `prevBtn`, `nextBtn`)

### News Not Scrolling

1. Check CSS is loaded properly
2. Verify `news-scroll-content` ID exists
3. Check browser supports CSS animations

---

## 📄 License

Free to use for educational institutions. Modify as needed for your college website.

---

## 🤝 Support

For questions or issues:
1. Check this README first
2. Review the commented code
3. Test in different browsers

---

## 📌 Quick Checklist

Before going live:

- [ ] Replace all news items with real content
- [ ] Add your own event images
- [ ] Update colors to match your college branding
- [ ] Test on mobile devices
- [ ] Test all links work correctly
- [ ] Optimize images for web
- [ ] Test in different browsers
- [ ] Verify accessibility features

---

**Created for KVSRIT College Website**  
*Production-ready component • No external dependencies • Easy to customize*
