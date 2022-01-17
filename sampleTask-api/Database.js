const mysql=require('mysql');

//const database={
    // users:[
    //     {
    //         name:'SAI',
    //         email:'sai@gmail.com',
    //         password:'sai'
    //     },
    //     {
    //         name:'PRIYA',
    //         email:'priya@gmail.com',
    //         password:'priya'
    //     },
    //     {
    //         name:'JC',
    //         email:'jc@gmail.com',
    //         password:'jc'
    //     }
    // ]
    const db=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'Zessta@754',
        database:'node'
    });
    db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
//}

module.exports=db;