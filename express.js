const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.get('/user',(req,res)=>{
    const p1 = {
        userid:1234,
        name:"zhangsan",
        email:"zhangsan@qq.com"
    }
    console.log(req.query)
    res.send(JSON.stringify(p1))
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})