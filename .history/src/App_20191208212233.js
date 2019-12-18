import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { slideInLeft, slideInUp, slideInBottom } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Cat from './cat.jpg';

function App() {
  const styles = {
    slideInLeft: {
      animation: 'slideInLeft 3s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInUp: {
      animation: 'slideInUp 3s',
      animationName: Radium.keyframes(slideInUp, 'slideInUp')
    },
    slideInBottom: {
      animation: 'slideInBottom 3s',
      animationName: Radium.keyframes(slideInBottom, 'slideInBottom')
    }
  };

  return (
    <Container>
      <Row>
        <Col md="6">
          <StyleRoot>
            <img id="cat" alt="Meow" src={Cat} style={styles.slideInLeft}/> 
          </StyleRoot>
        </Col>
        <Col md="6">
          <StyleRoot>
            <h1 style={styles.slideInUp}>Vincent Kelleher</h1>
          </StyleRoot>
          {/* <StyleRoot>
            <h2 style={styles.slideInBottom}>Leader Technique Fullstack</h2>
          </StyleRoot> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
