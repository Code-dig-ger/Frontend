export async function getProblems(queryString) {
  return fetch(`http://143.110.253.225/problems/${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
}

export async function getProblemsWithCreds(queryString, accessToken) {
  return fetch(`http://143.110.253.225/problems/${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((data) => data.json())
}
