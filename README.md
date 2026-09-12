# Webivifam — Official Agency Website

A high-performance, modern digital agency web application built with **React 19**, **Vite**, **Tailwind CSS v4**, **GSAP**, and **WebGL**. Designed with sleek dark-mode aesthetics, fluid micro-interactions, and 3D graphics.

---

## ✨ Features

- **Futuristic Cosmic UI**: Tailored glassmorphism design with atmospheric blue/cyan ambient glows and rich typography.
- **Interactive 3D WebGL Globe**: Powered by `cobe` showcasing global client partnerships and reach.
- **3D Panoramic Logo Carousel**: Embla Carousel-powered 3D stage highlighting verified client brands and growth stories.
- **Wayfinding Scroll Indicator**: Dynamic side navigation tracking sections in real-time as users explore.
- **Client Testimonials & Services**: Interactive showcase for agency services, ecosystems, and founder reviews.
- **Smooth Inertia Scrolling**: Powered by `lenis` for smooth, native-feeling scroll behavior.
- **Contact & Lead Capture**: Integrated with EmailJS for direct client inquiries.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [GSAP](https://greensock.com/gsap/) & [ScrollTrigger](https://greensock.com/scrolltrigger/) |
| **3D Graphics** | [Cobe](https://github.com/shuding/cobe) (WebGL) |
| **Carousels** | [Embla Carousel React](https://www.embla-carousel.com/) + Autoplay |
| **Routing** | [React Router](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/webividmg-bit/Webivifam.git
cd Webivifam
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

---

## 🌐 Deployment

This project is ready to deploy on **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Vercel (Recommended)
Add a `vercel.json` in the root folder for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify
Ensure `public/_redirects` contains:
```text
/*    /index.html   200
```

---

## 📁 Project Structure

```text
├── public/               # Static assets (logos, videos, images)
│   ├── logos/            # Client partner logo graphics
│   └── Images/           # Backgrounds & profile assets
├── src/
│   ├── Components/
│   │   ├── Common/       # Navbar, Preloader, Layout components
│   │   ├── Graphics/     # Blueprint & visual graphics
│   │   ├── Landing/      # Modular landing page sections & carousels
│   │   └── ui/           # Reusable UI primitives (Carousel, etc.)
│   ├── Pages/            # Route pages (Landing, About, Services, Contact, Blogs)
│   ├── App.jsx           # Application routing & providers
│   └── main.jsx          # Entry point
├── package.json
└── vite.config.js
```

---

## 📄 License

Private repository &copy; Webivifam Agency. All rights reserved.
