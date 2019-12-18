import React from 'react';
import Container from 'react-bootstrap';
import ReactSnapScroll from 'react-snap-scroll';
import './App.scss';

export default () => {

  return (
    <Container fluid="true" className="p-0">
      <ReactSnapScroll transition="move-top-bottom">
        
      </ReactSnapScroll>
    </Container>
  );
}
