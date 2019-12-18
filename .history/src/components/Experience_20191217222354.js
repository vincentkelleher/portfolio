import React from 'react';
import './Experience.scss';

class ExperienceDate extends React.Component {

    render() {
        return (<div>Puteuh</div>);
    }
}

export default class Experience extends React.Component {

    static Date = ExperienceDate;

    renderDate() {
        return React.Children.map(this.props.children, child => {
            return child;
        });
    }

    render() {        
        return (
            <div id="experience">
                <ul id="timeline">
                    <li>
                        <div className="date-container">
                            { this.renderDate() }
                        </div>
                        <div className="details">
                            <h1>EneCAD</h1><h3>- Référent Technique</h3>
                            <p className="info">
                                Application de gestion des dossiers d'appel de dépannage des clients d'<strong>Enedis</strong>.<br/>
                                Disponibilité 24/7 avec des nombreuses intéractions avec des partenaires.<br/>
                                Accompagnement d'une équipe de 5 développeurs.
                            </p>
                            <span className="label">Technologies</span><ul>
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
    }    
}