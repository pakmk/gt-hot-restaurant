//newserver
let express = require("express");
let path = require("path");
// sets up the express pp nd grabs the port assigned by heroku
let app = express();
var PORT = /* process.env.PORT || */ 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//restaurant customers info
const tables = [];

const waitList = [];

//routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
  return res.json(waitList);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
