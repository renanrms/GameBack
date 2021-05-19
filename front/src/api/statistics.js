import { makeUrl, serverUrl, handleJsonResponse } from './common';


export const listStatistics = async function () {
  const url = makeUrl(serverUrl, '/statistics/get')
  console.log(url)
  
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => (handleJsonResponse(response)))
}