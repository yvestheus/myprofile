# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Yves Theus, a full-stack web and mobile developer. The site is a single-page application built with Bootstrap 5, Sass, and vanilla JavaScript, featuring a dark-light contrast design with a typewriter effect and lightbox modals for project galleries.

## Build Commands

### Installation
```bash
npm install
```

### Development Workflow
```bash
# Build CSS from Sass (one-time compilation)
npm run sass:build

# Watch Sass files for changes during development
npm run sass:watch

# Alternative: Use the 'build' script (alias for sass:build)
npm run build
```

## Architecture and Structure

### Styling System

The project uses a **custom Bootstrap 5 theme** with Sass compilation:

- **`scss/bootstrap.scss`**: Bootstrap customization file where theme variables are defined BEFORE importing Bootstrap. This is the correct place to override Bootstrap defaults.
  - Custom primary color: `#cc005f` (pink/magenta)
  - Custom secondary color: `#990047` (darker pink)
  - Font family: 'Poppins' sans-serif
  - Custom button styling with zero border-radius
  - Custom container max-widths and spacing scale

- **`scss/styles.scss`**: Custom component styles including header background overlays, image styling, hover effects, timeline vertical lines, and responsive media queries.

- **`scss/font-awesome.scss`**: Font Awesome icon imports.

**IMPORTANT**: Never edit Bootstrap variables in `node_modules/bootstrap/dist/scss/_variables.scss`. Always override them in `scss/bootstrap.scss` before the `@import` statement.

### File Organization

```
/
├── index.html          # Single-page portfolio site
├── scss/               # Sass source files
│   ├── bootstrap.scss  # Bootstrap variable overrides
│   ├── styles.scss     # Custom styles
│   └── font-awesome.scss
├── css/                # Compiled CSS output (generated, do not edit directly)
├── js/
│   ├── script.js       # Custom typewriter effect
│   └── *.min.js        # Third-party libraries (Bootstrap, Lightbox)
├── images/             # Portfolio images and assets
└── webfonts/           # Font Awesome webfonts

```

### Key Features

1. **Typewriter Effect** (`js/script.js`): Simple vanilla JavaScript implementation that types "I am Yves Theus." character by character on page load using `setTimeout` loops.

2. **Lightbox Gallery**: Uses the Lightbox2 library (loaded via CDN in `index.html`) for project image modals. Images use `data-lightbox="images"` attribute for grouping.

3. **Responsive Timeline**: Custom vertical timeline with `.vertical-line::after` pseudo-elements that hide on mobile (<767px) via media queries.

4. **Fixed Background**: Header uses `background-attachment: fixed` for parallax-style effect with dark overlay (`rgba(0, 0, 0, 0.7)`).

## Development Notes

### Modifying Styles

1. For Bootstrap theme changes (colors, spacing, container widths): Edit `scss/bootstrap.scss`
2. For custom component styles: Edit `scss/styles.scss`
3. After changes: Run `npm run sass:watch` (development) or `npm run sass:build` (production)

### Color Scheme

Primary brand color is pink/magenta (`#cc005f`). The site uses high contrast between dark backgrounds and light text, with the primary color as accent.

### Responsive Breakpoints

Uses standard Bootstrap 5 breakpoints. Key mobile breakpoint is `@media (max-width: 767px)` where:
- Social icons reduce size
- About section changes to column layout
- Timeline vertical lines are hidden
- Organization text centers

### Dependencies

- **Bootstrap 5.2.3**: Framework for layout and components
- **Sass 1.62.0**: CSS preprocessor
- **Font Awesome 6.4.0**: Icon library
- **Lightbox2**: Image gallery modals (CDN)
- **jQuery**: Required by Lightbox (CDN)
