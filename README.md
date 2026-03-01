# Workspace Designer for monis.rent

🚀 **Live Demo**  
👉 http://vercel-sample

📦 **GitHub Repository**  
👉 https://github.com/username/repo-name

---

## Overview

An interactive workspace designer built for **monis.rent**, an equipment rental marketplace serving digital nomads and startups in Bali.

Instead of browsing a traditional product catalog, users can visually build their ideal workspace — selecting desks, chairs, monitors, lamps, and accessories — see their setup come to life, and rent it instantly.

This project was built as part of a **design-first coding challenge**, focusing on **user experience, product thinking, and interaction quality** rather than algorithms or backend complexity.

---

## 🎯 What This App Does

This is a visual, playful setup builder where users can:

- 👀 See their workspace take shape in real time
- 🛠️ Customize desks, chairs, and accessories visually
- 🔢 Adjust quantities (e.g. 2 chairs, 3 monitors)
- 💰 See accurate monthly pricing instantly
- 🚀 Click **“Rent Your Setup!”** when ready

Users don’t want spreadsheets or boring catalogs — they want to build something that _feels_ good to use.

---

## 🧠 Why This Approach

The goal of this challenge was not to over-engineer, but to think like a user.

A freelance developer landing in Bali doesn’t want to compare SKUs — they want to quickly design a workspace, feel confident about it, and move on.

This app focuses on:

- Clarity over complexity
- Visual feedback over raw data
- Product experience over technical showmanship

---

## ✨ Core Features

- **Category Navigation**  
  Browse Chairs, Desks, Accessories, or view everything via All Items

- **Visual Item Selection**  
  Click items to instantly add them to your workspace

- **Quantity Support**  
  Rent multiple units of the same item with intuitive controls

- **Live Summary Panel**  
  Review items, adjust quantities, and see total monthly cost in real time

- **Clean, Focused UI**  
  No unnecessary distractions — just the core rental flow

---

## 🧩 User Flow

1. Choose a category or browse all items
2. Click items to add them to the workspace
3. Adjust quantities directly from the summary panel
4. Review the setup and pricing
5. Click **“Rent Your Setup!”**

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context + `useReducer`
- **Data Source**: Static JSON (no backend for MVP)
- **Deployment**: Vercel

---

## 📁 Project Structure

```
src/
├── app/
│   └── page.tsx              # Main application page
├── components/
│   ├── NavCategories.tsx     # Category navigation (includes All Items)
│   ├── ItemCard.tsx          # Individual item cards
│   └── SummaryPanel.tsx      # Cart/summary with quantity controls
├── data/
│   ├── desks.json            # Desk items data
│   ├── chairs.json           # Chair items data
│   └── accessories.json      # Accessories data
└── utils/
    └── workspaceState.tsx    # State management with quantity support
```

---

## 🎨 Design Decisions & Trade-offs

### Key Decisions

- **Emoji Icons over Images**  
  Lightweight, instant loading, and playful — ideal for an MVP

- **Context + Reducer**  
  Chosen for clarity and predictability over heavier state libraries

- **Real-time Feedback**  
  Every interaction updates the UI immediately to keep users engaged

- **Simple Navigation**  
  Category tabs plus All Items for fast exploration

### Trade-offs

- No backend or authentication (intentional for scope)
- Limited item categories for MVP clarity
- Minimal animations to prioritize performance and clarity

These decisions were made to align with the challenge’s intent: **build something usable, not overbuilt**.

---

## 🚀 Deployment

This project is deployed on **Vercel** to ensure fast access, easy review, and a smooth demo experience.

---

## 🎯 Business Context

Built for **monis.rent**, a rental platform serving:

- Digital nomads
- Remote workers
- Startups needing flexible workspace setups

The app replaces traditional catalogs with:

- Visual decision-making
- Flexible rental quantities
- Clear, transparent pricing
- A more engaging rental experience

---

## 🔮 Possible Future Enhancements

- Saved workspace configurations
- 3D or canvas-based workspace preview
- Inventory & availability integration
- Checkout & payment flow
- Delivery scheduling
- Community-shared workspace templates

---

## ✅ What This Project Demonstrates

- User-centric product thinking
- Clean, maintainable frontend architecture
- Thoughtful UX and interaction design
- Clear understanding of scope and trade-offs
- Focus on **how the product feels**, not just how it works

---

_Built with care as a design-first frontend challenge._
