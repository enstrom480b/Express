var express =require('express')
var path=require('path')
var helmet=require('helmet')
var router=express()
const cookieParser=require('cookie-parser')
router.use(cookieParser())
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
     console.log(req.query)
    res.render('login')

 })
 router.post('/process_login',function(req,res,next){
const username=req.body.username
const password=req.body.password
if(password==='x')
{
   res.cookie('username',username)
res.redirect('/welcome')
}

else{

   res.redirect('/login?msg=fail&test=hello')
 

}

 })

 router.get('/welcome',function(req,res,next){
   res.render('welcome',{
   username:req.cookies.username
})

})

router.get('/logout',function(req,res,next){
   res.clearCookie('username')
res.redirect('/login')
})

router.get('/ajax',function(req,res,next){
    res.render('ajax',{title:'Home'})

 })

router.listen(3000)

