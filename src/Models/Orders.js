const {Schema,model} = require("mongoose");

const OrderSchema = new Schema({
    mesa : {type:String,required:true},
    order : {type:Array, required:true},
},
    { timestamps: true });


module.exports = model('Order', OrderSchema);