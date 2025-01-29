const express =require('express')
const mysql2 =  require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv'); //initializes dotenv file

dotenv.config();

//initializing express
const app = express()
app.use(cors())


//creating connection between db and codebase 
const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_NAME

})

app.get('/', (req,res)=>{
    return res.json('from backend side')
})
app.get('/products', (req,res)=>{
    const sql = 'SELECT * FROM products'
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})
app.listen(5005, ()=>{
    console.log('server is running on port ')
})