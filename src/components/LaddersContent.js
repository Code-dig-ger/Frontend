import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';

const LaddersContent = (props) => {
  return (
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading>{props.title}</ListGroupItemHeading>
        <ListGroupItemText>
        {props.des}
        </ListGroupItemText>
        <Button className='primary'>Solve</Button>
      </ListGroupItem>
      
    </ListGroup>
  );
}

export default LaddersContent;