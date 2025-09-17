# Somnia Builder

Somnia Builder is a builder platform for the **Somnia ecosystem**.  
This project consists of a frontend (client) and backend (server), designed to create and manage DeFi/AI experiences on Somnia.

🌐 Live Demo: [Somnia Builder](https://54639645d495484ab72aa3f38894896d-a627e54754754a27ba13f0e45.fly.dev)

---

## ✨ Features
- **Frontend (Client):** React + Vite + Tailwind-based UI.
- **Backend (Server):** Node.js/TypeScript REST APIs.
- **Shared Module:** Utilities and types used across services.
- **Serverless Ready:** Netlify functions support.
- **Deployment Ready:** Configurations for Fly.io and Netlify hosting.

---

## 📂 Project Structure
.
├── client/ # Frontend (React, Tailwind, Vite)
├── server/ # Backend (Node/TypeScript APIs)
├── shared/ # Shared utilities & types
├── public/ # Static assets
├── netlify/ # Netlify serverless functions
├── package.json # Project dependencies
├── vite.config.ts # Vite configuration
└── tailwind.config.ts



---

## 🛠️ Tech Stack
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Fly.io](https://fly.io/) for deployment
- [Netlify Functions](https://docs.netlify.com/functions/overview/) for serverless APIs

---

## ⚙️ Getting Started

Clone the repository:
```bash
git clone https://github.com/Ethaga/somnia-builder.git
cd somnia-builder

Install dependencies:
npm install
# or
pnpm install

Run the frontend (client):
cd client
npm run dev

Run the backend (server):
cd server
npm run dev

The app will be available at:
👉 http://localhost:5173 (default Vite port)

Deployment
Fly.io
Login:
fly auth login
Deploy:
fly launch

Netlify
Deploy serverless functions with:
netlify deploy

🎯 Hackathon Relevance

This project is built for the Somnia DeFi Mini Hackathon:

✅ Public GitHub repo with active commits
✅ Detailed README & documentation
✅ Frontend + backend + live demo
✅ Ready-to-deploy infrastructure
The goal is to empower builders in the Somnia ecosystem with a flexible, DeFi-ready builder platform.






