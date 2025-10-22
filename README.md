# Animated Dots Theme Toggle

A minimal, elegant website template featuring an animated floating dots background with automatic theme switching. Built with pure vanilla JavaScript and CSS.

![License](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![CSS](https://img.shields.io/badge/CSS-3-blue.svg)
![HTML](https://img.shields.io/badge/HTML-5-orange.svg)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen.svg)

## Live Demo

**[View Live Demo](https://davidalvarezp.github.io/animated-dots-theme-toggle/)**

Experience the animated particle background and theme switching in action!

## Features

- **Animated Particle Background** - Floating dots that connect and move gracefully
- **Automatic Theme Detection** - Adapts to your system's light/dark mode preference
- **Fully Responsive** - Works perfectly on all devices and screen sizes
- **Zero Dependencies** - Pure vanilla JavaScript and CSS
- **Smooth Animations** - CSS transitions and requestAnimationFrame for buttery smoothness
- **Minimal Design** - Clean, distraction-free interface

## Quick Start

### Method 1: Simple (Recommended)
1. **Download the files** - Clone or download this repository
2. **Open in your browser** - Simply open `index.html` in your web browser
3. **That's it!** No installation or dependencies needed

### Method 2: Local Server (Optional)
```bash
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js (if you have it)
npx http-server
```
Then visit http://localhost:8000 in your browser.

## Customization
### Colors
Edit the CSS custom properties in styles.css:

```css
:root {
  --bg-primary: #000000;
  --text-primary: #ffffff;
  --shadow-color: rgba(0, 0, 0, 0.5);
}

[data-theme="light"] {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
```

## Animation Settings
Modify the particle behavior in background.js:

```javascript
// Number of dots (fewer for mobile)
const dotCount = window.innerWidth < 768 ? 80 : 120;

// Dot movement speed
vx: (Math.random() - 0.5) * 0.5,
vy: (Math.random() - 0.5) * 0.5,

// Connection distance
if (dist < 10000) { // Adjust this value
```

## Button Styling
Customize the theme toggle button in styles.css:

```css
.theme-toggle {
  width: 80px;
  height: 80px;
  font-size: 2rem;
  /* Add your custom styles */
}
```

## Project Structure
```text
particletheme/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── theme.js            # Theme switching logic
├── background.js       # Particle animation system
├── LICENSE            # Creative Commons BY 4.0
└── README.md          # Project documentation
```

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License
This project is licensed under the Creative Commons Attribution 4.0 International License - see the LICENSE file for details.

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- Attribution — You must give appropriate credit to davidalvarezp, provide a link to the license, and indicate if changes were made.

## Author
davidalvarezp

- Website: [davidalvarezp.com](https://davidalvarezp.com)
- GitHub: [@davidalvarezp](https://github.com/davidalvarezp)

## Acknowledgments
- Google Fonts for the Inter typeface
- Creative Commons for the open license
- The web development community for inspiration

## If you find this project useful, please give it a star on GitHub!
