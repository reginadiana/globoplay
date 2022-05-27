import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import * as Style from "./style";

function BestMovies({ movies, className }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const minScore = 94;

  const renderBestMovies = () =>
    movies.map((movie, key) => {
      if (movie.rt_score > minScore) {
        return (
          <p key={key}>
            {movie.rt_score} - {movie.title}
          </p>
        );
      }

      return null;
    });

  return (
    <Style.Container>
      <Button color="danger" onClick={toggle}>
        Ver melhores filmes
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Lista dos melhores filmes</ModalHeader>
        <ModalBody>
          <div>{renderBestMovies()}</div>
        </ModalBody>
      </Modal>
    </Style.Container>
  );
}

export default BestMovies;
