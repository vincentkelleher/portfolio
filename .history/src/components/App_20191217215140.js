import React from 'react';
import { Container } from 'react-bootstrap';
import ReactSnapScroll from 'react-snap-scroll';
import './App.scss';
import Banner from './Banner';
import Resume from './Resume';

export default () => {

  return (
    <Container fluid="true" className="p-0">
      <ReactSnapScroll start=1 transition="move-top-bottom">
        <Banner></Banner>
        <Resume></Resume>
      </ReactSnapScroll>
    </Container>
  );
}
