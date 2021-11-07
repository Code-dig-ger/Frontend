export async function getProblems(queryString) {
  return fetch(`https://api.codedigger.tech/problems/${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
}

export async function getProblemsWithCreds(queryString, accessToken) {
  return fetch(`https://api.codedigger.tech/problems/${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}
