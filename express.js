var express =require('express')
var path=require('path')
var helmet=require('helmet')
var router=express()
var ejs=require('ejs')
router.use(express.static('public'))
router.use(express.static(__dirname + '/public'));
router.use(express.json())
router.use(express.urlencoded({extended:false}))
router.set('view engine','ejs')
router.set('views',path.join(__dirname,'views'))
router.use(helmet())
function valid(req,res,next)
{
res.locals.valid=true
}
router.get('/about',function(req,res,next){
    res.render('about',{title:'About'})

 })
 router.get('/contact',function(req,res,next){
    res.render('contact',{title:'Contact'})

 })
 router.get('/login',function(req,res,next){

    res.render('login')

 })
 router.post('/process_login',function(req,res,next){
    res.json(req.body)

 })

router.get('/ajax',function(req,res,next){
    res.render('ajax',{title:'Home'})

 })

router.listen(3000)

