import request from "supertest";
import app from "../app";
import mongoose from 'mongoose';
import mockedPosts from '../test/mocks/posts';

describe("Posts CRUD", () => {
  let server;
  let postId;

  beforeAll(async () => {
    server = request(app);
    postId = "5e9f0b9e3c43f32c4d9064dc"; //change with a PostId from DB
  });

  afterAll(() => {
    mongoose.connection.close();
    server.close();
  });

  it("GET Posts", async () => {
    await server.get("/blog/posts").expect(200);
  });

  it("GET Post by id", async () => {
   const post =  await server.get(`/blog/posts/${postId}`).expect(200);
   expect(post).not.toBe(null)
  });

  it("POST a Post", async () => {
    const mockedPost = { ...mockedPosts[0] };
    const newPost = await server
      .post(`/blog/posts`)
      .send(mockedPost)
      .expect(200);

    expect(newPost.body.postContent).toBe(mockedPost.postContent);
    await server.delete(`/blog/posts/${newPost.body._id}`).expect(200); //Delete the created Post
  });

  it("MODIFY Post", async () => {
    const modifiedPost = { ...mockedPosts[0] };
    
    const response = await server
      .put(`/blog/posts/${postId}`)
      .set("Accept", "application/json")
      .send(modifiedPost)
      .expect(200);

    await expect(response.body.postContent).toBe(modifiedPost.postContent);
  });

 /*  it("DELETE POST", async () => {
    const mockedPost = { ...mockedPosts[0] };
    
    await server.delete(`/blog/posts/${postId}`).expect(200);

    await server.post(`/blog/posts`).send(mockedPost);
  }); */
});
