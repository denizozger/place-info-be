const fetch = require("node-fetch");

const THIRD_PARTY_API_URI =
  "https://storage.googleapis.com/coding-session-rest-api";

function getThirdPartyApiUrlForPlaceId(placeId) {
  return `${THIRD_PARTY_API_URI}/${placeId}`;
}

async function getPlace(placeId) {
  return (await fetch(getThirdPartyApiUrlForPlaceId(placeId))).json();
}

module.exports = {
  getPlace,
};
