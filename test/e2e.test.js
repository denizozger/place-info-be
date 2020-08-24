const request = require("supertest");
const app = require("../app");

describe("Place endpoint", () => {
  it("returns hello world", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ hello: "world" });
  });
});
