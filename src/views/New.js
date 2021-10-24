import React from 'react';
import { useParams } from 'react-router-dom';
import NewForm from '../components/Form';

export default function New() {
  const { key } = useParams();

  return (
    <>
      <h1>params test: {key}</h1>
      <NewForm />
    </>
  );
}
