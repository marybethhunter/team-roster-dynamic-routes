import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import styled from 'styled-components';
import { deletePlayer, getAllPlayers } from '../api/data/playerData';

const DivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Player({ player }) {
  const handleDelete = () => {
    deletePlayer().then(getAllPlayers);
  };

  return (
    <DivStyle>
      <Card>
        <CardImg top width="100%" src={player.imageURL} alt={player.name} />
        <CardBody>
          <CardTitle tag="h5">{player.name}</CardTitle>
          <CardText>{player.position}</CardText>
          <Link to={`/new/${player.firebaseKey}`}>Update</Link>
          <Button onClick={handleDelete}>Delete</Button>
        </CardBody>
      </Card>
    </DivStyle>
  );
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    imageURL: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

Player.defaultProps = { player: {} };
