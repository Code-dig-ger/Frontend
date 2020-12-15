import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const MainCard = (props) => {
    

    if(props.solved === "true"){
      return(
        <>
      
        <Card style={{
          width: '80%',
          alignSelf: 'center'
      }}>
          

        
        <CardBody style={{
            border: '2px solid white',
            backgroundColor: 'green'
        }}>
          <CardTitle tag="h5">Warm Up</CardTitle>
          <Button>Solve</Button>
        </CardBody>
      </Card>
      
      </>
      )
    }else{
  return (
    <div>
      
      <Card style={{
          width: '80%',
          alignSelf: 'center'
      }}>
          

        
        <CardBody style={{
            border: '2px solid white',
            backgroundColor: 'red'
        }}>
          <CardTitle tag="h5">Warm Up</CardTitle>
          <Button>Solve</Button>
        </CardBody>
      </Card>
      <div class="container_card">
       <div class="lock"></div>
       
        </div>
    </div>
  )
      }
};


export default MainCard;