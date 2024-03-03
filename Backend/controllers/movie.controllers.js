
const MovieModel = require("../models/movie.model");

const getMovies = async (req, res) => {
  console.log(req.user)
  try {    
    const movies=await MovieModel.find()
    res.status(200).json({msg:movies})
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports={getMovies}