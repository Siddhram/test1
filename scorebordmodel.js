const mongoose=require('mongoose');
const scoreBordSchema= new mongoose.Schema({
one: {
    type: Number,
    default: 0,
  },
  two: {
    type: Number,
    default: 0,
  },
  three: {
    type: Number,
    default: 0,
  },
  four: {
    type: Number,
    default: 0,
  },
  five: {
    type: Number,
    default: 0,
  },
  six: {
    type: Number,
    default: 0,
  },
  dot: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    default: 0,
  },
  wicket: {
    type: Number,
    default: 0,
  },
  isWide: {
    type: Boolean,
    default: false,
  },
  isNoBall: {
    type: Boolean,
    default: false,
  },
  isFreeHit: {
    type: Boolean,
    default: false,
  },
  isover: {
    type: Boolean,
    default: false,
  },
  ballcount: {
    type: Number,
    default: 0,
  },

  
});
const ScoreModel=mongoose.model('ScoreModel',scoreBordSchema);
module.exports=ScoreModel;
