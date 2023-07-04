let mongoose= require('mongoose')
let Schema=mongoose.Schema

let blogSchema=new Schema({

nom:{
   type:String,
   require:true
},
age:{
    type:Number,
    require:true
 },
 favoritefood:{
    type:Array,
    require:true
 }
},{timestamps:true})

let Contactlist=mongoose.model('Contactlist',blogSchema)
module.exports=Contactlist