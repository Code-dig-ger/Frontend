import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({problem}) {
  const classes = useStyles();

  // console.log(playlist)

  return (
    <div className={classes.root} >
      <Card style={{borderLeft: '12px solid #e0e0e0'}}>
      <div style={{display:'flex',padding:'1rem', width:'100%', alignItems:'center', justifyContent:'space-between'}}>
            <Typography className={classes.heading}>{problem.name}</Typography>
            <Button variant="contained" target="blank" href={`https://codeforces.com/contestRegistration/${problem.contestId}/virtual/true`}>Solve</Button>
          </div>
          <CardContent>
          <Typography>
            <strong>Duration</strong> : {problem.duration / 60 / 60} hours
          </Typography>
          </CardContent>
      </Card>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <div style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'space-between'}}>
            <Typography className={classes.heading}>{problem.name}</Typography>
            <Button variant="contained" target="blank" href={`https://codeforces.com/contest/${problem.contestId}`}>Solve</Button>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{flexDirection:'column'}}>
          <Typography>
            <strong>Duration</strong> : {problem.duration / 60 / 60} hours
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
