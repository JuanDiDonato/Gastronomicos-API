const {Schema, model} = require("mongoose");

const MenuSchema = new Schema({
    menu_name : {type:String, required:true},
    foods : {type:Array,required:false}
},
    { timestamps: true });


module.exports = model('Menu', MenuSchema);