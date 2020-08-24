const express = require("express");

const app = express();

const placeService = require("./service/place-service");

function transformPlace(placeId, place) {
  return {
    id: placeId,
    name: place.displayed_what,
    address: place.displayed_where,
    openingHours: place.opening_hours.days,
  };
}

app.get("/places/:placeId", async (req, res) => {
  const placeId = req.params.placeId;

  const place = await placeService.getPlace(placeId);
  const transformedPlace = transformPlace(placeId, place);

  return res.status(200).json(transformedPlace);
});

module.exports = app;
