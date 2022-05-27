import React, { useContext, useState } from "react";
import posterIt from "../../assets/poster.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../context";
import BestMovies from "../BestMovies/index";
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
      var foundSearch = movie.title.toUpperCase().includes(search);

      if (foundSearch && moviesDisplayed < seeMore) {
        moviesDisplayed = moviesDisplayed + 1;

        return (
          <Style.Movie
            key={key}
            src={posterIt}
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
        <Button color="danger" onClick={() => setSeeMore(seeMore + 4)}>
          +
        </Button>
      </Style.Container>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{movie.title}</ModalHeader>
        <ModalBody>
          <Style.Description>
            <h6>Descrição:</h6>
            <p>{movie.description}</p>
          </Style.Description>

          <Style.Info>
            <h6>Diretor:</h6>
            <p>{movie.director}</p>
          </Style.Info>

          <Style.Info>
            <h6>Produtor:</h6>
            <p>{movie.producer}</p>
          </Style.Info>

          <Style.Info>
            <h6>Lançamento:</h6>
            <p>{movie.release_date}</p>
          </Style.Info>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Cards;
