import React, { useState, useEffect } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonToggle,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
} from 'reactstrap'
import Loading from '../logreg/loading'
import MentorList from './MentorList.js'
import './mentorModal.css'

const MentorModal = ({ creds, acc, handle, user, mentors }) => {
  const [modal, setModal] = useState(false)
  const toggle = (e) => {
    e.preventDefault()
    setModal(!modal)
  }

  const [formUsername, setFormUsername] = useState('')
  const [friendStatus, setFriendStatus] = useState({})

  async function submitForm(e) {
    e.preventDefault()
    // console.log(formUsername);
    const res = await fetch(`http://143.110.253.225/codeforces/mentor`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${acc}`,
      },
      body: JSON.stringify({
        guru: formUsername,
      }),
    })
    res.json().then((res) => setFriendStatus(res))
    window.location.reload()
  }

  return (
    <>
      <ButtonToggle className="MentorButton" onClick={toggle}>
        <svg
          style={{ width: '27px' }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
        >
          <defs>
            <linearGradient
              id="WatsonPersonalityInsights_svg__a"
              x1="7"
              y1="17.5"
              x2="13"
              y2="17.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-opacity="0"></stop>
              <stop offset=".8"></stop>
            </linearGradient>
            <linearGradient
              id="WatsonPersonalityInsights_svg__b"
              x1="-4263"
              y1="-3384.5"
              x2="-4257"
              y2="-3384.5"
              gradientTransform="translate(4282 3402)"
              xlinkHref="#WatsonPersonalityInsights_svg__a"
            ></linearGradient>
            <linearGradient
              id="WatsonPersonalityInsights_svg__c"
              x1="-411.5"
              y1="-3817.5"
              x2="-402.5"
              y2="-3817.5"
              gradientTransform="translate(423 3833)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-opacity="0"></stop>
              <stop offset=".53"></stop>
            </linearGradient>
            <linearGradient
              id="WatsonPersonalityInsights_svg__e"
              y1="32"
              x2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".1" stop-color="#be95ff"></stop>
              <stop offset=".9" stop-color="#4589ff"></stop>
            </linearGradient>
            <mask
              id="WatsonPersonalityInsights_svg__d"
              x="0"
              y="0"
              width="32"
              height="32"
              maskUnits="userSpaceOnUse"
            >
              <path
                d="M30 6a4 4 0 10-5 3.858V15a2 2 0 01-2 2h-6v-7h3V2h-8v8h3v7H9a2 2 0 01-2-2V9.858a4 4 0 10-2 0V15a4 4 0 004 4h14a4 4 0 004-4V9.858A4 4 0 0030 6zM14 4h4v4h-4zM4 6a2 2 0 112 2 2 2 0 01-2-2zm22 2a2 2 0 112-2 2 2 0 01-2 2z"
                fill="#f4f4f4"
              ></path>
              <path
                fill="url(#WatsonPersonalityInsights_svg__a)"
                d="M7 15h6v5H7z"
              ></path>
              <path
                transform="rotate(180 22 17.5)"
                fill="url(#WatsonPersonalityInsights_svg__b)"
                d="M19 15h6v5h-6z"
              ></path>
              <path
                transform="rotate(90 16 15.5)"
                fill="url(#WatsonPersonalityInsights_svg__c)"
                d="M11.5 11.5h9v8h-9z"
              ></path>
            </mask>
          </defs>
          <g data-name="Layer 2">
            <g data-name="Dark theme icons">
              <g mask="url(#WatsonPersonalityInsights_svg__d)">
                <path
                  fill="url(#WatsonPersonalityInsights_svg__e)"
                  d="M0 0h32v32H0z"
                ></path>
              </g>
              <path
                d="M13 25h6a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-6a1 1 0 00-1 1v2h-2v-2a3 3 0 013-3zM20 20a4 4 0 11-4-4 4 4 0 014 4zm-6 0a2 2 0 102-2 2 2 0 00-2 2z"
                fill="#f4f4f4"
              ></path>
            </g>
          </g>
        </svg>
        <span style={{ fontSize: '16px' }}>My Mentors</span>
      </ButtonToggle>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>List of Mentors</ModalHeader>
        <ModalBody>
          {mentors ? <MentorList mentors={mentors} acc={acc} /> : <Loading />}
        </ModalBody>
        <Form onSubmit={submitForm} style={{ marginBottom: '70px' }}>
          <Label for="formUsername">Add Mentor</Label>
          <div style={{ display: 'flex' }}>
            <Input
              style={{ marginLeft: '11px', width: '73%' }}
              type="text"
              id="formUsername"
              onChange={(e) => setFormUsername(e.target.value)}
              placeholder="Enter Username"
            />
            <Button
              style={{
                position: 'relative',
                top: '-4px',
                left: '0px',
                borderRadius: '13px',
              }}
              onClick={submitForm}
              type="submit"
            >
              Add
            </Button>
          </div>
        </Form>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close{' '}
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MentorModal
