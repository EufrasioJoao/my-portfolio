# Personal Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern UI Design
- 📱 Fully Responsive
- 🌐 Multi-language Support (English, Portuguese)
- 🌙 Light & Dark Mode Support (can be enabled)
- 🚀 Fast Performance
- 🧩 Modular Components
- 📝 Contact Form

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone this repository:

```bash
git clone https://github.com/EufrasioJoao/portfolio.git
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

1. Update your personal information in the following files:
   - `src/app/layout.tsx`: Update metadata (title, description, keywords)
   - `src/app/page.tsx`: Update content in each section
   - `src/components/layout/Footer.tsx`: Update social links and contact information

### Images

1. Replace the placeholder images in the `public` folder:
   - `profile.jpg`: Your profile picture for the hero section
   - `about.jpg`: Image for the about section
   - `project1.jpg`, `project2.jpg`, `project3.jpg`: Project screenshots

### Languages

1. Update translations in `src/context/LanguageContext.tsx` if you want to modify the text.

## Deployment

This portfolio is ready to be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/EufrasioJoao/portfolio)

Alternatively, you can deploy to any other hosting provider that supports Next.js applications.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide Icons](https://lucide.dev/) - Icons

## License

This project is licensed under the MIT License - see the LICENSE file for details.
