import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Banner from './Banner';
import Resume from './Resume';

export default () => {

  return (
    <Container fluid="true" className="p-0 full-height snap-scroll-container">
      <Banner className="snap-scroll-section"></Banner>
      <Resume className="snap-scroll-section"></Resume>
    </Container>
  );
}
