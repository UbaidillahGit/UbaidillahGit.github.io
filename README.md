# Portfolio — ubaidillah.dev

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- 🌓 **Dark/Light Mode** — Toggle theme with persistent storage
- 📱 **Responsive Design** — Mobile-friendly layout at all breakpoints
- ⚡ **No Dependencies** — Pure HTML, CSS, and JavaScript
- 🎨 **Modern UI** — Jatevo.ai-inspired design with glassmorphism and smooth animations
- 🔗 **Clean Structure** — Organized CSS and JS files

## Project Structure

```
portfolio/
├── index.html          # Main HTML markup
├── css/
│   └── style.css       # All styles (dark/light themes)
├── js/
│   └── main.js         # Theme toggle, nav, scroll animations
└── README.md           # This file
```

## Getting Started

### Local Development

1. Open `index.html` in your browser (or use a local server)
2. No build tools or dependencies required
3. Edit content directly in `index.html`, styles in `css/style.css`, or scripts in `js/main.js`

### Deploy to GitHub Pages

**Option 1: Direct Copy (Recommended)**
```bash
# If your repo is username.github.io
cp -r portfolio/* /path/to/username.github.io/
cd /path/to/username.github.io
git add .
git commit -m "Deploy portfolio"
git push
```

**Option 2: Using a Subfolder**
```bash
# If deploying to username.github.io/portfolio
cp -r portfolio /path/to/repo/
git add portfolio/
git commit -m "Add portfolio"
git push
```

Your site will be live at:
- `https://username.github.io` (if Option 1)
- `https://username.github.io/portfolio/` (if Option 2)

## Customization

### Change Content
Edit `index.html` directly. All sections are clearly marked with HTML comments.

### Change Colors
Edit the CSS variables in `css/style.css` (lines 17-96):
- Dark theme: `[data-theme="dark"]`
- Light theme: `[data-theme="light"]`

### Add Images
Place images in the same folder as `index.html` and reference them in the HTML.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

© 2026 Muhammad Ubaidillah Sriyudi. All rights reserved.
