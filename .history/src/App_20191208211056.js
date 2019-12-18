import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Cat from './cat.jpg';

function App() {
  const styles = {
    slideInLeft: {
      animation: 'slideInLeft 3s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <StyleRoot>
            <img id="cat" src={Cat} style={styles.slideInLeft}/>
          </StyleRoot>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
