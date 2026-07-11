# 📚 Turning Pages

Turning Pages is a personal digital bookshelf where I share the books I've read along with my ratings, reviews, and notes. Visitors can browse my collection, search for books, and sort them by title or rating. Only I manage the book collection, making it a personal reading journal.

---

## ✨ Features

- 📖 Personal digital bookshelf
- ⭐ Rate books from 1–5
- 📝 Personal reviews and notes
- 🔍 Search books by title
- 📚 Sort books alphabetically (A–Z)
- ⭐ Sort books by rating
- 🖼️ Book cover images using the Open Library Covers API
- 📱 Responsive design
- 👀 Visitors can only view books
- 🔒 CRUD operations are restricted to the admin

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- EJS
- PostgreSQL
- Axios
- Open Library Covers API

---

## 📂 Project Structure

```
turning_pages/
│
├── public/
│   └── styles/
│       └── main.css
│
├── views/
│   ├── index.ejs
│   └── books.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📸 Screens

### Home Page
- Hero section
- Search bar
- Sort options
- Latest Read Books
- All Books button

### Books Page
- Complete collection of books
- Cover image
- Author
- Genre
- Rating
- Notes section

---

## 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Go into the project folder

```bash
cd turning_pages
```

Install dependencies

```bash
npm install
```

Start the server

```bash
node index.js
```

Open your browser

```
http://localhost:3000
```

---

## 🗄️ Database

The project uses PostgreSQL.

Example table:

```sql
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT,
    rating NUMERIC(2,1),
    notes TEXT,
    cover_id TEXT,
    date_read DATE
);
```

---

## 📖 API

Book cover images are fetched using the Open Library Covers API.

Example:

```
https://covers.openlibrary.org/b/olid/OL7353617M.jpg
```

---

## 🎯 Future Improvements

- User authentication
- Dark mode
- Pagination
- Filter by genre
- Reading statistics
- Favorite books section
- Reading wishlist

---

## 👩‍💻 Author

**Suma Harshini**

LinkedIn:
https://www.linkedin.com/in/suma-harshini-meesaraganda-b527b7293/

Instagram:
https://www.instagram.com/suma._m_/

---

## 📄 License

This project was created for educational purposes as part of a web development capstone project.