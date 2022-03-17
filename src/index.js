const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3001;
const route = require("./routes/index");
app.use(express.static("./src/public"));
// HTTP logger
app.use(morgan("combined"));
// template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
