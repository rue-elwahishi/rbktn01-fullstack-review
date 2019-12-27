const express = require("express");
const bodyParser = require("body-parser");
const repo = require("../database/index.js");
let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", async function(req, res) {
   var username = req.body.username;
   db.findRepo(username)
   .then((data) => {
     return new Promise ((resolve, reject) => {
       if(data.length === 0){
         resolve(data)
       } else {
         res.send(data)
       }
     })
   }
  });
 .then((data) => {
   return helper.getRepoByUsername(username)
 })
 .then((repos)=> {
   return db.saveAll(repos);
 })
 .then((repos)=> {
   res.send(repos.ops);
 })
 .catch((err) => {
   console.log('err', err)
 })
});

// TODO - your code here!
// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database

app.get("/repos", function(req, res) {
  db.findRepo()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log("get data err", err);
      res.send([]);
    });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
