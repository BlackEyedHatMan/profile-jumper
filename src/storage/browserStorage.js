/*global chrome*/

export const retrieveFromBrowserStorage = (callback) => {
  chrome && chrome.storage && chrome.storage.local && chrome.storage.local.get('state', (obj) => {
    const { state } = obj
    const browserState = JSON.parse(state || '{}')
    callback(browserState)
  })

}

export const storeToBrowserStorage = (profiles) => {
  const profilesSerialized = JSON.stringify(profiles)
  const state = { state: profilesSerialized }
  chrome && chrome.storage && chrome.storage.local && chrome.storage.local.set(state)
}
