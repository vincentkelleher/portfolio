import React from 'react';
import { Row } from 'react-bootstrap';
import { slideInLeft, slideInUp, slideInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Portrait from '../images/portrait.png';
import './Banner.scss';

export default () => {
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

    return <Row className="banner mb-5">
        <StyleRoot id="banner-portrait-container">
        <img alt="Portrait" src={Portrait} style={styles.slideInLeft} /> 
        </StyleRoot>
        <div id="banner-text" className="my-auto-lg">
        <div>
            <StyleRoot>
            <h1 style={styles.slideInDown}>Vincent Kelleher</h1>
            </StyleRoot>
            <StyleRoot>
            <h2 style={styles.slideInUp}>Leader Technique Fullstack</h2>
            </StyleRoot>
        </div>
        </div>
    </Row>;
}