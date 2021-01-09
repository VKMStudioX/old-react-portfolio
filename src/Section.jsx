import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, CardGroup,  CardSubtitle, Badge} from 'reactstrap';




const Section = (props) => {

    const sectionCards = props.data.map((item) => {
        return (
            <Card body inverse color={item.color} key={item.id}>
            <CardBody>
            <CardHeader><h3><u>{item.id}</u></h3></CardHeader>
              <CardText>
              <h4><Badge color={item.color === "secondary" ? "warning" : "secondary"} >{item.contentId1}</Badge></h4> {item.contentText1} <br/>
              <h4><Badge color={item.color === "secondary" ? "warning" : "secondary"}>{item.contentId2}</Badge></h4> {item.contentText2}
                </CardText>
              {/* <Button>Button</Button> */}
            </CardBody>
          </Card>
        );
      });


  return (
    <div>

<CardGroup>
     {sectionCards}
    </CardGroup>
{/* 
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>

      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card> */}
    </div>
  );
};

export default Section;