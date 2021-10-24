import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import New from '../views/New';
import Team from '../views/Team';

export default function Routes({ player, players, setEditItem }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Team player={player} players={players} setEditItem={setEditItem} />
          )}
        />
        <Route
          exact
          path="/team"
          component={() => (
            <Team player={player} players={players} setEditItem={setEditItem} />
          )}
        />
        <Route exact path="/new" component={New} />
        <Route exact path="/new/:key" component={New} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    imageURL: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
  }),
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEditItem: PropTypes.func.isRequired,
};

Routes.defaultProps = { player: {} };
