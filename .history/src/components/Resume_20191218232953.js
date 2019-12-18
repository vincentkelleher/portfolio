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
                        <Experience.Timeline.Date>05/2019 - 03/2020</Experience.Timeline.Date>
                        <Experience.Timeline.Company>
                            <a href="http://groupeonepoint.com/"><img alt="Logo de onepoint" src={Onepoint} /></a>
                        </Experience.Timeline.Company>
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
                        <Experience.Technology>Bootstrap 4</Experience.Technology>
                        <Experience.Technology>Cassandra</Experience.Technology>
                        <Experience.Technology>Jenkins</Experience.Technology>
                        <Experience.Technology>Ansible</Experience.Technology>
                    </Experience.Stack>
                </Experience>
                <Experience>
                    <Experience.Timeline>
                        <Experience.Timeline.Date>04/2018 - 05/2019</Experience.Timeline.Date>
                        <Experience.Timeline.Company>
                            <a href="http://groupeonepoint.com/"><img alt="Logo de onepoint" src={Onepoint} /></a>
                        </Experience.Timeline.Company>
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
                <Experience>
                    <Experience.Timeline>
                        <Experience.Timeline.Date>08/2017 - 04/2018</Experience.Timeline.Date>
                        <Experience.Timeline.Company>
                            <a href="http://groupeonepoint.com/"><img alt="Logo de onepoint" src={Onepoint} /></a>
                        </Experience.Timeline.Company>
                    </Experience.Timeline>
                    <Experience.Project>Cassiopée</Experience.Project>
                    <Experience.Position>Leader Technique</Experience.Position>
                    <Experience.Description>
                        Application de gestion de la chaîne pénale des Tribunaux de Grande Instance.<br/>
                        Accompagnement d'une équipe de 6 personnes.<br/>
                        Appui technique lors des mises en production.<br/>
                        Maintenance des environnements serveur.<br/>
                        Référent sur plusieurs modules de l'application.
                    </Experience.Description>
                    <Experience.Stack>
                        <Experience.Technology>Java 7</Experience.Technology>
                        <Experience.Technology>Spring AOP</Experience.Technology>
                        <Experience.Technology>JBoss EAP 5</Experience.Technology>
                        <Experience.Technology>Oracle DB</Experience.Technology>
                        <Experience.Technology>HSQLDB</Experience.Technology>
                        <Experience.Technology>PostgreSQL</Experience.Technology>
                    </Experience.Stack>
                </Experience>
                <Experience>
                    <Experience.Timeline>
                        <Experience.Timeline.Date>08/2016 - 08/2017</Experience.Timeline.Date>
                        <Experience.Timeline.Company>
                            <a href="http://groupeonepoint.com/"><img alt="Logo de onepoint" src={Onepoint} /></a>
                        </Experience.Timeline.Company>
                    </Experience.Timeline>
                    <Experience.Project>Cassiopée</Experience.Project>
                    <Experience.Position>Développeur</Experience.Position>
                </Experience>
                <Experience>
                    <Experience.Timeline>
                        <Experience.Timeline.Date>08/2014 - 08/2016</Experience.Timeline.Date>
                        <Experience.Timeline.Company>
                            <a href="http://groupeonepoint.com/"><img alt="Logo de onepoint" src={Onepoint} /></a>
                        </Experience.Timeline.Company>
                    </Experience.Timeline>
                    <Experience.Project>Cassiopée</Experience.Project>
                    <Experience.Position>Développeur en Alternance</Experience.Position>
                </Experience>
                <Experience>
                    <Experience.Timeline>
                        <Experience.Timeline.Date>08/2013 - 08/2014</Experience.Timeline.Date>
                        <Experience.Timeline.Company>
                            <strong>Square Eyes</strong>
                        </Experience.Timeline.Company>
                    </Experience.Timeline>
                    <Experience.Project>Multi-projet</Experience.Project>
                    <Experience.Position>Développeur en Alternance</Experience.Position>
                    <Experience.Description>
                        Conception et développement d'applications web pour divers clients.<br/>
                        Aide à l'expression du besoin client.<br/>
                        Exploitation des serveurs d'hébergement.
                    </Experience.Description>
                    <Experience.Stack>
                        <Experience.Technology>Symfony 2</Experience.Technology>
                        <Experience.Technology>Bootstrap 2</Experience.Technology>
                        <Experience.Technology>MySQL</Experience.Technology>
                        <Experience.Technology>Proxmox</Experience.Technology>
                    </Experience.Stack>
                </Experience>
            </Col>

            <Col lg="4">
                <h2>Compétences</h2>
            </Col>
        </Row>
    );
}
