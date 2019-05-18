import React from 'react';
import {Card, Container, Col, Button, Row} from 'react-bootstrap';
class pubcard extends React.Component {

  render() {

    let val1,
      val2,
      val3;
    let p = this.props;

    if (p.edit === true && p.delete === true) {
      val1 = 8
      val2 = 2
      val3 = 2
    } else if (p.edit === false && p.delete === true) {
      val1 = 8
      val2 = 0
      val3 = 2
    } else if (p.edit === true && p.delete === false) {
      val1 = 8
      val2 = 2
      val3 = 0
    } else {
      val1 = 8
      val2 = 0
      val3 = 0
    }

    let Edit = () => {
        if(p.edit)
      return (
        <Col sm={val2}>
          <Button>edit</Button>
        </Col>
      )
      else{
          return(<div></div>)
      }
    }

    let Delete = () => {
        if(p.delete)
      return (
        <Col sm={val3}>
          <Button>delete</Button>
        </Col>
      )
      else{
          return(<div></div>)
      }
    }

    return (
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <Col sm={val1}>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.author}</Card.Subtitle>
                <Card.Link href={this.props.link}>Link</Card.Link>
              </Col>
              <Edit/>
              <Delete/>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  }

}

export default pubcard;