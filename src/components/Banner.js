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

    return <Row id="banner" className="mb-5 snap-scroll-section">
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
        <div id="scroll-indicator">
            <svg width="20px" height="100%" viewBox="0 0 247 390" version="1.1">
                <path id="wheel" d="M123.359,79.775l0,72.843" />
                <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" />
            </svg>
            <span>
                Scroll
            </span>
        </div>
    </Row>;
}