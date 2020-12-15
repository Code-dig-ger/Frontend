import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

// function adjustLine(from, to, line){

//     var fT = from.offsetTop  + from.offsetHeight/2;
//     var tT = to.offsetTop    + to.offsetHeight/2;
//     var fL = from.offsetLeft + from.offsetWidth/2;
//     var tL = to.offsetLeft   + to.offsetWidth/2;
    
//     var CA   = Math.abs(tT - fT);
//     var CO   = Math.abs(tL - fL);
//     var H    = Math.sqrt(CA*CA + CO*CO);
//     var ANG  = 180 / Math.PI * Math.acos( CA/H );
  
//     if(tT > fT){
//         var top  = (tT-fT)/2 + fT;
//     }else{
//         var top  = (fT-tT)/2 + tT;
//     }
//     if(tL > fL){
//         var left = (tL-fL)/2 + fL;
//     }else{
//         var left = (fL-tL)/2 + tL;
//     }
  
//     if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
//       ANG *= -1;
//     }
//     top-= H/2;
  
//     line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
//     line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
//     line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
//     line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
//     line.style["-transform"] = 'rotate('+ ANG +'deg)';
//     line.style.top    = top+'px';
//     line.style.left   = left+'px';
//     line.style.height = H + 'px';
//   }
//   ;

const MainCard = (props) => {
    // adjustLine(
    //     document.getElementById('div1'), 
    //     document.getElementById('div2'),
    //     document.getElementById('line')
    //   )
  return (
    <div>
      <Card style={{
          width: '80%',
          alignSelf: 'center'
      }}>
        <CardBody style={{
            border: '2px solid white'
        }}>
          <CardTitle tag="h5">Warm Up</CardTitle>
          <Button>Solve</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MainCard;