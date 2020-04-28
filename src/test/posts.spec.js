import app from "../app";
import supertest from "supertest";
import mockedPosts from "./mocks/posts.json";
const request = supertest(app);
const adminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Il9pZCI6IjVlYTUzYjdhYjI3ZDNjMWU5NDIzYjRlNyIsInVzZXJOYW1lIjoiYWRtaW4yIn0sImlhdCI6MTU4ODA3MTEzN30.vyQNziXrr7nRDxpobghA22akl0FHF8qs2ewnB_ZSjVI";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Il9pZCI6IjVlYTU0MDAxMTU1NmI5MjBiNTA5ODRhYyIsInVzZXJOYW1lIjoidXNlcjEifSwiaWF0IjoxNTg4MDcxMTUyfQ.v9L2USNNJoBMbBdVjlJYAv27cwE0VoLQzfBM8NeummA";
describe("Posts CRUD", () => {
  let mockedPost;
  let newPostId;

  beforeAll(() => {
    mockedPost = { ...mockedPosts[0] };
  });

  afterAll(() => {
    request.close();
  }); 

  it("Posts CRUD", async () => {
    /* POST ****************************************************** */

    const newPost = await request
      .post(`/api/blog/posts`)
      .set("Authorization", "Bearer " + adminToken)
      .send(mockedPost)
      .expect(200);

    newPostId = newPost.body._id;

    expect(newPost.body.postContent).toBe(mockedPost.postContent);

    /* GET ****************************************************** */
    await request.get("/api/blog/posts").expect(200);

    /* GET BY ID ****************************************************** */
    const post = await request.get(`/api/blog/posts/${newPostId}`).expect(200);

    expect(post).not.toBe(null);

    /* PUT ****************************************************** */

    const modifiedPost = { ...mockedPosts[0] };

    modifiedPost.postContent = "TEXTO MODIFICADO";

    const response = await request
      .put(`/api/blog/posts/${newPostId}`)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + adminToken)
      .send(modifiedPost)
      .expect(200);

    await expect(response.body.postContent).toBe(modifiedPost.postContent);

    /* DELETE ****************************************************** */

    await request
      .delete(`/api/blog/posts/${newPostId}`)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + adminToken)
      .expect(200);

    /* CHECK REMOVE CREATED TEST POST ****************************************************** */
    const NoPost = await request
      .get(`/api/blog/posts/${newPostId}`)
      .expect(200);

      expect(NoPost.res.text).toBe("\"No existe Post con ese Id\""); 
  });
});
