const express = require("express");
const app = express();

const placeService = require('./service/place-service')

app.get("/", (req, res) => {
  res.status(200).json(placeService.getPlace());
});

module.exports = app;
