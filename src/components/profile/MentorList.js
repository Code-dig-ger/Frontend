import React from 'react'
import { Button } from 'reactstrap'
import Loading from '../logreg/loading'

const MentorList = ({ mentors, acc }) => {
  // console.log(mentors);
  async function removeMentor(mName) {
    const res = await fetch(`https://api.codedigger.tech/codeforces/mentor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${acc}`,
      },
      body: JSON.stringify({
        guru: mName,
      }),
    })
    res.json()
  }
  if (mentors) {
    return (
      <div style={{ fontSize: '1.1rem', marginBottom: '50px' }}>
        {/* {console.log(mentors)} */}
        <ul>
          {mentors.result.map(function (mentor) {
            const profileLink = 'https://codeforces.com/profile/' + mentor
            return (
              <li style={{ marginBottom: '10px' }}>
                <b>
                  <a href={profileLink}>{mentor}</a>
                </b>
                <Button
                  color="success"
                  onClick={() => {
                    removeMentor(mentor)
                  }}
                  style={{
                    padding: '5px 7px',
                    position: 'relative',
                    left: '20px',
                    bottom: '0',
                    borderRadius: '10%',
                  }}
                >
                  Delete
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  } else {
    ;<Loading />
  }
}

export default MentorList
