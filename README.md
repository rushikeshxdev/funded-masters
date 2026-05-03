<div align="center">

<img src="./public/images/logos/Navbar-logo.png" width="120" alt="Funded Masters Logo" />

# 🏆 FUNDED MASTERS
### The Premier Prop-Firm Platform for Elite Traders

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

---

**Empowering talent with institutional capital. Precision engineered for high-performance trading.**

[Explore the Platform](http://localhost:3000) • [Start a Challenge](http://localhost:3000/auth/register) • [Trader Login](http://localhost:3000/auth/login)

</div>

## 🌌 The Vision
Funded Masters isn't just another prop-firm; it's a **state-of-the-art trading ecosystem**. We provide the infrastructure, security, and capital that allows traders to focus on what they do best: *mastering the markets.*

## ✨ High-End Features

| Feature | Description |
| :--- | :--- |
| 💎 **Ultra-High Fidelity** | Pixel-perfect implementation of premium Figma designs. |
| 🔐 **Elite Security** | Enterprise-grade Auth via Supabase with real-time session management. |
| 📊 **Pro Dashboard** | Advanced account tracking, profit metrics, and challenge status. |
| ⚡ **Zero Latency** | Optimized with Next.js Server Components for lightning-fast performance. |
| 📱 **Adaptive Layout** | A seamless experience across mobile, tablet, and ultra-wide displays. |

## 🛠️ Tech Stack Architecture

### **Core Infrastructure**
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (Custom Dark Theme)
- **Animations**: Framer Motion (Micro-interactions & Smooth Transitions)

### **Backend & Data**
- **Backend-as-a-Service**: Supabase
- **ORM**: Prisma 6 (Stable)
- **Database**: Managed PostgreSQL
- **Security**: JWT & Cookie-based sessions

## 🏗️ System Flow

```mermaid
graph LR
    User((Trader)) -- Interaction --> UI[Next.js App]
    UI -- Auth --> Auth[Supabase Auth]
    UI -- Server Actions --> Prisma[Prisma ORM]
    Prisma -- Persistence --> DB[(PostgreSQL)]
    DB -- Sync --> Studio[Prisma Studio]
```

## 🚀 Quick Start

### 1️⃣ Clone & Install
```bash
git clone https://github.com/yourusername/funded-masters.git
cd funded-masters
npm install
```

### 2️⃣ Configure Secrets
Create a `.env` file based on `.env.example`:
```env
DATABASE_URL="your-postgresql-url"
NEXT_PUBLIC_SUPABASE_URL="your-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-key"
```

### 3️⃣ Initialize Engine
```bash
npx prisma generate
npx prisma db push
npm run dev
```

---

<div align="center">
  <p>Built with ❤️ by <b>Rushikesh Randive</b></p>
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" height="25" />
  <img src="https://forthebadge.com/images/badges/made-with-typescript.svg" height="25" />
</div>
