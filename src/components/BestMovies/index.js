import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import * as Styled from "./style";

const BestMovies = ({ movies, className }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const minScore = 94;
  movies = movies.filter(({ rt_score }) => rt_score > minScore);

  const bestMovies = movies.sort(
    (previous, next) => previous.rt_score - next.rt_score
  );

  return (
    <Styled.Container>
      <Button color="danger" onClick={toggle}>
        Ver melhores filmes
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Lista dos melhores filmes</ModalHeader>
        <ModalBody>
          {bestMovies.map((movie, key) => {
            return (
              <div key={key}>
                <strong>{movie.rt_score}</strong>
                <p>{movie.title}</p>
              </div>
            );
          })}
        </ModalBody>
      </Modal>
    </Styled.Container>
  );
}

export default BestMovies;
