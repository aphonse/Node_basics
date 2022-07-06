const conn = require("../db");

const getBlogs=(req,res,next)=>{
    const sql="SELECT * FROM users"
    conn.query(sql,(err,data)=>{
        if(err) throw err
        // const {email} = data[2];
        // console.log("Query successful\n"+email)
        res.render('blogs', {data})
    })
}
const postBlog=(req,res)=>{
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
}

const deleteBlog=(req,res)=>{
    const sql = "DELETE FROM users WHERE id=?"
    conn.query(sql,[req.params.id],(err)=>{
        if (err) throw err
        res.redirect('/blogs')
    })
}

module.exports = {getBlogs,postBlog,deleteBlog}