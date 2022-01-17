const express=require('express');
const cors=require('cors');
const Validator=require('validator');
const database=require('./Database');

const app=express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
	//res.send(database.users);
    database.query("select * from users",function(err,rows,fields){
        if(err) throw err;
        res.json(rows);
        
    })
})

app.post('/signin',async (req,res)=>{
    const {email, password}=req.body;
    database.query("select * from users",function(err,rows,fields){
        for(let user in rows){
            console.log(user.email);
            if(email ===user.email && password===user.password){
                res.json(user.name);
            }
        }
    });
    await res.status(404).json('error logging in');
})

app.post('/register',(req,res)=>{
    const {name,email,password}=req.body;
    if (Validator.isEmail(email) && password.length>=6){
        database.query("INSERT INTO users VALUES (?,?,?)",[name,email,password],function(err,rows,fields){
            res.json(rows);
        })
    }else{
        res.json('Error logging in');
    }
})

app.listen(3000);