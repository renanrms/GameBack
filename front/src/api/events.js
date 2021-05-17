import { makeUrl, serverUrl } from './common';

export const listEvents = async function () {
  const url = makeUrl(serverUrl, '/event/returnAllEvents')
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

export const getEvent = async function () {
  const url = makeUrl(serverUrl, '/event/returnOneEvent')
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
    .then(data => data.json())
    .catch(err => {
      console.log(err)
    })
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
    .then(data => data.json())
    .catch(err => {
      console.log(err)
    })
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
    .then(data => data.json())
    .catch(err => {
      console.log(err)
    })
}