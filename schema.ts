const { gql } = require('apollo-server');

module.exports = gql`

type Query {
  posts(query: String): [Post!]!
}

type Mutation {
  createPost(data: CreatePostInput!): Post!
  deletePost(id: ID!):Post!
  updatePost(id: ID!, data: UpdatePostInput!): Post!
}

type Subscription {
  post: PostSubscriptionPayload!
}

input CreatePostInput {
  title: String!
  author: String!
}

input UpdatePostInput {
  title: String
  author: String
}

type Post {
  id: ID!
  title: String!
  author: String!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type PostSubscriptionPayload {
  mutation: MutationType!
  data: Post!
}
`
