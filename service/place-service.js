const fetch = require("node-fetch");

const CODING_SESSION_API_ENDPOINT =
  "https://storage.googleapis.com/coding-session-rest-api";

function getThirdPartyApiUrlForPlaceId(placeId) {
  return `${CODING_SESSION_API_ENDPOINT}/${placeId}`;
}

async function getPlace(placeId) {
  return (await fetch(getThirdPartyApiUrlForPlaceId(placeId))).json();
}

module.exports = {
  getPlace
};
