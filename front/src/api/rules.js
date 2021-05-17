import { makeUrl, serverUrl } from './common';

export const listRules = async function () {
  const url = makeUrl(serverUrl, '/rules/returnAllRules')
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

export const getRule = async function (username, password) {
  const url = makeUrl(serverUrl, '/rules/returnOneRule')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(data => data.json())
    .catch(err => {
      console.log(err)
    })
}

export const createRule = async function (name, rule) {
  const url = makeUrl(serverUrl, '/rules/registerRule')
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

export const updateRule = async function (name, rule) {
  const url = makeUrl(serverUrl, '/rules/updateOneRule')
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

export const deleteRule = async function (name) {
  const url = makeUrl(serverUrl, '/rules/deleteOneRule')
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