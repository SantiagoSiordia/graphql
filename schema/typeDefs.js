const { gql } = require("apollo-server");

const typeDefs = gql`
  type Student {
    id: ID!
    nickname: String!
    year: Int!
    activeSection: String!
    hadActiveSections: [String!]
  }

  type Query {
    students: [Student!]!
    # student: Student!
  }
`;

module.exports = {
  typeDefs,
};
