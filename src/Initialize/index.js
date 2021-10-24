import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navigation from '../components/Navigation';
import Routes from '../routes/index';
import SignIn from '../views/SignIn';
import { getAllPlayers } from '../api/data/playerData';

function Initialize() {
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
        };
        setUser(userObj);
        getAllPlayers().then(setPlayers);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <>
          <Navigation />
          <Routes
            user={user}
            players={players}
            player={editItem}
            setEditItem={setEditItem}
          />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </>
  );
}

export default Initialize;
