const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const path = require('path');


const port = process.env.PORT || 8888;


/* mongoose data base connection */

mongoose.connect('mongodb://localhost/gameAPI');
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log("Connection succeeded.");
});
var Schema = mongoose.Schema;
var GameUserSchema = new Schema({
    name: {type: String},
    email: {type: String}, 
    score: {type: Number},
    date: { type: Date, default: Date.now }
});
var GameUser = mongoose.model("GameUser", GameUserSchema);

// var gameUsers = new GameUser({
//     name: "yanicha nahor",
//     email: "yanincha@gmail.com",
//     score: 5 
// });

// gameUsers.save(function(error) {
//     console.log("Your bee has been saved!");
//      if (error) {
//     console.error(error);
//   }
// });


// let GameData = require('./models/gameDataModel');

// Middel 
const app = express();
// parse application/x-www-form-urlencoded

// app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));


const gameUserRouter =  express.Router();


gameUserRouter.route('/info') 
   .post(function(req, res){
     var gameUsers = new  GameUser({
        name: req.body.playername,
        email: req.body.playeremail,
        score : req.body.finlscore
    });
    //var gameUsers = new GameUser(req.body);
    //gameUsers.save();
    //console.log(req.body);
    //res.status(201).send(gameUsers);
   })

//    .get(function(req, res) {
//          GameUser.find(function(err, datas){
//          res.send(datas);
//      })
// })

// app.post('/info', function (req, res) {
//     var name = req.body.playername;
//     var email = req.body.playeremail;
// //    var score = req.body.finlscore;

// //   console.log('welcome, ' + name);
// //     console.log('email, ' + email);
//  console.log('scores, ' + name);
//   console.log('scores, ' + email);

//   console.log('scores, ' + req.body.finlscore);

// })

// gameUserRouter.route('/info/:id')
//     .get(function(req, res) {
//          GameUser.findById(req.params.id, function(err, user) {
//              if (err) { 
//                  res.status(500).send(error);
//              } else {
//                  res.status(200).json(user);
//              }
//          })
// })
     
     
    //    gameUsers.findById(req.params._id, function(err, user){
    //        if(err) {
    //            res.status(500).send(err);
    //        } else {
    //            res.json(user);
    //        }
    //    })
      //res.send('Here is api/datas ');
    


app.use('/api',  gameUserRouter );

// app.get('/', function(req, res) {
//      GameUser.find(function(err, datas){
//          res.send(datas);
//      })
//      // res.send('TEST API ');
// });
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, function() {
    console.log('API Runing at Port: ' + port);
});

