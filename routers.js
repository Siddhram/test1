const express=require('express');
const router=express.Router();
const ScoreModel = require('./scorebordmodel');
router.post('/save',async function(req,res){
    try {
        const{
            one,
            two,
            three,
            four,
            five,
            six,
            dot,
            score,
            wicket,
            ballcount,
            isNoBall,
        }=req.body;

        const newScore = new ScoreModel({
            one: one,
            two: two,
            three: three,
            four: four,
            five: five,
            six: six,
            dot: dot,
            score: score,
            wicket: wicket,
            isNoBall:isNoBall,
           
                        ballcount: ballcount,

        });

        const savedScore = await newScore.save();
        res.status(201).json(savedScore);
    } catch (error) {
        console.error("Error initializing post:", error);
        res.status(500).json({ error: "Server error" });
    }
});
router.get('/get',async function(req,res){
    try {
        const savedScore=await ScoreModel.find();
        res.status(201).json(savedScore);
    } catch (error) {
        console.error("Error initializing get:", error);
        res.status(500).json({ error: "Server error" });
    }
});
module.exports=router;