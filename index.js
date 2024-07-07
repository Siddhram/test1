const express=require('express');
const app=express();
app.use(express.json());
const mongoose=require('mongoose');
const ScoreModel = require('./scorebordmodel');
const router = require('./routers');
const mongooseURL = 'mongodb+srv://siddharamsutar23:SBFwuYdCbYoOP95C@cluster0.khuehdf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongooseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB connected');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});
app.use('/score',router);
app.post('/',function(req,res){
  console.log(req.body['data']);
res.status(200).json({message:"hello"});
});


// app.get('/post', async function(req, res) {
//     try {
//         const newScore = new ScoreModel({
//             one: 0,
//             two: 0,
//             three: 0,
//             four: 0,
//             five: 0,
//             six: 0,
//             dot: 0,
//             score: 0,
//             wicket: 0,
//             isWide: false,
//             isNoBall: false,
//             isFreeHit: false,
//                         ballcount: 0,

//         });

//         const savedScore = await newScore.save();
//         res.status(201).json(savedScore);
//     } catch (error) {
//         console.error("Error initializing post:", error);
//         res.status(500).json({ error: "Server error" });
//     }
// });
app.listen(3000,"0.0.0.0",function(){
    console.log("server on")
})


