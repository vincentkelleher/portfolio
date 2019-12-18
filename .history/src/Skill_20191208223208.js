

class Skill extends React.Component {



    render() {
        <Card className="skill text-center" >
            <Card.Img src={this.props.icon} className="mx-auto" /> 
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                    {this.props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    }
}