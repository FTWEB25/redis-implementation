const express = require("express");
const { getMovies } = require("../controllers/movie.controllers");
const movieRouter = express.Router();

movieRouter.get("/",getMovies)

module.exports = movieRouter;
