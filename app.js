const express = require("espress");
const { allowedNodeEnvironmentFlags } = require("process");

// express app
const app = express();

//register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render();
});

//error
app.use((req, res) => {
  res.status(404).render("404");
});
