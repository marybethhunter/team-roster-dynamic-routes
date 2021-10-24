import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { createNewPlayer } from '../api/data/playerData';

const initialState = {
  name: '',
  position: '',
  imageURL: '',
};

export default function NewForm({ player }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewPlayer(formInput).then(() => {
      resetForm();
      history.push('/team');
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (player.firebaseKey) {
      setFormInput(player);
    } else {
      setFormInput(initialState);
    }
  }, [player]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            onChange={handleChange}
            value={formInput.name}
            name="name"
            id="name"
            placeholder="Enter Player Name..."
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="position">Postiion:</Label>
          <Input
            type="text"
            onChange={handleChange}
            value={formInput.position}
            name="position"
            id="position"
            placeholder="Enter Player Position..."
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="imageURL">Image URL:</Label>
          <Input
            type="url"
            onChange={handleChange}
            value={formInput.imageURL}
            name="imageURL"
            id="imageURL"
            placeholder="Enter Image URL"
            required
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
}

NewForm.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    imageURL: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

NewForm.defaultProps = { player: {} };
