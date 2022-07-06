const express = require('express')
const router=express.Router()
const blogController= require('./controllers/blogs')

router.get('/',(req, res)=>{
    res.render('blog_post')
})

router.get('/blogs',blogController.getBlogs)
router.post('/blogs',blogController.postBlog)
router.get('/delete/:id',blogController.deleteBlog)
router.delete('/delete/:id',blogController.deleteBlog)

module.exports = router