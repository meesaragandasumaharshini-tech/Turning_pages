import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "turning_pages",
  password: "qwertasdfg",
  port: 5432,
});
db.connect();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// --- Home page ---
app.get("/", async (req, res) => {
  const { search, sort } = req.query;

  if (search || sort) {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (sort) params.set("sort", sort);
    return res.redirect(`/books?${params.toString()}`);
  }

  const result = await db.query(
    "SELECT * FROM books ORDER BY id DESC LIMIT 5"
  );
  res.render("index", { latestBooks: result.rows });
});

// --- All books page (with search + sort) ---
app.get("/books", async (req, res) => {
  const { search, sort } = req.query;

  let query = "SELECT * FROM books";
  const params = [];
  const conditions = [];

  if (search) {
    params.push(`%${search.toLowerCase()}%`);
    conditions.push(
      `(LOWER(title) LIKE $${params.length} OR LOWER(author) LIKE $${params.length} OR LOWER(genre) LIKE $${params.length})`
    );
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  const sortOptions = {
    title: "title ASC",
    genre: "genre ASC",
    rating: "rating DESC",
  };

  query += sortOptions[sort] ? ` ORDER BY ${sortOptions[sort]}` : " ORDER BY id DESC";

  const result = await db.query(query, params);
  res.render("books", { books: result.rows });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});