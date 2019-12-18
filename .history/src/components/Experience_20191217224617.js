import React from 'react';
import './Experience.scss';

class ExperienceDate extends React.Component {

    render() {
        return (<div className="date-container">{ this.props.date }</div>);
    }
}

class ExperienceProject extends React.Component {

    render() {
        return (<h1>{ this.props.value }</h1>);
    }
}

class ExperiencePosition extends React.Component {

    render() {
        return (<h3>- { this.props.value }</h3>);
    }
}

class ExperienceDescription extends React.Component {

    render() {
        return (<p>{ this.props.value }</p>);
    }
}

export default class Experience extends React.Component {

    static Date = ExperienceDate;
    static Project = ExperienceProject;
    static Position = ExperiencePosition;
    static Description = ExperienceDescription;

    render() {     
        return (
            <div id="experience">
                <ul id="timeline">
                    <li>
                        {
                            React.Children.map(this.props.children, child => {
                                if (child.type === ExperienceDate) {
                                    return React.cloneElement(child, { date: child.props.children });
                                }
                            })
                        }
                        <div className="details">
                            {
                                React.Children.map(this.props.children, child => {
                                    if (child.type === ExperienceDate) {
                                        return;
                                    }

                                    return React.cloneElement(child, { value: child.props.children });
                                })
                            }
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