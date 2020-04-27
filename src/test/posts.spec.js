import request from "supertest";
import app from "../../src/app";
import mongoose from "mongoose";
import mockedPosts from "./mocks/posts.json";

describe("Posts CRUD", () => {
  let server;
  let mockedPost;
  let newPostId;
  
  beforeAll(() => {
    server = request(app);
    mockedPost = { ...mockedPosts[0] };
  });

  afterAll(() => {
    mongoose.connection.close();
    server.close();
  });

  it("Posts CRUD", async () => {
    /* GET ****************************************************** */
    await server.get("/api/blog/posts").expect(200);

    /* POST ****************************************************** */

    const newPost = await server
      .post(`/api/blog/posts`)
      .send(mockedPost)
      .expect(200);

    newPostId = newPost.body._id;

    expect(newPost.body.postContent).toBe(mockedPost.postContent);

    // /* GET BY ID ****************************************************** */
    // const post = await server.get(`/api/blog/posts/${newPostId}`).expect(200);
    // expect(post).not.toBe(null);

    // /* PUT ****************************************************** */
    // const modifiedPost = { ...mockedPosts[0] };
    // modifiedPost.postContent = "TEXTO MODIFICADO";

    // const response = await server
    //   .put(`/api/blog/posts/${newPostId}`)
    //   .set("Accept", "application/json")
    //   .send(modifiedPost)
    //   .expect(200);

    // await expect(response.body.postContent).toBe(modifiedPost.postContent);

    // /* DELETE ****************************************************** */
    // await server.delete(`/api/blog/posts/${newPostId}`).expect(200);
  });
});
