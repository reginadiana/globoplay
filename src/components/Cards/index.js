import React, { useContext, useState } from "react";
import posterIt from "../../assets/poster.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../context";
import BestMovies from "../BestMovies";
import * as Style from "./style";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

const Cards = ({ movies }) => {
  const { search } = useContext(Context);
  const [seeMore, setSeeMore] = useState(4);
  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState("");
  const toggle = (movie) => {
    setMovie(movie);
    setModal(!modal);
  };

  const renderMovies = () => {
    var moviesDisplayed = 0;

    return movies.map((movie, key) => {
      console.log(movie);
      var foundSearch = movie.title.toUpperCase().includes(search);

      if (foundSearch && moviesDisplayed < seeMore) {
        moviesDisplayed = moviesDisplayed + 1;

        return (
          <Style.Movie
            key={key}
            src={movie.image}
            onClick={() => toggle(movie)}
            alt="Poster do filme"
          />
        );
      }

      return null;
    });
  };

  return (
    <>
      <BestMovies movies={movies} />

      <Style.Container>
        <Style.Movies>{renderMovies()}</Style.Movies>
        {seeMore < movies.length && (
          <Button
            color="danger"
            onClick={() => setSeeMore(seeMore + 4)}
            aria-label="Mostrar mais 4 filmes"
          >
            +
          </Button>
        )}
      </Style.Container>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{movie.title}</ModalHeader>
        <ModalBody>
          <div>
            <Style.Info>Descrição:</Style.Info>
            <p>{movie.description}</p>
          </div>

          <div>
            <Style.Info>Diretor:</Style.Info>
            <p>{movie.director}</p>
          </div>

          <div>
            <Style.Info>Produtor:</Style.Info>
            <p>{movie.producer}</p>
          </div>

          <div>
            <Style.Info>Lançamento:</Style.Info>
            <p>{movie.release_date}</p>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Cards;
