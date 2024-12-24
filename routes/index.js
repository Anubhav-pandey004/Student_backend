const express = require('express')
const router =express.Router()
const wrapAsync = require('../utils/wrapAsync')
const signup = require('../controller/signup')
const login = require('../controller/login')
const authToken = require('../middleware/authtoken')
const userDetails = require('../controller/userDetails')
const createPost = require('../controller/createPost')
const getQuestionDetails = require('../controller/getQuestionDetails')
const addcomment  = require('../controller/addcomment')
const addAnswer = require('../controller/addAnswer')
const Logout = require('../controller/userLogout')
const AllUsers = require('../controller/AllUsers')
const ChangeUserRole = require('../controller/changeUserRole')
const verifyanswer = require('../controller/verifyanswer')
const markVerify = require('../controller/markVerify')
const getAnswer = require('../controller/getAnswer')
const getQuestion = require('../controller/getQuestion')
const deletePost = require('../controller/deletePost')

router
    .route("/signup")
    .post(signup)

router
    .route("/login")
    .post(wrapAsync(login))    

router
    .route("/userDetails")
    .get(authToken, wrapAsync(userDetails.userDetails))

router
    .route("/new-post")
    .post(authToken, wrapAsync(createPost))   
    
router
    .route("/question")
    .post((getQuestionDetails))   
    
router
    .route("/addcomment")
    .post(authToken, wrapAsync(addcomment))
   
router
    .route("/new-answer")
    .post(authToken,wrapAsync(addAnswer))

router
    .route("/logout")
    .get(authToken,wrapAsync(Logout))

router
    .route("/AllUsers")
    .get(authToken,wrapAsync(AllUsers)) 

router
    .route("/changeUserRole")
    .post(authToken, wrapAsync(ChangeUserRole))
   
router
    .route("/verifyanswer")
    .get(authToken,wrapAsync(verifyanswer))

router
    .route("/markverify")
    .post(authToken, wrapAsync(markVerify))  
    
router
    .route("/getanswer")
    .post(wrapAsync(getAnswer))   
    
router
    .route("/addcommenttoans")
    .post(authToken,wrapAsync(addcomment))    

router
    .route("/getPosts")
    .post(wrapAsync(getQuestion))   
    
router
    .route("/deletePost")
    .post(authToken, wrapAsync(deletePost))    

module.exports=router 
