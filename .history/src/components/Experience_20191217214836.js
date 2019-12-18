import React from 'react';
import './Experience.scss';

export default () => {

    return (
        <div id="experience">
            <ul id="timeline">
                <li>
                    <div class="date-container">
                        mai 2019 - mars 2020
                    </div>
                    <div class="details">
                        <h1>EneCAD</h1><h3>- Référent Technique</h3>
                        <p class="info">
                            Application de gestion des dossiers d'appel de dépannage des clients d'<strong>Enedis</strong>.<br/>
                            Disponibilité 24/7 avec des nombreuses intéractions avec des partenaires.<br/>
                            Accompagnement d'une équipe de 5 développeurs.
                        </p>
                        <span class="label">Technologies</span><ul>
                            <li>Java 8</li>
                            <li>Spring Boot</li>
                            <li>Angular 5</li>
                            <li>Cassandra</li>
                            <li>Jenkins</li>
                            <li>Ansible</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};