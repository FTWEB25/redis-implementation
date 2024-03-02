const express = require("express");
const upload = require("../config/multer"); 
const { register, login, getUser } = require("../controllers/user.controllers");

const userRouter = express.Router();

userRouter.use("/images/users", express.static("images"));
userRouter.post("/register", upload.single("image"), register);
userRouter.post("/login", login)
userRouter.get("/",getUser)


module.exports = userRouter; 
