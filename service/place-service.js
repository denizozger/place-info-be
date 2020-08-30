const fetch = require("node-fetch");

const CODING_SESSION_API_ENDPOINT =
  "https://storage.googleapis.com/coding-session-rest-api";

async function getPlace(placeId) {
  return (await fetch(`${CODING_SESSION_API_ENDPOINT}/${placeId}`)).json();
}

module.exports = {
  getPlace,
};
