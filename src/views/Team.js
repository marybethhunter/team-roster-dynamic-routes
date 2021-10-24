import React from 'react';
import PropTypes from 'prop-types';
import Player from '../components/Player';

export default function Team({ players, setEditItem }) {
  return (
    <div>
      {players.map((player) => (
        <Player
          key={player.firebaseKey}
          player={player}
          setEditItem={setEditItem}
        />
      ))}
    </div>
  );
}

Team.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEditItem: PropTypes.func.isRequired,
};
