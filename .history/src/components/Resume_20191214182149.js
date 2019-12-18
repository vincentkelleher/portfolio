import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Resume.scss';

export default () => {

    const Experience = () => {
        return <div>
            <span>Client - </span><span>Enedis</span>
            <span>Projet - </span><span>EneCAD</span>
            <span>Poste - </span><span>Référent Technique</span>
            <span>Société - </span><span>onepoint</span>
            <span>Description - </span><p>
                Application de gestion des dossiers d'appel de dépannage des clients d'Enedis.<br/>
                Disponibilité 24/7 avec des nombreuses intéractions avec des partenaires.<br/>
                Accompagnement d'une équipe de 5 développeurs.
            </p>
        </div>;
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
