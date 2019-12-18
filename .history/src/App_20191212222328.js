import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { slideInLeft, slideInUp, slideInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Skill from './Skill';
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
            <img width="100%" alt="Portrait" src={Portrait} style={styles.slideInLeft}/> 
          </StyleRoot>
        </Col>
        <Col md="6" className="my-auto">
          <StyleRoot>
            <h1 style={styles.slideInDown}>Vincent Kelleher</h1>
          </StyleRoot>
          <StyleRoot>
            <h2 style={styles.slideInUp}>Leader Technique Fullstack</h2>
          </StyleRoot>
        </Col>
      </Row>

      <Row className="px-5">
        <Col md="4">
          <Skill name="Devops" icon={Devops} description="Plus qu'une mode, le devops est devenu une méthodologie incontournable pour le cycle de vie d'un projet."></Skill>
        </Col>
        <Col md="4">
          <Skill name="Devops" icon={Devops} description="Plus qu'une mode, le devops est devenu une méthodologie incontournable pour le cycle de vie d'un projet."></Skill>
        </Col>
        <Col md="4">
          <Skill name="Devops" icon={Devops} description="Plus qu'une mode, le devops est devenu une méthodologie incontournable pour le cycle de vie d'un projet."></Skill>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
