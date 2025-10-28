# Kalana Eshan Dharmarathne - Portfolio

A modern, animated, and vibrant portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark mode friendly with vibrant accent colors (neon blues, purples, and gradients)
- **Smooth Animations**: Micro-interactions and transitions using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: 
  - Typing animation in hero section
  - Animated skill progress bars
  - Project modals with detailed information
  - Lightbox gallery for cricket photos
  - Interactive contact form
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Friendly**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)
- **Theme**: next-themes for dark/light mode support

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Gallery.tsx
│   │   ├── Certifications.tsx
│   │   ├── Academics.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── data/                   # Data configuration files
│   ├── projects.ts
│   ├── skills.ts
│   ├── achievements.ts
│   ├── certifications.ts
│   └── academics.ts
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
    ├── gallery/            # Cricket photos
    ├── projects/           # Project images
    └── certifications/     # Certificate images
```

## 🎨 Sections

1. **Hero**: Introduction with typing animation and glow effects
2. **About**: Personal journey and education timeline
3. **Skills**: Interactive skill badges with proficiency levels
4. **Projects**: Showcase of university and personal projects
5. **Achievements**: Hacktoberfest 2025 badges and other accomplishments
6. **Gallery**: Cricket photos with lightbox functionality
7. **Certifications**: Professional and academic credentials
8. **Academics**: Academic performance and module details
9. **Contact**: Contact form and social links
10. **Footer**: Additional links and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Adding Your Own Content

1. **Projects**: Edit `data/projects.ts` to add your projects
2. **Skills**: Update `data/skills.ts` with your technical skills
3. **Achievements**: Modify `data/achievements.ts` for your accomplishments
4. **Certifications**: Add your credentials in `data/certifications.ts`
5. **Academic Data**: Update `data/academics.ts` with your academic information

### Images

- Add your profile photo as `/public/me.png`
- Add cricket photos to `/public/gallery/`
- Add project images to `/public/projects/`
- Add certificate images to `/public/certifications/`

### Styling

- Modify `app/globals.css` for global styles
- Update Tailwind classes in components for custom styling
- Adjust color schemes in the CSS variables

## 🎯 Performance

- **Lighthouse Score**: Optimized for 90+ performance score
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Font Optimization**: Google Fonts with display: swap

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all screen sizes

## 🌟 Key Features

### Animations
- Scroll-based reveal animations
- Hover effects and micro-interactions
- Particle background effects
- Smooth page transitions

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios

### SEO
- Meta tags and Open Graph data
- Structured data markup
- Sitemap generation
- Performance optimization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: kalanaeshan07@gmail.com
- **GitHub**: [@Kaleshi26](https://github.com/Kaleshi26)
- **LinkedIn**: [Kalana Dharmarathne](https://www.linkedin.com/in/kalana-dharmarathne-346a48312/)

---

Made with ❤️ by Kalana Eshan Dharmarathne