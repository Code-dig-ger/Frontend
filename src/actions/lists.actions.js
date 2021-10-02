export function getLists(acc, wise, type) {
  return fetch(`https://api.codedigger.tech/lists/${wise}/${type}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${acc}`,
    },
  }).then((data) => data.json())
}

export function getThisList(acc, wise, type, slug) {
  return fetch(`https://api.codedigger.tech/lists/${wise}/${type}/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${acc}`,
    },
  }).then((data) => data.json())
}

export function getUserList(acc) {
  return fetch(`https://api.codedigger.tech/lists/userlist/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${acc}`,
    },
  }).then((data) => data.json())
}

export function getThisUserlist(acc, url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${acc}`,
    },
  }).then((data) => data.json())
}

export function addToUserList(acc, slug, prob_id, platform) {
  return fetch(`https://api.codedigger.tech/lists/userlist/add`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${acc}`,
    },
    body: JSON.stringify({
      slug: slug,
      prob_id: prob_id,
      platform: platform,
    }),
  }).then((data) => data.json())
}

export function deleteUserlist(acc, slug) {
  return fetch(`https://api.codedigger.tech/lists/userlist/edit/${slug}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${acc}`,
    },
  }).then((data) => data.json())
}

export function createNewUserlist(acc, playlistName, playlistDes, pub) {
  return fetch(`https://api.codedigger.tech/lists/userlist/new`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${acc}`,
    },
    body: JSON.stringify({
      name: playlistName,
      description: playlistDes,
      public: pub,
    }),
  }).then((data) => data.json())
}
