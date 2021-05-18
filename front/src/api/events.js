import { makeUrl, serverUrl, handleJsonResponse } from './common';

export const listEvents = async function () {
  const url = makeUrl(serverUrl, '/events/getAllEvents')
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
  const url = makeUrl(serverUrl, '/events/returnOneEvent')
  console.log(url)

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => (handleJsonResponse(response)))
}

export const createEvent = async function (name, route) {
  const url = makeUrl(serverUrl, '/events/addEvent')
  console.log(url)

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, route })
  })
    .then(response => (handleJsonResponse(response)))
}

export const updateEvent = async function (name, route) {
  const url = makeUrl(serverUrl, '/events/updateOneEvent')
  console.log(url)

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, route })
  })
    .then(response => (handleJsonResponse(response)))
}

export const deleteEvent = async function (name) {
  const url = makeUrl(serverUrl, '/events/deleteOneEvent')
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