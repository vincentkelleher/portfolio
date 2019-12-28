import React from 'react';
import Onepoint from '../images/onepoint.png';

export default [
    {
        dates: {
            start: {
                month: 5,
                year: 2019
            },
            end: {
                month: 3,
                year: 2020
            }
        },
        company: <a href="http://groupeonepoint.com/"><img alt="Logo de onepoint" src={Onepoint} /></a>,
        project: "EneCAD",
        position: "Référent Technique",
        description: (
            <>
                Application de gestion des dossiers d'appel de dépannage des clients d'<strong>Enedis</strong>.<br/>
                Disponibilité 24/7 (astreintes régulières) avec de nombreuse intéractions avec des partenaires.<br/>
                Accompagnement d'une équipe de 5 développeurs dans un contexte Scrum.<br/>
                Assainissement technique de l'application puis gestion d'une crise majeure de production.
            </>
        ),
        stack: [
            "Java 8",
            "Spring Boot",
            "Tomcat 9",
            "Angular 5",
            "Bootstrap 4",
            "Cassandra",
            "Jenkins",
            "Ansible"
        ]
    },
    {
        dates: {
            start: {
                month: 4,
                year: 2018
            },
            end: {
                month: 5,
                year: 2019
            }
        },
        company: <a href="http://groupeonepoint.com/"><img alt="Logo de onepoint" src={Onepoint} /></a>,
        project: "Référentiel Client",
        position: "Leader Technique",
        description: (
            <>
                Microservice de gestion des clients d'<strong>Enedis</strong>.<br/>
                Moteur de recherche dont dépendent nombreux partenaires.<br/>
                Deux équipes projet à Paris et Bordeaux dans un contexte Scrum et Nexus.<br/>
                Réalisation de la migration vers RedHat OpenShift.    
            </>
        ),
        stack: [
            "Java 8",
            "Spring Boot",
            "Tomcat 8",
            "Angular 5",
            "Oracle DB",
            "OpenShift",
            "Jenkins",
            "Ansible"
        ]
    }
];