const express = require("express");
const router = express.Router();


// Import Controller
const {createComment} = require("../controller/commentController");
const {createPost} = require("../controller/postController");
const {getAllPosts} = require("../controller/postController");
const {likePost} = require("../controller/likeController");
const {unlikePost} = require("../controller/likeController");
// Mapping Create
router.post("/comments/create",createComment);
router.post("posts/create",createPost);      
router.get("posts",getAllPosts);    
router.post("/likes/like",likePost);  
router.post("/likes/unlike",unlikePost);  


// export
module.exports = router;