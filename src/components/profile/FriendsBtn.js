import React, { useEffect, useState } from 'react'
import { ButtonToggle } from 'reactstrap'
import ListModal from './ListModal'
import './friendsBtn.css'
import $, { onClick } from 'jquery'

const FriendsBtn = ({ creds, acc, handle, user }) => {
  async function sendReq(e) {
    // console.log("reached");
    e.preventDefault()
    const res = await fetch(
      `http://143.110.253.225/auth/user/send-request`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${acc}`,
        },
        body: JSON.stringify({
          to_user: handle,
        }),
      }
    )
    res.json()
    // .then(res => console.log(res));
    window.location.reload()
  }

  async function acceptReq(e) {
    e.preventDefault()
    const res = await fetch(
      `http://143.110.253.225/auth/user/accept-request`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${acc}`,
        },
        body: JSON.stringify({
          from_user: handle,
        }),
      }
    )
    res.json()
    // .then(res => console.log(res));
    window.location.reload()
  }

  async function removeFrnd(e) {
    e.preventDefault()
    const res = await fetch(
      `http://143.110.253.225/auth/user/remove-friend`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${acc}`,
        },
        body: JSON.stringify({
          user: handle,
        }),
      }
    )
    res.json()
    // .then(res => console.log(res));
    window.location.reload()
  }

  function showList(e) {
    e.preventDefault()
  }

  const [friendsOptions, setFriendsOptions] = useState(true)

  const toggle = (e) => {
    e.preventDefault()
    setFriendsOptions(!friendsOptions)
    if (friendsOptions) {
      // console.log("true");
      $('.popout-right>.popout-menu-right').removeClass('hideOptions')
      $('.popout-right>.popout-menu-right').addClass('showOptions')
      $('.window-button>.icon-popout-right').removeClass(
        'glyphicon-menu-hamburger'
      )
      $('.window-button>.icon-popout-right').addClass(
        'animated rotateIn glyphicon-remove'
      )
      $('.dropdown-link-right').addClass('animated bounceIn')
    } else {
      // console.log("false");
      $('.popout-right>.popout-menu-right').removeClass('showOptions')
      $('.popout-right>.popout-menu-right').addClass('hideOptions')
      $('.window-button>.icon-popout-right').removeClass(
        'animated rotateIn glyphicon-remove'
      )
      $('.dropdown-link-right').removeClass('animated bounceIn')
      $('.window-button>.icon-popout-right').addClass(
        'animated bounceIn glyphicon-menu-hamburger'
      )
    }
  }

  if (user.result.about_user === 'Not Authenticated') {
    return (
      <div>
        {alert('Please login to Proceed!!')}
        {window.location.assign('/')}
      </div>
    )
  } else if (user.result.about_user === 'Stalking') {
    return (
      <div>
        <ButtonToggle
          style={{
            position: 'absolute',
            right: '200px',
            bottom: '245px',
          }}
          onClick={sendReq}
        >
          {' '}
          Add Friend
        </ButtonToggle>
      </div>
    )
  } else if (user.result.about_user === 'Request Sent') {
    return (
      <div>
        <ButtonToggle
          style={{
            position: 'absolute',
            right: '200px',
            bottom: '265px',
          }}
        >
          {' '}
          Request Sent
        </ButtonToggle>
      </div>
    )
  } else if (user.result.about_user === 'Logged In User Itself') {
    return (
      <>
        <ListModal creds={creds} acc={acc} handle={handle} user={user} />
      </>
    )
  } else if (user.result.about_user === 'Request Received') {
    return (
      <div>
        <ButtonToggle
          style={{
            position: 'absolute',
            right: '168px',
            bottom: '275px',
          }}
          onClick={acceptReq}
        >
          {' '}
          Accept Request
        </ButtonToggle>
      </div>
    )
  } else if (user.result.about_user === 'Friends') {
    return (
      <div>
        <ButtonToggle
          style={{
            position: 'absolute',
            right: '170px',
            bottom: '275px',
          }}
          onClick={removeFrnd}
        >
          {' '}
          Remove Friend
        </ButtonToggle>
      </div>
    )
  } else {
    return null
  }
}

export default FriendsBtn
