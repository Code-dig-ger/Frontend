export async function getLists(accessToken, wise, type) {
  return fetch(`https://api.codedigger.tech/lists/${wise}/${type}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}
export async function getListsWithoutAuth(wise, type) {
  return fetch(`https://api.codedigger.tech/lists/${wise}/${type}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization":`Bearer ${accessToken}`
    },
  }).then((data) => data.json())
}

export async function getThisList(accessToken, wise, type, slug) {
  return fetch(`https://api.codedigger.tech/lists/${wise}/${type}/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}

export async function getUserList(accessToken) {
  return fetch(`https://api.codedigger.tech/lists/userlist/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}

export async function getThisUserlist(accessToken, url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}

export async function addToUserList(accessToken, slug, prob_id, platform) {
  return fetch(`https://api.codedigger.tech/lists/userlist/add`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      slug: slug,
      prob_id: prob_id,
      platform: platform,
    }),
  }).then((data) => data.json())
}

export async function deleteUserlist(accessToken, slug) {
  return fetch(`https://api.codedigger.tech/lists/userlist/edit/${slug}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}

export async function createNewUserlist(
  accessToken,
  playlistName,
  playlistDes,
  pub
) {
  return fetch(`https://api.codedigger.tech/lists/userlist/new`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      name: playlistName,
      description: playlistDes,
      public: pub,
    }),
  }).then((data) => data.json())
}
