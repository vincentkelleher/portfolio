import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { slideInLeft, slideInUp, slideInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ReactSnapScroll from 'react-snap-scroll';
import './App.scss';
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
    <Container fluid="true" className="p-0">
      <ReactSnapScroll transition="move-top-bottom">
        <Row className="banner mb-5">
          <Col xs={{ span: 12, order: 2 }} lg={{ span: 8, order: 1 }} className="text-right">
            <StyleRoot className="full-height-table-cell">
              <img width="100%" alt="Portrait" className="align-bottom" src={Portrait} style={styles.slideInLeft} /> 
            </StyleRoot>
          </Col>
          <Col id="banner-text" xs={{ span: 12, order: 1 }} lg={{ span: 4, order: 2 }} className="my-auto">
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
      </ReactSnapScroll>
    </Container>
  );
}

export default App;
