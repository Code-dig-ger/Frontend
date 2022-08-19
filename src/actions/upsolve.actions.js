export async function codeforces(accessToken, vir, page) {
  return fetch(
    `http://143.110.253.225/problems/upsolve/codeforces?${
      vir ? `virtual=true;page=${page}` : `page=${page}`
    }`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
}
export async function codechef(accessToken, page) {
  return fetch(
    `http://143.110.253.225/problems/upsolve/codechef?page=${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
}
export async function atcoder(accessToken, page, Prac) {
  return fetch(
    `http://143.110.253.225/problems/upsolve/atcoder?${
      Prac ? `practice=true;page=${page}` : `page=${page}`
    }`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
}
