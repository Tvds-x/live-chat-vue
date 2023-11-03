export async function sendCode(email: string) {
  const baseURL = 'https://edu.strada.one/api/user'
  const requestBody = {
    email
  }

  const requestOptions: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(requestBody)
  }

  const response  = await fetch(baseURL, requestOptions)
    .then((response) => response.json())
    .catch((err) => console.log(err))

  return response
}

export async function isValidToken(token: string) {
  try {
    const response = await fetch('https://edu.strada.one/api/user/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return (response.ok)
  } catch (error) {
    console.log(error)
    return false
  }
}
