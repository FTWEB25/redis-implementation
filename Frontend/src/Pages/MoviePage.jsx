import React, { useEffect, useState } from "react";
import styles from "./MoviePage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MoviePage() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getMovies = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/movies");
      setIsLoading(false);
      if (
        response.status == 200 &&
        response.data.msg === "Please login first"
      ) {
        navigate("/login");
      } else if (response.status == 200) {
        setMovies(response.data.msg);
      } else {
        navigate("/error");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>LOADING.....</div>
      ) : movies.length == 0 ? (
        <div>No movies yet</div>
      ) : (
        movies.map((movie) => (
          <div className={styles.card} key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h3>MovieName: {movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MoviePage;
