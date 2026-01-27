# Quick Image Setup Guide

## 📸 Adding Event Images

Since the image generation service is temporarily unavailable, here's how to add your own images:

### Option 1: Use Free Stock Photos (Recommended)

Visit these websites for free college/education photos:
- **Unsplash**: https://unsplash.com/s/photos/college
- **Pexels**: https://www.pexels.com/search/university/
- **Pixabay**: https://pixabay.com/images/search/college/

### Option 2: Use Placeholder Images (For Testing)

Replace the image paths in `news-section.html` with placeholder services:

```html
<!-- Replace this: -->
<img src="assets/images/events/convocation.jpg" alt="Convocation Ceremony">

<!-- With this (temporary): -->
<img src="https://via.placeholder.com/1200x800/2563eb/ffffff?text=Convocation+Ceremony" alt="Convocation Ceremony">
```

### Option 3: Use Your Own Photos

1. Create the directory: `assets/images/events/`
2. Add your images with these names:
   - `convocation.jpg`
   - `tech-fest.jpg`
   - `placement.jpg`
   - `cultural-fest.jpg`
   - `sports-meet.jpg`
   - `workshop.jpg`

### Recommended Image Specifications

- **Format**: JPG or PNG
- **Dimensions**: 1200 x 800 pixels (3:2 ratio)
- **File Size**: Under 500KB each
- **Quality**: 80-85% compression

### Quick PowerShell Command to Create Directory

```powershell
New-Item -ItemType Directory -Path "assets\images\events" -Force
```

---

## 🎯 For Immediate Testing

The component will work even without images - it will show broken image icons, but all functionality (scrolling, carousel, navigation) will work perfectly.

To test immediately:
1. Open `news-section.html` in your browser
2. The news scrolling will work
3. The carousel navigation will work
4. Add images later when ready

---

## 🔄 Update Images Later

You can always update the images later without touching the JavaScript or CSS - just replace the files in the `assets/images/events/` folder!
