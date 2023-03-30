var express=require('express')
var app=express()
var cor=require("cors")
app.use(cor())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
var mysql=require("mysql2")
var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:3306,
    database:"abheesinteriors"
})
db.connect((err)=>{
    if(err) throw err;
    console.log("connected");
})
app.post("/saveContactUs",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var phone=req.body.phone;
    var message=req.body.message;

    var sql="insert into contactus values(?,?,?,?,?)";
    db.query(sql,[0,name,email,phone,message],(err,result)=>{
        if(err) throw err;
        res.send({"msg":"Successfully submitted."})
    })

})

app.listen(9006,()=>{
    console.log("server running http://localhost:9006/")
})