

class Skill extends React.Component {



    render() {
        <Card className="skill text-center" >
            <Card.Img src={Devops} className="mx-auto" /> 
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                Plus qu'une mode, le devops est devenu une méthodologie incontournable pour le cycle de vie d'un projet.
                </Card.Text>
            </Card.Body>
        </Card>
    }
}