let express=require('express')
let mongoose=require('mongoose')
let Contactlist=require('./models/model1')
const { ServerApiVersion } = require('mongodb')


let serveur=express()
serveur.use(express.static('public'))
serveur.set('view engine','ejs')

let MONGO_URI='mongodb+srv://tanhaxelkevin:abidasproduction@cluster0.xe6gize.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI)
.then((result)=>{
    console.log('DB connecté')  
    serveur.listen(3000)
})
.catch((err)=>{
    console.log(err);
})


serveur.get('/personnes',(req,res)=>{
let personne=new Contactlist({
nom:'axel',
age:20,
favoritefoods:["riz","coco"]
})
personne.save()
.then((result)=>{
    res.send(result)
})
.catch((err)=>{
    console.log(err); 
})
})

serveur.get('/',(req,res)=>{
 Contactlist.find()
 .then((result)=>{
 res.render('acceuil',{blog:result})
 })
.catch((err)=>{
console.log(err);
})
}) 

serveur.get('/home',(req,res)=>{
    Contactlist.findById('64a3e40cb8f8b494d9ec9f24')
    .then((result)=>{
        res.render('home',{blog:result})
    })
    .catch((err)=>{
        console.log(err)
    })
    })
serveur.use((req,res)=>{
    res.send('404')
})
    