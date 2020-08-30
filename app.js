const express = require("express");
const cors = require("cors");

const placeService = require("./service/place-service");

const app = express();
app.use(cors());

app.get("/places/:placeId", async (req, res) => {
  const placeId = req.params.placeId;

  const place = await placeService.getPlace(placeId);
  const transformedPlace = placeService.transformPlace(place);

  return res.json(transformedPlace);
});

app.use(function (req, res) {
  res.status(404).send("ಠ_ಠ");
});

module.exports = app;
