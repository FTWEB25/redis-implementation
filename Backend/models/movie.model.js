const mongoose=require("mongoose")

const movieSchema=mongoose.Schema({
    title:String,
    image:String,
    genre:String,
    rating:Number
})

const MovieModel=mongoose.model("movie",movieSchema)

module.exports=MovieModel