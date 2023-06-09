import React from 'react';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ViewPlacementstudent() {
  return (
    <div className='container'>
      <div className='text-center'>
        <h1>Placement Students</h1>
      </div>
     
      <Carousel interval={1000} pause='hover'>
        <Carousel.Item>
          <CardGroup >
            <Card  style={{ width: '400px' }}>
              <Card.Img variant="top" src="img/feature.jpg" style={{ height: '400px' }} />
              <Card.Body>
                <Card.Title>Student Name 1</Card.Title>
                <Card.Text>
                  Placement description 1
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='placement' style={{ width: '400px' }}>
              <Card.Img variant="top" src="img/feature.jpg" style={{ height: '400px' }} />
              <Card.Body>
                <Card.Title>Student Name 2</Card.Title>
                <Card.Text>
                  Placement description 2
                </Card.Text>
              </Card.Body>
            </Card>

            <Card   style={{ width: '400px' }}>
              <Card.Img variant="top" src="img/feature.jpg" style={{ height: '400px' }} />
              <Card.Body>
                <Card.Title>Student Name 3</Card.Title>
                <Card.Text>
                  Placement description 3
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup>
            <Card  style={{ width: '400px' }}>
              <Card.Img variant="top" src="img/feature.jpg" style={{ height: '400px' }} />
              <Card.Body>
                <Card.Title>Student Name 4</Card.Title>
                <Card.Text>
                  Placement description 4
                </Card.Text>
              </Card.Body>
            </Card>

            <Card  style={{ width: '400px' }}>
              <Card.Img variant="top" src="img/feature.jpg" style={{ height: '400px' }} />
              <Card.Body>
                <Card.Title>Student Name 5</Card.Title>
                <Card.Text>
                  Placement description 5
                </Card.Text>
              </Card.Body>
            </Card>

            <Card  style={{ width: '400px' }}>
              <Card.Img variant="top" src="img/feature.jpg" style={{ height: '400px' }} />
              <Card.Body>
                <Card.Title>Student Name 6</Card.Title>
                <Card.Text>
                  Placement description 6
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ViewPlacementstudent;
