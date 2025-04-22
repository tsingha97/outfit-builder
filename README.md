# 🫅 Outfit Builder

A drag-and-drop outfit builder built with **Next.js**, **React**, and **Tailwind CSS**. Users can assemble clothing items onto a canvas and build customized outfits.

---

## ✨ Features

- 🎨 **Interactive Outfit Canvas**  
  Drag clothing items onto a canvas to create your own outfit combination.

- 🧱 **Sidebar with Clothing Items**  
  A vertical sidebar listing clothing options like hats, shirts, pants, and shoes.

- 🛒 **Cart System**  
  Add outfits to a shopping cart and keep track of selected combinations.

- 💡 **Responsive Layout**  
  Optimized for both desktop and mobile devices using Tailwind's utility classes.

---

## 🚀 Installation

Make sure you have **Node.js** and **npm** (or `yarn`) installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/tsingha97/outfit-builder.git
   cd outfit-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## 💻 Running the App Locally

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## 📅 Additional Instructions

- All clothing icons are stored in the `/public/icons` folder. You can add or replace items by updating the files there.
- If images do not display correctly, ensure they are correctly named (e.g. `hat.png`, `shirt.png`) and used in the correct path: `/public/icons/`.
- You may customize the drag behavior or add saving features by extending the drag-and-drop logic in the `Canvas` component.

---

## 📦 Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
