/* eslint-disable */
import config from '../../config/default';

const CLIENT_ID = (process.env.CLIENT_ID) ?
  process.env.CLIENT_ID :
  config["CLIENT_ID"];

const REDIRECT_URL = (process.env.REDIRECT_URL) ?
  (process.env.REDIRECT_URL) :
  config["REDIRECT_URL"];

const SPOTIFY_URL = (process.env.SPOTIFY_URL) ?
  (process.env.SPOTIFY_URL) :
  config["SPOTIFY_URL"];

const SCOPE = (process.env.SCOPE) ?
  (process.env.SCOPE) :
  config["SCOPE"];

const STATE_KEY = (process.env.STATE_KEY) ?
  (process.env.STATE_KEY) :
  config["STATE_KEY"];

const ACCESS_TOKEN_KEY = (process.env.ACCESS_TOKEN_KEY) ?
  (process.env.ACCESS_TOKEN_KEY) :
  config["ACCESS_TOKEN_KEY"];

function parseSongs(items, tracks) {
  items.forEach((key, val) => {
    tracks.push({
      id: key.track.id,
      title: key.track.name,
      album: key.track.album.name,
      artist: key.track.artists[0].name,
      image: key.track.album.images[2].url
    });
  });
  return tracks;
};

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp(name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

function generateRandomString(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

function buildURL(state) {
  let url = SPOTIFY_URL;
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(CLIENT_ID);
  url += '&scope=' + encodeURIComponent(SCOPE);
  url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URL);
  url += '&state=' + encodeURIComponent(state);
  return url;
};

export function getAuth() {
  let state = generateRandomString(16);
  window.localStorage.setItem(STATE_KEY, state);
  let url = buildURL(state);
  window.location = url;
};

export function setAuth(unparsedParams) {
  return new Promise((resolve, reject) => {
    let access_token = getParameterByName(ACCESS_TOKEN_KEY, unparsedParams.params);
    let state = getParameterByName('state', unparsedParams.params);
    let storedState = window.localStorage.getItem(STATE_KEY);

    if ((access_token && (state == null || state !== storedState))) {
      reject('There was an error during the authentication');
    } else {
      window.localStorage.removeItem(STATE_KEY);
      window.localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
      resolve();
    }
  });
};

export function clearAuth() {
  window.localStorage.clear();
};

export function getUser() {
  return new Promise((resolve, reject) => {
    let access_token = window.localStorage.getItem(ACCESS_TOKEN_KEY);

    $.ajax({
        url: 'https://api.spotify.com/v1/me/',
        headers: {
          'Authorization': `Bearer ${access_token}`
        },
        success: function(response) {
          resolve(response);
        }
    });
  });
};

function allTracksFetched(tracks, totalTrackCount) {
  return tracks.length >= totalTrackCount;
};

function fetchAllTracks(tracks, totalTrackCount, resolve) {
  function loop() {
      if (allTracksFetched(tracks, totalTrackCount)) {
         return resolve(tracks);
      }
      return Promise.resolve(fetchTracks(tracks)).then(loop);
  };
  return Promise.resolve().then(loop);
};

function fetchTracks(tracks) {
  return new Promise((resolve, reject) => {
    let access_token = window.localStorage.getItem(ACCESS_TOKEN_KEY);

    $.ajax({
        url: 'https://api.spotify.com/v1/me/tracks',
        headers: {
          'Authorization': `Bearer ${access_token}`
        },
        data: {
          'offset': tracks.length,
          'limit': 50
        },
        success: function(response) {
          parseSongs(response.items, tracks);
          resolve();
        }
    });
  });
};

export function getTracks() {
  return new Promise((resolve, reject) => {
    let access_token = window.localStorage.getItem(ACCESS_TOKEN_KEY);

    $.ajax({
        url: 'https://api.spotify.com/v1/me/tracks',
        headers: {
          'Authorization': `Bearer ${access_token}`
        },
        success: function(response) {
          let totalTrackCount = response.total;
          let tracks = [];
          parseSongs(response.items, tracks);
          fetchAllTracks(tracks, totalTrackCount, resolve);
        }
    });
  });
};

export function isLoggedIn() {
  return window.localStorage.getItem(ACCESS_TOKEN_KEY) !== null
  && window.localStorage.getItem(ACCESS_TOKEN_KEY) !== 'null';
};
