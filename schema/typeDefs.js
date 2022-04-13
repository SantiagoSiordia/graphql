const { gql } = require("apollo-server");

const typeDefs = gql`
  type CreditCard {
    expirationDate: String!
    number: String!
    name: String!
  }

  type Parent {
    id: ID!
    creditCard: CreditCard!
    hasRegisteredStudents: Boolean!
    students: [ID!]
  }

  type Game {
    id: ID!
    name: String!
    playersPerMonth: Int!
    rating: Int!
    url: String!
  }

  type Student {
    id: ID!
    nickname: String!
    year: Int!
    activeSection: Section!
    hadActiveSections: [Section!]
    hasRegisteredParent: Boolean!
    parents: [ID!]
  }

  type Query {
    students: [Student!]!
    parents: [Parent!]!
    games: [Game!]!
    student(id: ID!): Student
    parent(id: ID!): Parent
    game(id: ID!): Game
  }

  enum Section {
    PRIMARIA
    SECUNDARIA
    PREPARATORIA
  }
`;

module.exports = {
  typeDefs,
};
