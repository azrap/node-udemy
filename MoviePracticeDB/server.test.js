const supertest = require("supertest");
const server = require("./server");

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

describe("GET endpoints", () => {
  describe("GET /", () => {
    it("should return status 200", async () => {
      const res = await supertest(server).get("/");

      expect(res.statusCode).toEqual(200);
    });

    it("should return api is up", async () => {
      const res = await supertest(server).get("/");

      expect(res.text).toEqual("api is up!");
    });

    describe("GET /movies/:searchTerm", async () => {
      it("should return status 200", async () => {
        const searchTerm = "california";
        const movies = await supertest(server).get(`/movies/${searchTerm}`);
        expect(movies.statusCode).toEqual(200);
      });

      it("should 404 if term not found", async () => {
        const searchTerm = "californiabababababa";
        const movies = await supertest(server).get(`/movies/${searchTerm}`);
        expect(movies.statusCode).toEqual(404);
      });
    });
  });
});

// describe("POST endpoints", () => {
//   describe("POST /score", () => {
//     it("should return status 200", async () => {
//       const res = await supertest(server)
//         .post("/score")
//         .send({ user_id: 1, difficulty: 2, num_tries: 3 });
//       expect(res.statusCode).toEqual(200);
//     });
//   });
// });
