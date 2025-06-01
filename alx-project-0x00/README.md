This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.


# 🏡 Airbnb Application Clone - Setup (alx-project-0x00)

Welcome to the first milestone of building an **Airbnb Clone** using **Next.js**. This phase is focused on project structure and simple routing using the **Pages Router**.

---

## 1️⃣ Task 0 - Setting Up Project Directories

### 🎯 Objective
Understand how to organize folders and prepare your app for scalable development using the **Pages Router** in Next.js.

### 🛠️ Instructions

✅ From the root directory, create two important folders:
components/
interfaces/

bash
Copy code

✅ Open the file `pages/index.tsx`, and convert the existing named function to an arrow function. Move the `export` statement to the end of the file:

```tsx
const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
        Get Started
      </button>
    </main>
  );
};

export default Home;
✅ Create the following empty files:

interfaces/index.ts

components/Card.tsx

components/Pill.tsx

✅ Run the development server:

bash
Copy code
npm run dev -- -p 3000
✅ Open your browser and go to: http://localhost:3000

2️⃣ Task 1 - Simple Routing with Pages Router
🎯 Objective
Learn how routing works in Next.js using the Pages Router, without any manual configuration.

🛠️ Instructions
✅ Create two new files in the pages/ directory:

bash
Copy code
pages/landing.tsx
pages/about.tsx
✅ Add the following content to landing.tsx:

tsx
Copy code
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
    </div>
  );
};

export default Landing;
✅ Add the following content to about.tsx:

tsx
Copy code
const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">About Page</h1>
    </div>
  );
};

export default About;
✅ Start the development server again (if not running):

bash
Copy code
npm run dev -- -p 3000
✅ Test the routes in your browser:

http://localhost:3000/landing

http://localhost:3000/about

📂 Directory Structure (So Far)
pgsql
Copy code
alx-project-0x00/
├── components/
│   ├── Card.tsx
│   └── Pill.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── index.tsx
│   ├── about.tsx
│   ├── landing.tsx
│   └── api/
├── public/
├── styles/
└── README.md
🧠 Notes
We're using the Pages Router, not the App Router, to keep things simple and beginner-friendly.

Styling is handled by Tailwind CSS.

File-based routing in Next.js allows automatic route creation from pages/ files.

🔗 Repository
GitHub: alx-project-0x00-setup

Project Directory: alx-project-0x00

Project developed by Abdelmounaim El Harba for ALX.

yaml
Copy code
