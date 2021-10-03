function PlatformUsername({ platform, url, logo, username }) {
  return (
    <li className="d-flex justify-content-between align-items-center flex-wrap handlesItem">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          style={{
            height: '1.5rem',
            width: '1.5rem',
            marginRight: '0.5rem',
          }}
          src={logo}
        ></img>
        <h6 className="mb-0">{platform}</h6>
      </div>
      <span className="text-secondary">
        {username ? (
          <a className="handleName" href={`${url}/${username}`}>
            {username}
          </a>
        ) : (
          'NA'
        )}
      </span>
    </li>
  )
}

export default PlatformUsername
