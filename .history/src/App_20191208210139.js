import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
          <h1 style={styles.bounce}>Test</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
