import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Banner from './Banner';
import Resume from './Resume';

export default () => {

  return (
    <Container fluid="true" className="p-0">
      <Banner></Banner>
      <Resume></Resume>
    </Container>
  );
}
