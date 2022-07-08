import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap'

function Courses() {
    return (
         
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title> Frontend Course</Card.Title>
                <Card.Text>
                  This a full complete frontend course
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
    
    
    
}

export default Courses;