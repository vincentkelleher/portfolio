import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Experience.scss';

class ExperienceCompany extends React.Component {

    render() {
        return (<div className="company">{ this.props.value }</div>);
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
        let technologies = this.props.items
            .map(technology => React.cloneElement(technology, { 
                key: technology.props.children,
                value: technology.props.children 
            }));

        return (
            <>
                <span>Technologies :</span>
                <ul>
                    { technologies }
                </ul>
            </>
        );
    }
}

class ExperienceTechnology extends React.Component {

    render() {
        return (<li key={ this.props.key }>{ this.props.value }</li>);
    }
}

export default class Experience extends React.Component {

    static Company = ExperienceCompany;
    static Project = ExperienceProject;
    static Position = ExperiencePosition;
    static Description = ExperienceDescription;
    static Stack = ExperienceStack;
    static Technology = ExperienceTechnology;

    render() {     
        return (
            <Row className="timeline snap-scroll-section">
                <Col lg="12" className="details">
                    {
                        React.Children.map(this.props.children, child => {
                            if (child.type === ExperienceStack) {
                                return React.cloneElement(child, { items: child.props.children });
                            }

                            return React.cloneElement(child, { value: child.props.children });
                        })
                    }
                </Col>
            </Row>
        );
    }    
}