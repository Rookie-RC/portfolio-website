# Modern Minimalist Portfolio Website

A stunning, modern portfolio website built with React, Tailwind CSS, and Framer Motion. Features glassmorphism design, dark/light mode, smooth animations, and is fully responsive.

## 🌟 Features

- **Modern Design**: Clean, minimalist design with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **Interactive Elements**: 
  - Animated typing effect in hero section
  - Progress bars for skills
  - Hover effects on projects
  - Timeline for experience
  - Form validation for contact form
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized for fast loading and smooth performance

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Hook Form** - Form validation
- **React Icons** - Icon library
- **typewriter-effect** - Animated typing effect

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rookie-RC/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Automatic Deployment**
   - Every push to the `main` branch will trigger automatic deployment
   - Your site will be available at `https://Rookie-RC.github.io/portfolio-website`

### Manual Deployment

For manual deployment to other platforms:

```bash
npm run build
npm run preview  # Preview the build locally
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero.jsx** - Name, titles, and introduction
2. **src/components/About.jsx** - About section content
3. **src/components/Skills.jsx** - Your skills and proficiency levels
4. **src/components/Projects.jsx** - Your projects and portfolio items
5. **src/components/Experience.jsx** - Work experience and education
6. **src/components/Contact.jsx** - Contact information
7. **index.html** - Meta tags, title, and SEO information

### Styling

- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update font imports in `index.html` and `tailwind.config.js`
- **Animations**: Customize animations in individual components or `src/index.css`

### Base URL for GitHub Pages

Update the `base` property in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',  // Change this to your repo name
  build: {
    outDir: 'dist',
  },
})
```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── assets/
│   │   ├── og-image.svg
│   │   └──wangyu_CV.pdf
│   ├──apple-touch-icon.png
│   ├──favicon-96x96.png
│   ├──favicon.ico
│   ├──favicon.svg
│   ├──site.webmanifest
│   ├──web-app-manifest-192x192.png
│   └──web-app-manifest-512x512.png
│ 
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── TypewriterEffect.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Sections Overview

1. **Hero Section**: Animated introduction with typewriter effect
2. **About**: Personal information and key highlights
3. **Skills**: Interactive skill bars with categorized technologies
4. **Projects**: Portfolio showcase with filtering and hover effects
5. **Experience**: Professional timeline with achievements
6. **Contact**: Contact form with validation and social links
7. **Footer**: Additional links and information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run predeploy` - Build for deployment
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

## 📞 Support

If you have any questions or need help with setup, please open an issue on the GitHub repository.

---

⭐ Don't forget to star this repository if you found it helpful!
