//newserver
let express = require('express');
let path = require('path');
// sets up the express pp nd grabs the port assigned by heroku
let app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//restaurant customers info
const reservation = [];

const waitList = [];

//routes 
app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/tables", function (req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
})


app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/api/reserve", function(req, res){
    return res.json(reservation)

})

// Make a app.post method that takes in the reservation and makes a table
/* app.post()
 */

app.post("/", function (req, res) {
    console.log("We hit the reservation  route", req.body)
})


app.listen(PORT, function (){
    console.log("listening to port"+PORT)
})