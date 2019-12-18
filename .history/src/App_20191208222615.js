import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { slideInLeft, slideInUp, slideInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Portrait from './portrait.png';
import Devops from './devops.png';

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
    <Container fluid="true">
      <Row className="banner pt-3 mb-5">
        <Col md="6" className="text-right">
          <StyleRoot>
            <img width="70%" alt="Portrait" src={Portrait} style={styles.slideInLeft}/> 
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
      <Row>
        <Col md="4">
          <Card className="skill" >
            <Card.Img src={Devops} /> 
            <Card.Body>
              <Card.Title>Devops</Card.Title>
              <Card.Text>
                Plus qu'une mode, le devops est devenu une méthodologie incontournable pour le cycle de vie d'un projet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="skill" >
            <Card.Img src={Devops} /> 
            <Card.Body>
              <Card.Title>Devops</Card.Title>
              <Card.Text>
                Plus qu'une mode, le devops est devenu une méthodologie incontournable pour le cycle de vie d'un projet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="skill" >
            <Card.Img src={Devops} /> 
            <Card.Body>
              <Card.Title>Devops</Card.Title>
              <Card.Text>
                Plus qu'une mode, le devops est devenu une méthodologie incontournable pour le cycle de vie d'un projet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
