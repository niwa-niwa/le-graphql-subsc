module.exports = {
  posts(parent: any, args: any, { db }: { db: any }, info: any) {
    if (!args.query) {
      return db.posts;
    } else {
      return db.posts.filter((post: any) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isAuthorMatch = post.author
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isAuthorMatch;
      });
    }
  },
};
