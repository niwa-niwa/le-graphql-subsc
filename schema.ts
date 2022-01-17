const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
  posts(query: String): [Post!]!
}

type Mutation {
  createPost(data: CreatePostInput!): Post!
  deletePost(id: ID!):Post!
  updatePost(id: ID!, data: UpdatePostInput!): Post!
}

type subscription {
  post: PostSubscriptionPayload!
}


`