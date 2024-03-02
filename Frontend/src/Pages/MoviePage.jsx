import React from 'react'
import styles from "./MoviePage.module.css"

function MoviePage() {
  return (
    <div>
      <div className={styles.card}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCI95u-fZcoeAOoWowNh3EPIIS6rmdyWr1g&usqp=CAU"
          alt="movie"
        />
        <h3>MovieName:-</h3>
        <p>Genre:-Horror</p>
        <p>Rating:-9.2</p>
      </div>
    </div>
  );
}

export default MoviePage