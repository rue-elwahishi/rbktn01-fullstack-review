const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/ReposDB",
  {
    userNewUrlParser: true
  },
  err => {
    if (!err) {
      console.log("MongoDB Connected");
    } else {
      console.log("Error in DB connection" + err);
    }
  }
);

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("connected....");
// });

let repoSchema = mongoose.Schema({
  id: Number,
  userName: String,
  repoName: String,
  url:String

  }
});

let Repo = mongoose.model("Repo", repoSchema);

module.exports.save = (repo) => {
  return new promise((resolve, reject) => {
    var data = new Repo(repo)
    data.save(err, res) => {
      if(err) {
        reject(err)
      }
      else {
        resolve(res)
      }
    }
  })
};

module.exports.saveAll = (repos) => {
  return new Promise((resolve, reject) => {
    if(err){
      reject(err)
    } else {
      resolve(res)
    }
  })
}
 module.exports.findRepo = (userName) => {
   return Repo.find({userName: userName})
 }