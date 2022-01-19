module.exports = {
  post: {
    subscribe(parent: any, args: any, { pubsub }: { pubsub: any }, info: any) {
      return pubsub.asyncIterator("post");
    },
  },
};
