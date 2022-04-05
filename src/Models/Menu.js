const {Schema, model} = require("mongoose");

const MenuSchema = new Schema({
    foods : {type:Array,required:false}
},
    { timestamps: true });


module.exports = model('Menu', MenuSchema);