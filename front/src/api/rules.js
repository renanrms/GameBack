import { makeUrl, serverUrl, parseJsonResponse } from './common';

export const listRules = async function () {
  const url = makeUrl(serverUrl, '/rules/returnAllRules')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => (parseJsonResponse(response)))
}

export const getRule = async function () {
  const url = makeUrl(serverUrl, '/rules/returnOneRule')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => (parseJsonResponse(response)))
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
    .then(response => (parseJsonResponse(response)))
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
    .then(response => (parseJsonResponse(response)))
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
    .then(response => (parseJsonResponse(response)))
}