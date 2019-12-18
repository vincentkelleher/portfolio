import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Resume.scss';

export default () => {

    const Experience = () => {
        return (<div id="timeline">
            
        </div>
        <div class="experience">
            <div>
                <span class="label">Client - </span><span class="info">Enedis</span>
            </div>
            <div>
                <span class="label">Projet - </span><span class="info">EneCAD</span>
            </div>
            <div>
                <span class="label">Poste - </span><span class="info">Référent Technique</span>
            </div>
            <div>
                <span class="label">Société - </span><span class="info">onepoint</span>
            </div>
            <span class="label">Description - </span><p class="info">
                Application de gestion des dossiers d'appel de dépannage des clients d'Enedis.<br/>
                Disponibilité 24/7 avec des nombreuses intéractions avec des partenaires.<br/>
                Accompagnement d'une équipe de 5 développeurs.
            </p>
            <span class="label">Technologies - </span><ul>
                <li>Java 8</li>
                <li>Spring Boot</li>
                <li>Angular 5</li>
                <li>Cassandra</li>
                <li>Jenkins</li>
                <li>Ansible</li>
            </ul>
        </div>);
    };

    return (
        <Row id="resume">
            <Col lg="6">
                <h2>Expérience</h2>
                <Experience></Experience>
            </Col>

            <Col lg="6">
                <h2>Compétences</h2>
            </Col>
        </Row>
    );
}
