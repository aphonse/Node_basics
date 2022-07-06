const express = require('express')
const router=express.Router()
const conn= require('./db')

router.get('/',(req, res)=>{
    res.render('blog_post')
})

router.get('/blogs',(req, res)=>{
    const sql="SELECT * FROM users"
    conn.query(sql,(err,data)=>{
        if(err) throw err
        console.log("Query successful\n"+data[0].email)
        res.render('blogs', {data})
    })
})

router.post('/blogs',(req, res)=>{
    const name = req.body.name
    const email=req.body.email
    const blog=req.body.blog
    console.log(name,email,blog)
    const sql= "INSERT INTO users (name,email,blog) VALUES (?,?,?)"
    if (req.body.name!==""){
        conn.query(sql,[name,email,blog],(err)=>{
            if (err) throw err
            console.log("Database success")
        })
        res.redirect('/blogs')
    }else {
        res.redirect('/blogs')
    }

})
router.get('/delete/:id',(req, res)=>{
    const sql = "DELETE FROM users WHERE id=?"
    conn.query(sql,[req.params.id],(err)=>{
        if (err) throw err
        res.redirect('/blogs')
    })
})
router.delete('/delete/:id',(req, res)=>{
    const sql = "DELETE FROM users WHERE id=?"
    conn.query(sql,[req.params.id],(err)=>{
        if (err) throw err
        res.redirect('/blogs')
    })
})

module.exports = router