const request = require("supertest");
const app = require("../app");

const placeJson = require("./fixtures/ohGSnJtMIC5nPfYRi_HTAg.json");

describe("Place endpoint", () => {
  it("returns place information given a place id", async () => {
    const res = await request(app).get("/places/ohGSnJtMIC5nPfYRi_HTAg");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(placeJson);
  });
});
