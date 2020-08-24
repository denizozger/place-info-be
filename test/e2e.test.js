const request = require("supertest");
const app = require("../app");

const placeJson = require("./fixtures/GXvPAor1ifNfpF0U5PTG0w.json");

describe("Place endpoint", () => {
  it("returns place information given a place id", async () => {
    const res = await request(app).get("/places/GXvPAor1ifNfpF0U5PTG0w");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(placeJson);
  });
});
