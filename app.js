const express = require("express");
const app = express();

const placeService = require('./service/place-service')

app.get("/places/:placeId", async (req, res) => {
  res.status(200).json(await placeService.getPlace(req.params.placeId));
});

module.exports = app;
