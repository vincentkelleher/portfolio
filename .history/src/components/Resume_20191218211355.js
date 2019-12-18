import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Resume.scss';
import Experience from './Experience';

export default () => {

    return (
        <Row id="resume">
            <Col lg="8">
                <h2>Expérience</h2>
                <Experience>
                    <Experience.Date>05/2019 - 03/2020</Experience.Date>
                    <Experience.Project>EneCAD</Experience.Project>
                    <Experience.Position>Référent Technique</Experience.Position>
                    <Experience.Description>
                        Application de gestion des dossiers d'appel de dépannage des clients d'<strong>Enedis</strong>.<br/>
                        Disponibilité 24/7 avec des nombreuses intéractions avec des partenaires.<br/>
                        Accompagnement d'une équipe de 5 développeurs.
                    </Experience.Description>
                    <Experience.Stack>
                        <Experience.Technology>Java 8</Experience.Technology>
                        <Experience.Technology>Spring Boot</Experience.Technology>
                        <Experience.Technology>Tomcat 9</Experience.Technology>
                        <Experience.Technology>Angular 5</Experience.Technology>
                        <Experience.Technology>Cassandra</Experience.Technology>
                        <Experience.Technology>Jenkins</Experience.Technology>
                        <Experience.Technology>Ansible</Experience.Technology>
                    </Experience.Stack>
                </Experience>
            </Col>

            <Col lg="4">
                <h2>Compétences</h2>
            </Col>
        </Row>
    );
}
