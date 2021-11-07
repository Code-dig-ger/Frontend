import React, { useState } from 'react'
import './info.css'

import Navbar from '../Header/Navbar'
import Footer from '../Footer/FooterSmall'
import Spinner from 'react-bootstrap/Spinner'

const Info = () => {
  //states for handles
  const [name, setName] = useState(null)
  let [codeforces, setCodeforces] = useState(null)
  let [codechef, setCodechef] = useState(null)
  let [atcoder, setAtcoder] = useState(null)
  let [spoj, setSpoj] = useState(null)
  let [uv, setUv] = useState(null)

  const [msg, setMsg] = useState('Create Your Profile')
  const [user, setUser] = useState()
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(false)

  async function handle(e) {
    e.preventDefault()
    if (checked == false) {
      alert('Please check the checkbox.')
      return
    }

    setShow(true)
    const creds = await JSON.parse(localStorage.getItem('creds'))

    const acc = creds.access
    const ref = creds.refresh
    const uu = JSON.stringify(creds.username)
    const usser = JSON.parse(uu)
    await setUser(usser)
    if (codeforces == '') {
      codeforces = null
    }
    if (codechef == '') {
      codechef = null
    }
    if (atcoder == '') {
      atcoder = null
    }
    if (spoj == '') {
      spoj = null
    }
    if (uv == '') {
      uv = null
    }
    const response = await fetch(
      `https://api.codedigger.tech/auth/profile/${usser}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${acc}`,
        },
        body: JSON.stringify({
          name: name,
          codeforces: codeforces,
          codechef: codechef,
          atcoder: atcoder,
          spoj: spoj,
          uva_handle: uv,
        }),
      }
    )

    const data = await response.json()
    // console.log(data);
    if (response.status === 200) {
      localStorage.setItem(
        'creds',
        JSON.stringify({
          access: acc,
          refresh: ref,
          first: false,
          username: usser,
        })
      )

      setMsg('Successful.....')
      window.location = `/profile/${usser}`
    } else if (data.status == 'FAILED') {
      alert(data.error)
    } else {
      let m = ''
      if (data.name) {
        m += 'Name :' + data.name + '\n'
      }
      if (data.codeforces) {
        m += 'Codeforces :' + data.codeforces + '\n'
      }
      if (data.codechef) {
        m += 'Codechef :' + data.codechef + '\n'
      }
      if (data.atcoder) {
        m += 'Atcoder :' + data.atcoder + '\n'
      }
      if (data.spoj) {
        m += 'Spoj :' + data.spoj + '\n'
      }
      if (data.uva_handle) {
        m += 'UVA :' + data.uva_handle + '\n'
      }
      alert(m)
    }
    setShow(false)
  }
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="outeri">
        <div className="flex-containeri">
          <div className="content-containeri">
            <div className="form-containeri">
              <form className="thisformi">
                <h3 className="headingi">{msg}</h3>
                <h6 style={{ color: 'white' }}>
                  Fields marked with asteric are reqired.
                </h6>
                <br></br>
                <input
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  className="inputi"
                  type="text"
                  required
                />
                <br></br>
                <input
                  placeholder="Codeforces handle"
                  onChange={(e) => setCodeforces(e.target.value)}
                  className="inputi"
                  type="text"
                  required
                />
                <br></br>

                <input
                  placeholder="Codechef handle"
                  onChange={(e) => setCodechef(e.target.value)}
                  className="inputi"
                  type="text"
                />
                <br></br>

                <input
                  placeholder="Atcoder handle"
                  onChange={(e) => setAtcoder(e.target.value)}
                  className="inputi"
                  type="text"
                />
                <br></br>

                <input
                  placeholder="Spoj handle"
                  onChange={(e) => setSpoj(e.target.value)}
                  className="inputi"
                  type="text"
                />

                <br></br>
                <input
                  placeholder="UVA handle"
                  onChange={(e) => setUv(e.target.value)}
                  className="inputi"
                  type="text"
                />
                <br></br>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                    />
                    <span>
                      {' '}
                      I have read and agree to the{' '}
                      <a href="/privacy" target="_blank">
                        Privacy Policy
                      </a>{' '}
                      and <br></br>{' '}
                      <a href="/terms" target="_blank">
                        Terms and Services.
                      </a>
                    </span>
                  </label>
                </p>
                <input
                  onClick={handle}
                  type="submit"
                  value={show ? 'Processing...' : 'SUBMIT'}
                  className="submit-btni"
                />
                {show ? (
                  <Spinner className="loading-animation" animation="border" />
                ) : (
                  <></>
                )}
                <br></br>
                <br></br>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <Footer />
    </>
  )
}
export default Info
