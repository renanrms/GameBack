import { makeUrl, serverUrl, handleJsonResponse } from './common';

export const listStates = async function () {
  const url = makeUrl(serverUrl, '/state/returnAllStates')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => (handleJsonResponse(response)))
}

export const getState = async function () {
  const url = makeUrl(serverUrl, '/state/returnOneState')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => (handleJsonResponse(response)))
}

export const createState = async function (name, rule) {
  const url = makeUrl(serverUrl, '/state/registerState')
  console.log(url)

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, rule })
  })
    .then(response => (handleJsonResponse(response)))
}

export const updateState = async function (name, rule) {
  const url = makeUrl(serverUrl, '/state/updateOneState')
  console.log(url)

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, rule })
  })
    .then(response => (handleJsonResponse(response)))
}

export const deleteState = async function (name) {
  const url = makeUrl(serverUrl, '/state/deleteOneState')
  console.log(url)

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })
    .then(response => (handleJsonResponse(response)))
}