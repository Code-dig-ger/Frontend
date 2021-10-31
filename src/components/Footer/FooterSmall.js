import React, { useState } from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faGooglePlus,
  faGooglePlusSquare,
  faLinkedin,
  faLinkedinIn,
  faInstagram,
  faInstagramSquare,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

function FooterSmall() {
  const [showFooter, setShowFooter] = useState(false)
  window.addEventListener('scroll', (e) => {
    myFunction()
  })
  function myFunction() {
    // console.log(window.pageYOffset);
    if (window.pageYOffset < 100) {
      setShowFooter(false)
    } else {
      setShowFooter(true)
    }
  }

  return (
    <div
      id="myfooter"
      className={`footerSmall m-0 ${
        showFooter || window.pageYOffset === 0 ? '' : 'hide'
      }`}
    >
      <div className="container-fluid p-4 m-0">
        <div className="row justify-content-center">
          <div className="col-6 col-sm-6">
            <p
              style={{
                fontSize: '18px',
                padding: '0px',
                margin: '0px',
              }}
            >
              © Copyright Codedigger 2021
            </p>
          </div>

          <div className="col-6 col-sm-6 m-0">
            <div className="float-right m-0">
              <a
                className="social_media"
                target="_blank"
                href="https://www.facebook.com/practicewithcodedigger"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                className="social_media"
                target="_blank"
                href="https://www.linkedin.com/company/codedigger"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                className="social_media"
                target="_blank"
                href="https://github.com/Code-dig-ger"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                className="social_media"
                target="_blank"
                href="https://www.youtube.com/channel/UCY5XRYpEGKT9cpzZmfWvh6A"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSmall
