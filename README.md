<div align="center">
  <h2>🎓 Premium Academic Portfolio</h2>
  
  <p>
    <strong>A sophisticated, bilingual portfolio template designed specifically for academics, researchers, and educators.</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-11.x-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>
</div>

---

## ✨ Key Features

- **🌐 Bilingual Support:** Seamlessly switch between English and Turkish (or extending to any two languages) via a centralized data structure.
- **🌓 Dark/Light Mode:** First-class aesthetic dark mode support that respects system preferences and allows manual toggling.
- **📊 Animated Statistics:** Beautiful counter animations highlighting years of experience, publications, programs, and graduate numbers.
- **📄 Native PDF Viewer:** Integrated `react-pdf` for previewing academic papers, journals, and curriculum vitae directly inside the browser.
- **📝 Markdown Blog & Notes:** Share insights, presentation notes, and short articles using Markdown, beautifully rendered with `react-markdown`.
- **🏆 Academic Showcases:** Purpose-built UI sections for Courses Taught, Awards & Honors, and Conference Talks & Media appearances.
- **🎨 Premium Animations:** Cinematic scroll animations, staggered entries, and micro-interactions powered by Framer Motion.
- **🖥️ Responsive Excellence:** Flawless layout execution across all device sizes—from ultrawide monitors to mobile phones.

---

## 🛠️ Tech Stack

- **Core Framework:** React 18, TypeScript
- **Build System:** Vite
- **Styling:** Tailwind CSS (with custom utility integrations)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Document Handling:** React-PDF (pdf.js)
- **Content Rendering:** React Markdown
- **Routing:** React Router DOM

---

## 🚀 Getting Started

Follow these instructions to get your portfolio up and running locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/academic-portfolio.git
   cd academic-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
├── src/
│   ├── components/         # Reusable UI components (QuantumScene, Diagrams, etc.)
│   ├── App.tsx             # Main application layout, routing, and UI sections
│   ├── data.ts             # 🗄️ Single Source of Truth for all portfolio content
│   ├── index.css           # Global typography, CSS variables, and Tailwind imports
│   ├── index.tsx           # React bootstrap entry point
│   ├── types.ts            # Global TypeScript interface definitions
│   └── vite-env.d.ts       
├── public/                 # Static assets (PDFs, standalone images, favicons)
├── package.json            # Dependencies and npm scripts
└── tsconfig.json           # TypeScript configuration
```

---

## ✏️ Customization (Data Management)

This portfolio is uniquely designed to be easily updatable **without having to touch the complex UI or animation code**. All content is centralized in the `src/data.ts` file.

To update your information, simply open `src/data.ts` and modify the structured objects:

```typescript
export const data = {
  header: { ... },
  hero: {
    title: { tr: "Adınız Soyadınız", en: "Your Full Name" },
    subtitle: { tr: "Uzmanlık Alanı", en: "Specialization" }
  },
  stats: { ... },     // Update your animated counters here
  about: { ... },     // Update your bio and CV download link
  teaching: { ... },  // List your taught courses
  awards: { ... },    // Add your academic honors
  talks: { ... },     // List your conferences and symposiums
  projects: { ... },  // Add publications & PDF reading links
  blog: { ... },      // Write markdown posts and notes
  // ...
};
```

### Adding a new publication PDF
Place your PDF file in the `public/` directory (e.g., `public/article-1.pdf`), and reference it in `data.ts` inside the `projects` array as `pdfUrl: "/article-1.pdf"`.

### Adding your CV
Place your CV PDF in the `public/` directory (e.g., `public/cv.pdf`), and reference it in `data.ts` inside the `about` object as `cvUrl: "/cv.pdf"`.

---

## 📜 License

This project is licensed under the MIT License. You are free to modify and adapt it for your personal academic use.

---
<div align="center">
  <i>Crafted with precision for the academic and scientific community.</i>
</div>
