import request from "supertest";
import app from "../../app";
const mockedPosts = require("../test/mocks/comments.json");



 describe('CRUD comments', () =>{
    let server;
    let commentId;
    it('should ', async () => {
        
    }); 
   /*  beforeAll(async () => {
        server = request(app);
        commentId = "5e9f0b9e3c43f32c4d9064dc"; //change with a CommentId from DB
      });

    it("GET Comments", async () => {
        await server.get("/blog/comments").expect(200);
      });  */
    
    })

  /* it("GET Post by id", async () => {
    const postId = "5e99924075002bef8fafa9c6";
    await server.get(`/blog/posts/${postId}`).expect(200);
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
    const postId = "5e9f07b7a83b2d2ae8794413";

    const response = await server
      .put(`/blog/posts/${postId}`)
      .set("Accept", "application/json")
      .send(modifiedPost)
      .expect(200);

    await expect(response.body.postContent).toBe(modifiedPost.postContent);
  });

  it("DELETE POST", async () => {
    const mockedPost = { ...mockedPosts[0] };
    const postId = "5e9f07b7a83b2d2ae8794413";

    await server.delete(`/blog/posts/${postId}`).expect(200);

    await server.post(`/blog/posts`).send(mockedPost);
  });*/
