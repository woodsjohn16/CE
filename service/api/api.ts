const apiBase: string = 'https://7ys8lfh4mc.execute-api.eu-west-1.amazonaws.com/beta'

export const getFormContent = () => {
  return fetch(`${apiBase}/coding-challenge/configuration`, {
    method: 'GET'
  })
    .then((res) => res.json())
    .catch((err) => err)
}
