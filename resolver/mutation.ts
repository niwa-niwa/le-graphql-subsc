module.exports = {

  createPost(
    parent: any,
    args: any,
    { db, pubsub }: { db: any; pubsub: any },
    info: any
  ) {
    const postNumTotal: any = String(db.posts.length + 1);

    const post: any = {
      id: postNumTotal,
      ...args.data,
    };

    db.posts.push(post);

    pubsub.publish("post", {
      post: {
        mutation: "CREATED",
        data: post,
      },
    });

    return post;
  },

  updatePost(
    parent: any,
    args: any,
    { db, pubsub }: { db: any; pubsub: any },
    info: any
  ) {
    const { id, data }: { id: any; data: any } = args;

    const post: any = db.posts.find((post: any) => post.id === id);

    if (!post) {
      throw new Error("Post not found");
    }

    if (typeof data.title === "string" && typeof data.author === "string") {
      post.title = data.title;
      post.author = data.author;

      pubsub.publish("post", {
        post: {
          mutation: "UPDATED",
          data: post,
        },
      });
    }

    return post;
  },

  deletePost(
    parent: any,
    args: any,
    { db, pubsub }: { db: any; pubsub: any },
    info: any
  ) {
    const post: any = db.posts.find((post: any) => post.id === args.id);

    const postIndex: any = db.posts.findIndex(
      (post: any) => post.id === args.id
    );

    if (postIndex === -1) {
      throw new Error("Post not Found");
    }

    db.posts.splice(postIndex, 1);

    pubsub.publish("post", {
      post: {
        mutation: "DELETED",
        data: post,
      },
    });

    return post;
  },

};

// module.exports = Mutation;
