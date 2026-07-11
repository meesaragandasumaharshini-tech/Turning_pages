import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Database Connection
const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

db.connect();

// Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// ---------------- HOME PAGE ----------------

app.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM books ORDER BY id DESC LIMIT 5"
    );

    res.render("index", {
      latestBooks: result.rows,
    });
  } catch (err) {
    console.log(err);
    res.send("Error loading homepage.");
  }
});

// ---------------- ALL BOOKS ----------------

app.get("/books", async (req, res) => {
  try {
    const { search = "", sort = "" } = req.query;

    let query = "SELECT * FROM books";
    const values = [];

    // Search
    if (search.trim() !== "") {
      values.push(`%${search.toLowerCase()}%`);

      query += `
      WHERE
      LOWER(title) LIKE $1
      OR LOWER(author) LIKE $1
      OR LOWER(genre) LIKE $1
      `;
    }

    // Sort
    switch (sort) {
      case "title":
        query += " ORDER BY title ASC";
        break;

      case "rating":
        query += " ORDER BY rating DESC";
        break;

      case "genre":
        query += " ORDER BY genre ASC";
        break;

      default:
        query += " ORDER BY id DESC";
    }

    const result = await db.query(query, values);

    res.render("books", {
      books: result.rows,
      search,
      sort,
    });
  } catch (err) {
    console.log(err);
    res.send("Error loading books.");
  }
});

// ---------------- START SERVER ----------------

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});