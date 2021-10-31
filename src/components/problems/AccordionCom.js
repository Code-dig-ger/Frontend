import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import CodechefImg from '../../assets/codechef.png'
import CodeforcesImg from '../../assets/profile/images/codeforce.png'
import SPOJImg from '../../assets/spojShort.png'
import UVAImg from '../../assets/uva_online_judge.png'
import AtcoderImg from '../../assets/atcoder.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function SimpleAccordion({ problem }) {
  const classes = useStyles()
  const [platformIcon, setPlatformIcon] = useState()

  useEffect(() => {
    let img
    if (problem.platform == 'Codechef') {
      img = CodechefImg
    } else if (problem.platform == 'Codeforces') {
      img = CodeforcesImg
    } else if (problem.platform == 'Spoj') {
      img = SPOJImg
    } else if (problem.platform == 'Uva') {
      img = UVAImg
    } else {
      img = AtcoderImg
    }

    setPlatformIcon(img)
  }, [])

  return (
    <div className={classes.root}>
      <Accordion style={{ borderLeft: '12px solid #e0e0e0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <img src={platformIcon} alt="Platform Icon" height="30px" />
              <Typography
                className={classes.heading}
                style={{ float: 'right', marginLeft: '20px', marginTop: '5px' }}
              >
                {problem.name}
              </Typography>
            </div>

            <Button variant="contained" target="blank" href={`${problem.url}`}>
              Solve
            </Button>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: 'column' }}>
          <Typography>
            <strong>Rating</strong> : {problem.rating ? problem.rating : 'NA'}
          </Typography>
          <Typography>
            <strong>Platform</strong> :{' '}
            {problem.platform ? problem.platform : 'NA'}
          </Typography>
          <Typography>
            {console.log(problem.tags)}
            <strong>Tags</strong> :{' '}
            {problem.tags
              ? JSON.stringify(problem.tags)
                  .replace(/['"]+/g, ' ')
                  .replace(/\[/g, '')
                  .replace(/]/g, '')
              : 'NA'}
          </Typography>
          <Typography>
            <strong>Difficulty</strong> :{' '}
            {problem.difficulty ? problem.difficulty : 'NA'}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
