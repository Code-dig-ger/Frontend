export async function getProfile(accessToken, userHandle) {
  return fetch(`http://143.110.253.225/auth/profile/${userHandle}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}

export async function getInfoBySite(userHandle, platform) {
  return fetch(
    `http://143.110.253.225/auth/profile/${userHandle}/?platform=${platform}`
  ).then((data) => data.json())
}

export async function getFriendReq(accessToken) {
  return fetch(`http://143.110.253.225/auth/user/show-request`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}
