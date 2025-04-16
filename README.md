# Bolt Design Portfolio

A modern, interactive portfolio website built with React, Three.js, and Tailwind CSS. Features a dynamic 3D hero section, case studies, and a responsive design.

<!-- ![Bolt Design Portfolio](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000) -->

## Features

- 🎨 Interactive 3D hero section with Three.js
- 📱 Fully responsive design
- 💼 Detailed case studies with modular components
- 🎯 Modern UI with shadcn/ui components
- 🚀 Built with Vite for optimal performance
- 🎭 Beautiful animations and transitions
- 🔄 Design system demo showcasing Figma → shadcn/ui workflow

## Case Studies

The portfolio includes detailed case studies with modular components:

- `FlexColumnSection`: Flexible content sections with support for HTML content, images, and captions
- `GridLayoutSection`: Grid-based layouts for instruction sections
- `ResourceSection`: Showcase external resources like GitHub repos and Figma files

## Design System Demo

Explore a simplified workflow for exporting design tokens from Figma to shadcn/ui and TailwindCSS:

- Figma variables to JSON export
- Style Dictionary integration
- Custom theme implementation
- Live component previews

## Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bolt-design-portfolio.git
cd bolt-design-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── case-study/   # Case study specific components
│   ├── ui/           # shadcn/ui components
│   └── design-system/# Design system demo components
├── pages/            # Page components
├── data/            # Data and type definitions
├── lib/             # Utility functions
└── hooks/           # Custom React hooks
```

## Technologies Used

- React 18
- Vite
- Three.js
- Tailwind CSS
- shadcn/ui
- TypeScript
- React Router
- Style Dictionary

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.