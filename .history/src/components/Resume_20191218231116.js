import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Resume.scss';
import Experience from './Experience';
import Onepoint from '../images/onepoint.png';

export default () => {

    return (
        <Row id="resume" className="snap-scroll-section">
            <Col lg="8">
                <h2>Expérience</h2>
                <Experience>
                    <Experience.Timeline>
                        <Experience.Date>05/2019 - 03/2020</Experience.Date>
                        <Experience.Company>
                            <img alt="Logo de onepoint" src={Onepoint} />
                        </Experience.Company>
                    </Experience.Timeline>
                    <Experience.Project>EneCAD</Experience.Project>
                    <Experience.Position>Référent Technique</Experience.Position>
                    <Experience.Description>
                        Application de gestion des dossiers d'appel de dépannage des clients d'<strong>Enedis</strong>.<br/>
                        Disponibilité 24/7 (astreintes régulières) avec de nombreuse intéractions avec des partenaires.<br/>
                        Accompagnement d'une équipe de 5 développeurs dans un contexte Scrum.<br/>
                        Assainissement technique de l'application puis gestion d'une crise majeure de production.
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
                <Experience>
                    <Experience.Timeline>
                        <Experience.Date>04/2018 - 05/2019</Experience.Date>
                        <Experience.Company><img alt="Logo de onepoint" src={Onepoint} /></Experience.Company>
                    </Experience.Timeline>
                    <Experience.Project>Référentiel Client</Experience.Project>
                    <Experience.Position>Leader Technique</Experience.Position>
                    <Experience.Description>
                        Microservice de gestion des clients d'<strong>Enedis</strong>.<br/>
                        Moteur de recherche dont dépendent nombreux partenaires.<br/>
                        Deux équipes projet à Paris et Bordeaux dans un contexte Scrum et Nexus.<br/>
                        Réalisation de la migration vers RedHat OpenShift.
                    </Experience.Description>
                    <Experience.Stack>
                        <Experience.Technology>Java 8</Experience.Technology>
                        <Experience.Technology>Spring Boot</Experience.Technology>
                        <Experience.Technology>Tomcat 8</Experience.Technology>
                        <Experience.Technology>Angular 5</Experience.Technology>
                        <Experience.Technology>Oracle DB</Experience.Technology>
                        <Experience.Technology>OpenShift</Experience.Technology>
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
