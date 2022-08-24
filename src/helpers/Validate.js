async function Validate() {
  let count = 0

  const toValidate = await JSON.parse(localStorage.getItem('creds'))
  if (toValidate === null) {
    localStorage.setItem('err', 'Please login to continue...')
    window.location = '/login'
  } else {
    const acc = toValidate.access
    const ref = toValidate.refresh
    const first = toValidate.first
    const username = toValidate.username
    const response = await fetch(
      `https://143.110.253.225/auth/check-auth/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${acc}`,
        },
      }
    )
    // console.log("validation");

    if (response.status !== 200) {
      const refResponse = await fetch(
        'https://143.110.253.225/auth/token/refresh/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh: ref,
          }),
        }
      )

      //refResponse gives access token if valid ref token is passed else not

      if (refResponse.status == 200) {
        //    console.log('getting new');

        const newData = await refResponse.json()
        const newAcc = newData.access
        localStorage.setItem(
          'creds',
          JSON.stringify({
            access: newAcc,
            refresh: ref,
            first: first,
            username: username,
          })
        )
        window.location = '/home'
      } else {
        localStorage.clear()
        localStorage.setItem('err', 'Please login to continue...')
        window.location = '/login'
      }
    }
  }
}
export default Validate
