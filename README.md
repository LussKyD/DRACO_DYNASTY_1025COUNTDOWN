# DRACO DYNASTY Event Day Countdown

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A beautiful, interactive countdown website for DRACO DYNASTY's event day, featuring a three-stage user experience: countdown timer, registration system, and access portal to fashion and media departments.

## 🌟 Live Demo

[View Live Site](#) *(Add your InfinityFree URL here after deployment)*

## 📸 Screenshots

*Coming Soon - Add screenshots of your three main sections*

## ✨ Features

### 🕐 Dynamic Countdown Timer
- Real-time countdown to your event date
- Animated countdown cards with days, hours, minutes, and seconds
- Automatic transition when event day arrives

### 📝 Registration System
- Clean, user-friendly registration form
- Email validation
- Real-time form validation with error handling
- Success notifications

### 🎨 Access Portal
- Personalized welcome message
- Two department access cards:
  - **Fashion Department** - E-commerce integration ready
  - **Media Department** - Content upload platform ready
- Logout functionality

### 💫 Visual Experience
- Modern glassmorphism design
- Gradient animations
- Floating particle effects
- Fully responsive layout (mobile, tablet, desktop)
- Smooth transitions and hover effects

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, or any code editor)
- Basic knowledge of HTML/CSS/JavaScript (helpful but not required)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/draco-dynasty-countdown.git
   cd draco-dynasty-countdown
   ```

2. **Open the website**
   - Simply open `eventday_countdown_website.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Customize your event date**
   - Open the HTML file in your text editor
   - Find line 483: `const eventDate = new Date('2025-10-26T00:00:00').getTime();`
   - Change the date to your event date
   - Save and refresh your browser

## 📖 Documentation

- **[SETUP.md](SETUP.md)** - Detailed hosting instructions for GitHub Pages and InfinityFree
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - Complete guide to customizing colors, content, and features
- **[TECHNICAL.md](TECHNICAL.md)** - Technical documentation and code architecture
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Common issues and solutions
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Step-by-step deployment guide

## 🎨 Customization Quick Guide

### Change Event Date
```javascript
// Line 483 in the HTML file
const eventDate = new Date('2025-10-26T00:00:00').getTime();
// Format: 'YYYY-MM-DDTHH:MM:SS'
```

### Change Brand Colors
```css
/* Main gradient background - Line 14 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent colors - Line 62 */
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
```

### Update Company Name
```html
<!-- Line 399 - Header logo -->
<h1 class="logo">DRACO DYNASTY</h1>

<!-- Line 419 - Hero heading can be customized -->
<h1>Something Amazing is Coming</h1>
```

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed customization options.

## 🌐 Deployment

### GitHub Pages (Free)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/repo-name/`

### InfinityFree (Free)
1. Sign up at [InfinityFree](https://www.infinityfree.net/)
2. Create a new account
3. Upload files via File Manager or FTP
4. Access via your assigned subdomain

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 🛠️ Built With

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Interactivity and countdown logic
- **Font Awesome 6.0.0** - Icons

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Important Notes

### Data Storage
Currently, user registration data is stored in browser memory only (not persistent). For production use, you'll need to:
- Set up a backend server (Node.js, PHP, Python, etc.)
- Implement a database (MySQL, MongoDB, etc.)
- Add server-side validation and security

See [TECHNICAL.md](TECHNICAL.md) for backend integration guidance.

### Security Considerations
- The current version is for demonstration/testing purposes
- Do not use for collecting real user data without proper backend
- Add HTTPS/SSL certificate for production (free with Let's Encrypt)
- Implement CSRF protection and input sanitization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**DRACO DYNASTY**
- Website: [Your Website]
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Font Awesome for icons
- Inspiration from modern web design trends
- The web development community

## 📞 Support

If you have questions or need help:
- 📧 Email: support@dracodynasty.com
- 💬 [Open an issue](https://github.com/yourusername/repo-name/issues)
- 📖 Check the [documentation files](#-documentation)

## 🗺️ Roadmap

- [ ] Backend integration for data persistence
- [ ] Email notification system
- [ ] Social media sharing functionality
- [ ] Admin dashboard for managing registrations
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Integration with actual e-commerce and media platforms

---

**Made with ❤️ by DRACO DYNASTY** | *Daring Reality and Creating Opportunities*
