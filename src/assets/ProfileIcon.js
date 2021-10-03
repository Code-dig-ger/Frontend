const ProfileIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <defs>
        <linearGradient
          id="WatsonOnboard_svg__a"
          x1="4"
          y1="24"
          x2="4"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".2"></stop>
          <stop offset="1" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="WatsonOnboard_svg__b"
          x1="28.5"
          y1="-1959"
          x2="28.5"
          y2="-1976"
          gradientTransform="translate(-1 1984)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".5"></stop>
          <stop offset="1" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="WatsonOnboard_svg__d"
          y1="32"
          x2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".1" stop-color="#a56eff"></stop>
          <stop offset=".9" stop-color="#0f62fe"></stop>
        </linearGradient>
        <mask
          id="WatsonOnboard_svg__c"
          x="0"
          y="0"
          width="32"
          height="32"
          maskUnits="userSpaceOnUse"
        >
          <path
            d="M3.873 23A14 14 0 0125.9 6.1l-1.415 1.415A12 12 0 005.6 22zM16 29.993A13.952 13.952 0 016.1 25.9l1.414-1.414A12 12 0 0026.4 10l1.731-1A14 14 0 0116 29.993z"
            fill="#fff"
          ></path>
          <path fill="url(#WatsonOnboard_svg__a)" d="M1 9h6v15H1z"></path>
          <path
            transform="rotate(180 27.5 16.5)"
            fill="url(#WatsonOnboard_svg__b)"
            d="M24 8h7v17h-7z"
          ></path>
        </mask>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Light theme icons">
          <g mask="url(#WatsonOnboard_svg__c)">
            <path fill="url(#WatsonOnboard_svg__d)" d="M0 0h32v32H0z"></path>
          </g>
          <path
            d="M19 18h-6a3 3 0 00-3 3v2h2v-2a1 1 0 011-1h6a1 1 0 011 1v2h2v-2a3 3 0 00-3-3zM16 17a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zM30 12h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z"
            fill="#001d6c"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default ProfileIcon
