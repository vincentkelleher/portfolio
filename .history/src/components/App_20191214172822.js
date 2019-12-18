import React from 'react';
import Container from 'react-bootstrap';
import ReactSnapScroll from 'react-snap-scroll';
import './App.scss';
import Banner from './Banner';

export default () => {

  return (
    <Container fluid="true" className="p-0">
      <ReactSnapScroll transition="move-top-bottom">
        <Banner></Banner>
      </ReactSnapScroll>
    </Container>
  );
}
