import React from 'react';
import Container from 'react-bootstrap';
import { slideInLeft, slideInUp, slideInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ReactSnapScroll from 'react-snap-scroll';
import './App.scss';
import Portrait from '../images/portrait.png';

export default () => {
  
  return (
    <Container fluid="true" className="p-0">
      <ReactSnapScroll transition="move-top-bottom">
        
      </ReactSnapScroll>
    </Container>
  );
}
