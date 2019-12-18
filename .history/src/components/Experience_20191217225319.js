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

class ExperienceStack extends React.Component {

    render() {
        let items = this.props.values.map(v => <li>{v}</li>);

        return (
            <ul><span>Technologies</span>
                { items }
            </ul>
        );
    }
}

class ExperienceTechnology extends React.Component {

    render() {
        return (<li>{ this.props.value }</li>);
    }
}

export default class Experience extends React.Component {

    static Date = ExperienceDate;
    static Project = ExperienceProject;
    static Position = ExperiencePosition;
    static Description = ExperienceDescription;
    static Stack = ExperienceStack;
    static Technology = ExperienceTechnology;

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

                                    console.log(child);

                                    if (child.type === ExperienceStack) {
                                        return React.cloneElement(child, { values: child.props.children });
                                    }

                                    return React.cloneElement(child, { value: child.props.children });
                                })
                            }
                        </div>
                    </li>
                </ul>
            </div>
        );
    }    
}