const express = require("express");
const cors = require("cors");

const placeService = require("./service/place-service");
const { populateMissingDays } = require("./helpers/time-utils");

const app = express();
app.use(cors());

function transformPlace(placeId, place) {
  return {
    id: placeId,
    name: place.displayed_what,
    address: place.displayed_where,
    openingHours: populateMissingDays(place.opening_hours.days),
  };
}

app.get("/places/:placeId", async (req, res) => {
  const placeId = req.params.placeId;

  const place = await placeService.getPlace(placeId);
  const transformedPlace = transformPlace(placeId, place);

  return res.json(transformedPlace);
});

app.use(function (req, res) {
  res.status(404).send("ಠ_ಠ");
});

module.exports = app;
