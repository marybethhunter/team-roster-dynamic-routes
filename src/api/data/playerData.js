import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getAllPlayers = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/players.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createNewPlayer = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/players.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbURL}/players/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getAllPlayers().then(resolve);
        });
    })
    .catch(reject);
});

const getSinglePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/players/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updatePlayer = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/players/${obj.firebaseKey}.json`, obj)
    .then(() => getAllPlayers().then(resolve))
    .catch(reject);
});

const deletePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/players/${firebaseKey}.json`)
    .then(() => getAllPlayers().then(resolve))
    .catch(reject);
});

export {
  getAllPlayers,
  createNewPlayer,
  getSinglePlayer,
  updatePlayer,
  deletePlayer,
};
