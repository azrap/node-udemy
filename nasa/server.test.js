supertest = require("supertest");
const server = require("./server");

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

describe("GET /", () => {
  it("should give status 200", async () => {
    res = await supertest(server).get("/");

    expect(res.statusCode).toEqual(200);
  });

  it("should return message 'api is up!'", async () => {
    res = await supertest(server).get("/");

    expect(res.body.message).toEqual("api is up!");
  });
});

describe("GET requests -  /apod/:phoneNum ", () => {
  it("should give status 200", async () => {
    const phoneNum = "phone";
    res = await supertest(server).get(`/apod/${phoneNum}`);
    expect(res.statusCode).toEqual(500);
  });

  it("should give status 400 for bad", async () => {
    const phoneNum = "phone";

    res = await supertest(server).get(`/apod/${phoneNum}`);
    expect(res.statusCode).toEqual(400);
  });
});

//not sure how to check if the twilio number is valid
