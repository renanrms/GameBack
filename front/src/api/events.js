import { makeUrl, serverUrl, handleJsonResponse } from './common';

export const listEvents = async function () {
  const url = makeUrl(serverUrl, '/event/returnAllEvents')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => (handleJsonResponse(response)))
}

export const getEvent = async function () {
  const url = makeUrl(serverUrl, '/event/returnOneEvent')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => (handleJsonResponse(response)))
}

export const createEvent = async function (route, eventName) {
  const url = makeUrl(serverUrl, '/event/registerEvent')
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

export const updateEvent = async function (route, eventName) {
  const url = makeUrl(serverUrl, '/event/updateOneEvent')
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

export const deleteEvent = async function (route) {
  const url = makeUrl(serverUrl, '/event/deleteOneEvent')
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