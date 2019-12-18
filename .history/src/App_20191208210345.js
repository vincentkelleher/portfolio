import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './App.css';

function App() {
  const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <StyleRoot>
            <h1 style={styles.bounce}>Test</h1>
          </StyleRoot>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
