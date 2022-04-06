const {Schema, model} = require("mongoose");

const StatisticsSchema = new Schema({
    sales : {type:Number, required:true,default:0},
    profits : {type:Number,required:true,default:0}
},
    { timestamps: true });


module.exports = model('Statistics', StatisticsSchema);