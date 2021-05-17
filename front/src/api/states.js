import { makeUrl, serverUrl } from './common';

export const listStates = async function () {
  const url = makeUrl(serverUrl, '/state/returnAllStates')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(data => data.json())
    .catch(err => {
      console.log(err)
    })
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
    .then(data => data.json())
    .catch(err => {
      console.log(err)
    })
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
    .then(data => data.json())
    .catch(err => {
      console.log(err)
    })
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
    .then(data => data.json())
    .catch(err => {
      console.log(err)
    })
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
    .then(data => data.json())
    .catch(err => {
      console.log(err)
    })
}