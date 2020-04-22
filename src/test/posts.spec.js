import request from "supertest";
import app from "../../src/app";
import mongoose from "mongoose";
import mockedPosts from "../test/mocks/posts";

describe("Posts CRUD", () => {
  let server;
  let newPostId;
  let mockedPost;
  
  beforeAll(() => {
    server = request(app);
    mockedPost = { ...mockedPosts[0] };
  });

  afterAll(() => {
    mongoose.connection.close();
    server.close();
  });

  it("Posts CRUD", async () => {

    /* POST ****************************************************** */
    const newPost = await server
      .post(`/blog/posts`)
      .send(mockedPost)
      .expect(200);

    newPostId = newPost.body._id;

    expect(newPost.body.postContent).toBe(mockedPost.postContent);

    /* GET ****************************************************** */
    await server.get("/blog/posts").expect(200);

    /* GET BY ID ****************************************************** */
    const post = await server.get(`/blog/posts/${newPostId}`).expect(200);
    expect(post).not.toBe(null);

    /* PUT ****************************************************** */
    const modifiedPost = { ...mockedPosts[0] };
    modifiedPost.postContent = "TEXTO MODIFICADO";

    const response = await server
      .put(`/blog/posts/${newPostId}`)
      .set("Accept", "application/json")
      .send(modifiedPost)
      .expect(200);

    await expect(response.body.postContent).toBe(modifiedPost.postContent);

    /* DELETE ****************************************************** */
    await server.delete(`/blog/posts/${newPostId}`).expect(200);
  });
});
