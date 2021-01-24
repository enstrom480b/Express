
var express =require('express')
var path=require('path')
var helmet=require('helmet')
var router=express()
const cookieParser=require('cookie-parser')
const request=require('request')
router.use(cookieParser())
var ejs=require('ejs')
const { Body } = require('node-fetch')
router.use(express.static('public'))
router.use(express.static(__dirname + '/public'));
router.use(express.json())
router.use(express.urlencoded({extended:false}))
router.set('view engine','ejs')
router.set('views',path.join(__dirname,'views'))
router.use(helmet())
var nowPlayingUrl="http://www.omdbapi.com/?apikey=f637d5ba&s=%27titanic%27"
//http://www.omdbapi.com/?i=tt3896198&apikey=f637d5ba
var campgrounds=[
    {name:'salmon creek',image:"https://pixabay.com/get/gf523865f57dc2eceeb187bf7072655518cc43e8d92528163ac9d79e6d2dfdc8b18cdf8d152c0781617a86d3c63c69c0a_340.jpg"},
    {name:'mountain rest',image:"https://pixabay.com/get/g6c0b2ee3b4f45836833d459c86faa5a56ba8712e4e9cbc79041a07e6e4b6dc108d4936263847f929921370bc46af1552_340.jpg"},
    {name:'granite peek',image:"https://pixabay.com/get/gea6f93731487b7930955502b68efaaafbbd118c7c023db1df48fdbe6bd2290bd1c02269f4b72c4fd1d69f2d5c2f5c80a_340.jpg"},
    {name:'lower creset',image:"https://pixabay.com/get/g4c7f2123e0fd1c449e58be6baa3ca997aee491650e21acdc1d5ed4aaab590a694c6c75ccdbffa583e5e4b528865b4f24_340.jpg"},
    {name:'upper peak',image:"https://pixabay.com/get/g7c43ec374aa1836a6504c73f2e440a0ad41e1d5fda06f90102a8d20014dd432a9579ff82fce1030fadedf9072968ea21_340.jpg"}
       ]
router.get('/',function(req,res,next){
 res.render('landing')
   
})
router.post('/campgrounds/new',function(req,res,next){
    const name=req.body.name
       const image=req.body.image
       const names={name:name,image:image}
    	campgrounds.push(names)
            res.redirect('/campgrounds')
   
})

router.get('/campgrounds/new',function(req,res,next){
    
 res.render('form')
   
})


router.get('/campgrounds',function(req,res,next){

 res.render('welcome',{
		campgrounds:campgrounds
})





})
router.listen(3000)