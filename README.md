# 📚 Turning Pages

![Node.js](https://img.shields.io/badge/Node.js-22-green)
![Express.js](https://img.shields.io/badge/Express.js-Backend-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Render](https://img.shields.io/badge/Hosted%20on-Render-purple)
![License](https://img.shields.io/badge/License-Educational-orange)

Turning Pages is a full-stack personal digital bookshelf where I document the books I've read, share my ratings, and write personal reviews. Visitors can explore my collection, search by title, author, or genre, and sort books alphabetically or by rating. This project was built as part of my web development capstone project using Node.js, Express, EJS, PostgreSQL, and the Open Library Covers API.

---

## 🌐 Live Demo

👉 https://turning-pages-ucok.onrender.com/

---

## 📂 GitHub Repository

👉 https://github.com/meesaragandasumaharshini-tech/Turning_pages

---

## 💡 Highlights

- 📚 Personal digital bookshelf
- ⭐ Rate books from 1–5
- 📝 Personal reviews and notes
- 🔍 Search books by title, author, or genre
- 🔤 Sort books alphabetically (A–Z)
- ⭐ Sort books by rating
- 🖼️ Dynamic book cover images using the Open Library Covers API
- 🗄️ PostgreSQL database integration
- ⚡ Server-side rendering with EJS
- 📱 Responsive design
- 👀 Visitors can browse all books and view notes
- 🔒 Book data is managed only by the owner through the database

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- EJS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### Libraries
- Axios
- body-parser

### API
- Open Library Covers API

### Deployment
- Render
- Render PostgreSQL

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](screenshots/home-page.png)

The landing page introduces the website, provides search and sorting options, and showcases the latest books in the collection.

---

### 📚 Books Page

![Books Page](screenshots/books-page.png)

Displays the complete collection with book covers, author, genre, ratings, and personal notes.

---

## 📂 Project Structure

```text
turning_pages/
│
├── public/
│   └── styles/
│       └── main.css
│
├── screenshots/
│   ├── home-page.png
│   └── books-page.png
│
├── views/
│   ├── index.ejs
│   └── books.ejs
│
├── index.js
├── package.json
├── package-lock.json
├── .env.example
└── README.md
```

---

## 🚀 Installation

Clone the repository.

```bash
git clone https://github.com/meesaragandasumaharshini-tech/Turning_pages.git
```

Move into the project folder.

```bash
cd Turning_pages
```

Install dependencies.

```bash
npm install
```

Create a `.env` file in the project root.

```env
DATABASE_URL=your_database_url
```

Start the application.

```bash
npm start
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🗄️ Database Schema

```sql
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) NOT NULL,
    author VARCHAR(225),
    genre VARCHAR(100),
    rating NUMERIC,
    notes TEXT,
    cover_id VARCHAR(20)
);
```

---

## 📖 Open Library Covers API

This project uses the **Open Library Covers API** to automatically display book cover images based on each book's Open Library Cover ID.

Example:

```
https://covers.openlibrary.org/b/olid/OL7353617M.jpg
```

---

## ☁️ Deployment

- **Frontend & Backend:** Render
- **Database:** Render PostgreSQL

---

## 🎯 Future Improvements

- User authentication
- Genre filtering
- Pagination
- Reading statistics dashboard
- Reading wishlist
- Favorite books section
- Dark mode
- Admin dashboard for managing books

---

## 👩‍💻 Author

**Suma Harshini**

- GitHub: https://github.com/meesaragandasumaharshini-tech
- LinkedIn: https://www.linkedin.com/in/suma-harshini-meesaraganda-b527b7293/
- Instagram: https://www.instagram.com/suma._m_/

---

## 📄 License

This project was created for educational purposes as part of my web development capstone project.
