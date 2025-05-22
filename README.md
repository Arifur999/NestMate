# 🏠 NestMate - Roommate Finder Platform

NestMate is a full-stack web application that helps users find compatible roommates based on location, lifestyle, rent preferences, and interests. The platform supports user registration, login, listing creation, and real-time interaction via protected routes and dynamic content.

🔗 **Live Site:** [https://nestmate-d0439.web.app/]

---

## 🚀 Features

- 🔒 **Authentication System**  
  Secure login and registration using email/password and Google sign-in. Form validation with toast feedback included.

- 🛡️ **Protected Routes with Role-Based Access**  
  Private pages like “Add to Find Roommate,” “My Listings,” and “Details” are protected and redirect to login if the user is unauthenticated.

- 📝 **Complete CRUD Functionality**  
  Users can **create, update, and delete** roommate listings. Listings include title, rent, lifestyle preferences, and more.

- 🌟 **Interactive Home Page**  
  Features a dynamic banner slider, 6 featured roommate posts, and two meaningful sections — all styled for a modern experience.

- ❤️ **Like-to-Reveal Contact**  
  Users must click "Like" on a listing to see the contact number, with a counter showing how many people are interested.

- 🌗 **Dark/Light Theme Toggle**  
  Built-in theme switcher for improved accessibility and user preference.

- 📱 **Responsive Design**  
  Fully optimized for mobile, tablet, and desktop views.

- 🎨 **Smooth UI Enhancements**  
  Enhanced with Lottie animations, React Tooltip, and Awesome Reveal effects for a dynamic interface.

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, React Router DOM, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** Firebase Auth (email/password + Google)
- **Hosting:** Firebase (client), Vercel (server)
- **Animations:** Lottie, React-tooltip, React Awesome Reveal

---

## 📁 Folder Structure

- `/client` — React frontend
- `/server` — Express backend

---

## 🛠️ Getting Started

To run locally:

```bash

# Client
cd client
npm install
npm run dev

# Server
cd server
npm install
npm run start

