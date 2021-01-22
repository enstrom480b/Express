
<!DOCTYPE html>
<html>
<head>
	<title>	Movie App </title>
            <%-include('head')%>
</head>
<body>

            <%-include('navbar')%>

	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1></h1>
			</div>
			<div class="col-sm-12">
				
				
			</div>
		</div>
	</div>
</body>
</html>

/*process.env.UV_THREADPOOL_SIZE=1
const crypto=require('crypto')
const start=Date.now();
const serv=require('express')
const app=serv()
function fn(){
	i=0
	while(i<10000)
	{
		i++
		console.log(i)
	}

}
const cluster=require("cluster")

//if(cluster.isMaster)
//{
//cluster.fork()

//}

app.get("/",(req,res)=>{
res.send("vf")		
})
	
app.get("/fast",(req,res)=>{
res.send("hgsgghgfh")	
})
app.listen(3000)
//console.log(crypto)



//AC49637334ed831e0f04b95daa5ba45916