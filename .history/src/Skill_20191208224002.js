import React from 'react';
import { Card } from 'react-bootstrap';

export default class Skill extends React.Component {

    render() {
        return (
            <Card className="skill text-center p-3" >
                <Card.Img src={this.props.icon} className="mx-auto" /> 
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}