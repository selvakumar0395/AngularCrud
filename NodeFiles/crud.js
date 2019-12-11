 require('./connect');
const express =  require('express');
const app = express();

const bodyParser = require('body-parser'); 
const cors = require('cors');
app.use(cors( {origin : "*" } ) );

connection.connect(function(err){
    if(err) throw err;
    console.log('You are connected');
});

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
    extended:true 
}));

app.get('/getdata', function(req,res)
{
    connection.query('SELECT * FROM `users`' , function(err, results){
        if(err) throw err;
        res.send(results);
    });
});
app.get('/deletedata/:id', function(req,res)
{
    let id = req.params.id;
    connection.query("Delete  FROM `users` where id ="+id, function(err, results){
        if(err) throw err;
        res.send(results);
    });

});
app.post('/insertData', function(req,res)
{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let gender = req.body.gender;

    connection.query( "INSERT INTO `users`( `fname`, `lname`, `email`, `password`, `mobile`, `gender`) VALUES('"+fname+"','"+lname+"','"+email+"','"+password+"','"+mobile+"','"+gender+"')", function(err, results){
    if(err) throw err;
        res.send({"msg":"Successfully Inserted"});
     });
});

app.get('/editData/:id', function(req,res)
{
    let id = req.params.id;
    connection.query("select *  FROM `users` where id ="+id, function(err, results){
        if(err) throw err;
        res.send(results);
    });

});

app.post('/updateData/:id',function(req,res)
{
    let id = req.body.id;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let gender = req.body.gender;

    connection.query("UPDATE `users` SET `fname`= '"+ fname +"', `lname` = '"+ lname +"',`email` ='"+ password +"',mobile='"+mobile+"',gender='"+gender+"'  where `id`= "+id , function(err, results){
    if(err) throw err;
        res.send({"msg":"Successfully Updated"});
     });
});

app.listen(4210,function(req,res){
    console.log('Port Listing to 4210');
});
