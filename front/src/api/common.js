export const serverUrl = 'http://localhost:3001'

export const makeUrl = (...fragments) => {
  const args = Array.prototype.slice.call(fragments, 0);
  return args.reduce((url, part) => (url.concat(part)));
};

export const parseJsonResponse = function (response) {
  return (response.json()
    .then(json => {
      return { data: json, code: response.status }
    })
    .catch(err => {
      return { data: null, code: response.code };
    })
  )
}
