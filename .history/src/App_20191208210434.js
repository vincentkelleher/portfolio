import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './App.css';

function App() {
  const styles = {
    slideInLeft: {
      animation: 'slideInLeft 1s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <StyleRoot>
            <h1 style={styles.slideInLeft}>Test</h1>
          </StyleRoot>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
