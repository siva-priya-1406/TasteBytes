# TasteBytes - Recipe Gallery Project

A Front-End Mini Lab project demonstrating responsive web design and DOM manipulation.

## 📌 Project Overview
TasteBytes is a simple recipe gallery that allows users to browse recipes, filter them by category (Breakfast, Lunch, Dinner), and toggle between Dark and Light display modes.

### 🛠 Technologies Used
- **HTML5**: Semantic tags for structure.
- **CSS3**: Variables, Flexbox, Grid, and Media Queries for layout.
- **JavaScript**: Basic DOM manipulation for interactivity.

---

## 📂 Folder Structure
```
/
├── index.html      # Main HTML structure
├── style.css       # Stylesheets (Grid, Flexbox, Theme variables)
├── script.js       # Logic (Theme toggle, Filtering)
└── README.md       # Documentation
```

---

## 💡 Key Features & Concepts

### 1. Semantic HTML5
We used tags like `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>` instead of just generic `<div>`s. This improves accessibility and SEO.

### 2. CSS Flexbox
Used in:
- **Header**: To space out the Logo and the Dark Mode button (`justify-content: space-between`).
- **Filter Controls**: To center the buttons and wrap them nicely on smaller screens (`justify-content: center`, `flex-wrap: wrap`).

### 3. CSS Grid
Used in:
- **Gallery Section**: To create a responsive grid of card items.
- Code: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`. This magical line automatically adjusts the number of columns based on the screen width!

### 4. Media Queries
Used to adjust styles for mobile devices, such as stacking the filter buttons vertically on very small screens.

### 5. JavaScript DOM Manipulation
- **Theme Toggle**: usage of `classList.toggle('dark-mode')` to switch CSS variables.
- **Filtering**:
  1. We verify which button was clicked using `getAttribute('data-filter')`.
  2. We Loop through all cards using `forEach`.
  3. We compare the card's `data-category` with the filter `filterValue`.
  4. We change `card.style.display` to 'block' or 'none'.

---

## 🚀 How to Run
1. Download all files to a folder.
2. Open `index.html` in any web browser (Chrome, Firefox, Edge).
3. Interact with the **Theme Toggle** and **Filter Buttons**.
