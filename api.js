const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 8080

app.get('/user',function(req,res){
    res.send("欢迎范文用户接口")
})
app.get('/list',(req,res)=>{
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'goods'
      });
       
      connection.connect();
       
      connection.query('select user_name,email from p_users limit 5', function (error, results, fields) {
        //   console.log(results)

        res.send(JSON.stringify(results))
      });

    connection.end();
})
app.get('/', (req, res) => {

    const list = [
        {
            userid:1001,
            name:"zhangsan",
            age:11
        },
        {
            userid:1002,
            name:"lisi",
            age:22
        },
        {
            userid:1003,
            name:"wangwu",
            age:33
        }
    ]



  res.send(JSON.stringify(list))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})