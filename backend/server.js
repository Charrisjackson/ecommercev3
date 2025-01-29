import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';//initializes dotenv file

dotenv.config();
import path from 'path'
import { fileURLToPath } from 'url';

//initializing express
const app = express()
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);






app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));


//creating connection between db and codebase 
const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_NAME

})

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../dist/index.html"));
//   });



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