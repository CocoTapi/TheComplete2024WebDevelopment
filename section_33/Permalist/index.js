import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "password",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  // { id: 1, title: "Buy milk" },
  // { id: 2, title: "Finish homework" },
];

async function fetchItems() {
  const result = await db.query(
    "SELECT * FROM items"
  );
    
  result.rows.forEach((item) => {
    items.push(item);
  });

  console.log(items);
  return items;
}

app.get("/", async (req, res) => {
  const items = await fetchItems();

  res.render("index.ejs", {
    listTitle: items.title,
    listItems: items,
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", (req, res) => {});

app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
