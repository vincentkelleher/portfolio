import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Banner from './Banner';
import Resume from './Resume';
import Contact from './Contact';

export default () => {

  return (
    <Container fluid="true" className="p-0 full-height snap-y-scroll-container no-horizontal-scroll">
      <Banner></Banner>
      <Resume></Resume>
      <Contact></Contact>
    </Container>
  );
}
