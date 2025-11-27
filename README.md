# Dance Academy - React Application

A modern, responsive single-page application for a dance academy built with React and Vite.

## Features

- **Fixed Header Navigation**: Smooth scrolling navigation that stays at the top
- **Landing Section**: Welcome message with dancer introduction and key features
- **Gallery Section**: Image gallery showcasing classes and achievements, plus video thumbnails
- **Classes & Timings**: Detailed information about different batches and schedules
- **Registration Section**: Placeholder for future registration form with contact information
- **Responsive Footer**: Links and copyright information

## Tech Stack

- React 19.2.0
- Vite 7.2.4
- Modern CSS with responsive design
- Smooth scroll behavior

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx/css      # Fixed navigation header
│   ├── Home.jsx/css        # Landing section
│   ├── Gallery.jsx/css     # Photo and video gallery
│   ├── Classes.jsx/css     # Class schedules and batches
│   ├── Registration.jsx/css # Registration placeholder
│   └── Footer.jsx/css      # Footer with links
├── App.jsx                 # Main app component
├── App.css                 # Global app styles
├── index.css               # Global CSS reset and base styles
└── main.jsx                # App entry point
```

## Customization

### Update Dancer Information
Edit `src/components/Home.jsx` to update the dancer's name and introduction text.

### Add Real Images
Replace the placeholder colors in `src/components/Gallery.jsx` with actual image URLs.

### Add YouTube Videos
Replace video placeholders with YouTube iframe embeds in `src/components/Gallery.jsx`.

### Update Class Timings
Modify the `classData` array in `src/components/Classes.jsx` to update schedules and pricing.

### Contact Information
Update contact details in `src/components/Registration.jsx`.

## Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Color Scheme

Primary gradient: Purple to violet (#667eea to #764ba2)

## License

All rights reserved © 2025 Dance Academy


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
