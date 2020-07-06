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
const tables = [];

const waitList = [];

//routes 
app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/tables", function (req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reserve", function (req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/api/tables", function(req, res){
    
    for (let i = 0; i < tables.length; i++){
        return res.json(tables[i])
    }

})

app.get("/api/waitlist", function(req, res){
    for (let i = 0; i < waitList.length; i++){
        return res.json(waitList[i])
    }
})

app.post("/api/tables", function(req, res){
    if(tables.length> 3){

        app.post("/api/waitlist", function(req,res){
    
            let newWaitlist = newWaitlist.name.replace(/\s+/g, "").toLowerCase();
        
            waitList.push(newWaitlist);
        
            res.json(newWaitlist);
        
        })
    }
    else {
        let newTable = req.body;

        newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCsse();
    
        tables.push(newTable)
    
        res.json(newTable);
    }
})




app.listen(PORT, ( ) => {
    console.log('Listening on http://localhost:${PORT}')
});


//working
/* Backend Team:
Create the logic that handles reservation requests. Your code should work such that POST requests take in JSON objects, checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).
You should be using Postman to do all your testing at this point. */
