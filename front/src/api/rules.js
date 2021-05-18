import { makeUrl, serverUrl, handleJsonResponse } from './common';

export const listRules = async function () {
  const url = makeUrl(serverUrl, '/rules/returnAllRules')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => (handleJsonResponse(response)))
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
    .then(response => (handleJsonResponse(response)))
}

export const createRule = async function (name, content) {
  const url = makeUrl(serverUrl, '/rules/registerRule')
  console.log(url)

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, content })
  })
    .then(response => (handleJsonResponse(response)))
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
    .then(response => (handleJsonResponse(response)))
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
    .then(response => (handleJsonResponse(response)))
}