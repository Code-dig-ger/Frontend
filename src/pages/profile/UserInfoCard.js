import { useState, useEffect } from 'react'

import PlatformUsername from './PlatformUsername'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { getProfile, getFriendReq } from '../../actions/profile.actions'

import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap'

import FriendList from '../../components/profile/FriendList.js'
import FriendsBtn from '../../components/profile/FriendsBtn.js'
import MentorBtn from '../../components/profile/MentorBtn.js'

import CodeforcesImg from '../../assets/cf-logo.png'
import CodechefImg from '../../assets/codechef.png'
import SpojImg from '../../assets/spojShort.png'
import ProfileIcon from '../../assets/ProfileIcon'

let platformsData = []

function UserInfoCard({ uu }) {
  const [userInfo, setUserInfo] = useState()
  const [access, setAccess] = useState()
  const [creds, setCreds] = useLocalStorage('creds')

  const [nestedModal3, setNestedModal3] = useState(false)
  const [friendReq, setFriendReq] = useState({})
  const [friendReqStatus, setFriendReqStatus] = useState(false)

  const toggleNested3 = (e) => {
    e.preventDefault()
    setNestedModal3(!nestedModal3)
  }

  console.log(userInfo)

  if (userInfo) {
    platformsData = [
      {
        name: 'Codeforces',
        logo: CodeforcesImg,
        url: 'https://www.codeforces.com/profile',
        username: userInfo.result.codeforces,
      },
      {
        name: 'CodeChef',
        logo: CodechefImg,
        url: 'https://www.codechef.com/users',
        username: userInfo.result.codechef,
      },
      {
        name: 'SPOJ',
        logo: SpojImg,
        url: 'https://www.spoj.com/users',
        username: userInfo.result.spoj,
      },
      {
        name: 'UVA',
        logo: UVAImg,
        url: 'https://www.uva.com/users',
        username: userInfo.result.uva_handle,
      },
      {
        name: 'Atcoder',
        logo: AtcoderImg,
        url: 'https://www.atcoder.com/users',
        username: userInfo.result.atcoder,
      },
    ]
  }

  useEffect(() => {
    if (creds) {
      setAccess(creds.access)
    }

    async function fetchUserInfo() {
      const res = await getProfile(creds.access, uu).then((res) =>
        setUsers(res)
      )

      if (creds) {
        const response = await getFriendReq(creds.access)
          .then((res) => setFriendReq(res))
          .then(() => {
            setFriendReqStatus(true)
          })
      } else {
        alert('Please Login to Proceed')
        window.location = '/login'
      }
    }

    fetchUserInfo()
  }, [])

  return (
    <div>
      <div className="card1">
        <div className="card-body">
          {userInfo && userInfo.result.about_user === 'Logged In User Itself' && (
            <div>
              <div style={{ width: '2rem' }}>
                <ProfileIcon />
              </div>
              <Modal isOpen={nestedModal3} toggle={toggleNested3}>
                <ModalHeader>List of Received Friend Requests</ModalHeader>
                <ModalBody style={{ marginBottom: '20px' }}>
                  {friendReqStatus ? (
                    <FriendList friends={friendReq} i="2" acc={acc} />
                  ) : (
                    <Loading />
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggleNested3}>
                    Close{' '}
                  </Button>{' '}
                </ModalFooter>
              </Modal>
            </div>
          )}
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar7.png"
              alt="Admin"
              className="rounded-circle"
              style={{ height: '8rem', width: '8rem' }}
              width="150"
            />
            <div className="mt-3">
              <h4 style={{ color: 'black' }}>{userInfo.result.name}</h4>
              <p className="text-secondary mb-5">{uu}</p>
              <FriendsBtn
                creds={creds}
                acc={access}
                handle={uu}
                user={userInfo}
              />
              <MentorBtn
                creds={creds}
                acc={access}
                handle={uu}
                user={userInfo}
              />
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          {platformsData.map(({ name, logo, url, username }) => (
            <PlatformUsername
              platform={name}
              logo={logo}
              url={url}
              username={username}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UserInfoCard
