# Sahil Tarnekar - Portfolio Documentation

This document outlines the architecture, folder structure, and the purpose of each key file in this MERN Stack Developer Portfolio project. The project is built using **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 📂 Root Directory Structure

- **`index.html`**: The main HTML file serving as the entry point. It contains global Google Fonts imports (`Space Grotesk`, `Inter`), the page title, and the root `div` where the React app mounts.
- **`package.json`**: Lists all the project dependencies (React, framer-motion, react-router-dom, lenis, tsparticles, etc.) and scripts (dev, build, lint).
- **`vite.config.js`**: Configuration file for the Vite bundler, ensuring fast local development and optimized production builds.
- **`PROJECT_DOCUMENTATION.md`**: This file, explaining the architecture and contents of the codebase.

---

## 📂 `/src` Directory Structure
The `src` folder is where the entire application logic and UI lives. It is highly modularized for maintainability.

### 📝 Core Files
- **`main.jsx`**: The React entry point. It imports `index.css` and renders the `App.jsx` component into the DOM.
- **`App.jsx`**: The central application component. It handles the routing wrapper (`BrowserRouter`), initializes global smooth scrolling (`Lenis`), sets up the `CustomCursor`, and defines the main page routes (`/` and `/project/:id`).
- **`index.css`**: Contains global Tailwind imports, CSS variables defining the premium dark theme (cyan/purple palettes), and custom utility classes like `.mask-image-fade` and `.animate-float`.

### 📂 `/pages`
Contains the top-level route views.
- **`Home.jsx`**: The main landing page. It acts as a container that imports and stacks all the individual sections (Hero, About, Skills, Projects, Contact) vertically.
- **`ProjectDetail.jsx`**: A dynamic detail page that renders when a user clicks on a specific project. It fetches the project data by ID and displays full details, tech stack, and images.

### 📂 `/sections`
Contains the large, distinct "blocks" that make up the Home page.
- **`Hero.jsx`**: The top section of the website. Features a split layout with bold typography on the left and a glowing Lottie developer animation on the right.
- **`About.jsx`**: Uses a modern "Bento Box" grid layout to display a short bio, experience stats, and quick facts in an aesthetically pleasing way.
- **`Skills.jsx`**: The technical arsenal section. Features two infinite scrolling marquees of skill pills that turn from grayscale to color upon hovering.
- **`Projects.jsx`**: Displays a grid of project cards. Clicking a card navigates the user to the `ProjectDetail` page.
- **`Contact.jsx`**: The footer contact section featuring an EmailJS form with modern floating labels and glowing neon focus states.

### 📂 `/components`
Contains smaller, reusable React components broken down by category.

#### 📁 `/layout`
- **`Navbar.jsx`**: The top navigation bar. It is transparent and full-width, gaining a subtle blur effect as the user scrolls down the page.
- **`Footer.jsx`**: The bottom branding and copyright footer.

#### 📁 `/ui`
- **`CustomCursor.jsx`**: Replaces the default mouse pointer with an animated cyan dot and purple trailing ring using Framer Motion physics.
- **`SectionHeader.jsx`**: A reusable component used to render consistent, styled titles at the top of every section (e.g., "Tech Stack", "Contact").

#### 📁 `/common`
- **`Container.jsx`**: A utility wrapper component that ensures consistent max-width padding across all sections so the UI aligns perfectly on wide screens.

#### 📁 `/effects`
- **`ParticlesBg.jsx`**: Initializes the interactive `@tsparticles/react` background seen in the Hero section, rendering floating glowing orbs that react to mouse hover.

#### 📁 `/utils`
- **`ScrollToTop.jsx`**: A routing utility that listens for URL path changes and instantly scrolls the window back to the top (crucial for navigating between the Home and Project Detail pages).

### 📂 `/data`
- **`projects.js`**: A centralized JavaScript file containing an array of project objects. This acts as a mock database so project details can easily be updated in one place.

### 📂 `/animations`
- **`fadeUp.js`**: Contains reusable Framer Motion variants (objects dictating animation states). Used widely across the app so elements elegantly fade and slide up as you scroll.
