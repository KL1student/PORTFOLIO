# Shivanandh Portfolio

A personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Requirements

- Node.js 20.9 or newer (required by Next.js 16)
- npm

## Setup

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact form email delivery

The contact form sends submissions through Formspree to the recipient configured for your Formspree form.

1. Create a form in Formspree and set its recipient to `shivanandhv4@gmail.com`.
2. Copy the form endpoint and add it to the root `.env.local` file:

	```env
	NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
	```

3. Restart the development server. For deployment, add the same variable in your hosting provider's environment settings and rebuild/redeploy.

The direct email, phone, GitHub, and LinkedIn links are available as alternatives. Do not commit `.env.local`.

## Available commands

```bash
npm run dev      # Start the development server
npm run lint     # Check the code with ESLint
npm run build    # Create a production build
npm run start    # Serve the production build
```

To run the production version locally:

```bash
npm run build
npm run start
```

## Project structure

- `src/app/` - Next.js routes and page layouts
- `src/components/` - Reusable UI components
- `src/data/` - Portfolio content and project data
- `src/styles/` - Global styles
- `src/types/` - Shared TypeScript types
