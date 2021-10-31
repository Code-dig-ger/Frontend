export async function getFriends(accessToken) {
  return fetch(`https://api.codedigger.tech/auth/user/friends`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}

export async function acceptReq(accessToken, from_user) {
  // console.log("KKKK");
  return fetch(`https://api.codedigger.tech/auth/user/accept-request`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      from_user: from_user,
    }),
  }).then((data) => data.json())
}

export async function removeFrnd(accessToken, userHandle) {
  return fetch(`https://api.codedigger.tech/auth/user/remove-friend`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      user: userHandle,
    }),
  }).then((data) => data.json())
}

export async function sendReq(accessToken, to_user) {
  return fetch(`https://api.codedigger.tech/auth/user/send-request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      to_user: to_user,
    }),
  }).then((data) => data.json())
}

export async function showReq(accessToken) {
  return fetch(`https://api.codedigger.tech/auth/user/show-request`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}

export async function showSendReq(accessToken) {
  return fetch(`https://api.codedigger.tech/auth/user/show-send-request`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}
