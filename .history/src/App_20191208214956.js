import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { slideInLeft, slideInUp, slideInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Portrait from './portrait.png';

function App() {
  const styles = {
    slideInLeft: {
      animation: 'slideInLeft 3s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInDown: {
      animation: 'slideInDown 3s',
      animationName: Radium.keyframes(slideInDown, 'slideInDown')
    },
    slideInUp: {
      animation: 'slideInUp 3s',
      animationName: Radium.keyframes(slideInUp, 'slideInUp')
    }
  };

  return (
    <Container fluid="true" className="banner px-3 pt-3">
      <Row>
        <Col md="6" className="text-right">
          <StyleRoot>
            <img id="portrait" alt="Portrait" src={Portrait} style={styles.slideInLeft}/> 
          </StyleRoot>
        </Col>
        <Col md="6" className="vertical-center">
          <StyleRoot>
            <h1 style={styles.slideInDown}>Vincent Kelleher</h1>
          </StyleRoot>
          <StyleRoot>
            <h2 style={styles.slideInUp}>Leader Technique Fullstack</h2>
          </StyleRoot>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
