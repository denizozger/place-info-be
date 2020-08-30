const fetch = require("node-fetch");
const { populateMissingDays } = require("../helpers/datetime-utils");

const CODING_SESSION_API_ENDPOINT =
  "https://storage.googleapis.com/coding-session-rest-api";

async function getPlace(placeId) {
  return (await fetch(`${CODING_SESSION_API_ENDPOINT}/${placeId}`)).json();
}

function transformPlace(place) {
  return {
    id: place.local_entry_id,
    name: place.displayed_what,
    address: place.displayed_where,
    openingHours: populateMissingDays(place.opening_hours.days),
  };
}

module.exports = {
  getPlace,
  transformPlace,
};
