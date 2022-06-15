import React, { useState } from "react";
import Cards from "../Cards/index";

const ApiMovies = () => {
  const [movies, setMovies] = useState([]);

  const URL_USE_FETCH = "https://ghibliapi.herokuapp.com/films";

  fetch(URL_USE_FETCH)
    .then((response) => response.json())
    .then((resp) => setMovies(resp))
    .catch((err) => console.log("Error to request API:", err));

  return <Cards movies={movies} />;
};

export default ApiMovies;
