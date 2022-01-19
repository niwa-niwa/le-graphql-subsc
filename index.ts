const {
  ApolloServer,
  PubSub,
}: {
  ApolloServer: any;
  PubSub: any;
} = require("apollo-server");

const db: any = require("./db");

const Query: any = require("./resolver/Query");

const Mutation: any = require("./resolver/Mutation");

const Subscription: any = require("./resolver/Subscription");

const typeDefs: any = require("./schema");

const pubsub: any = new PubSub();

const server: any = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription,
  },
  context: {
    db,
    pubsub,
  },
});

server
  .listen()
  .then(({ url, subscriptionsUrl }: { url: any; subscriptionsUrl: any }) => {
    console.log(`? Server ready at ${url}`);
    console.log(`? Subscriptions ready at ${subscriptionsUrl}`);
  });
