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
    favoriteGames: [Game]
  }

  type Query {
    students: [Student!]!
    parents: [Parent!]!
    games: [Game!]!
    student(id: ID!): Student
    parent(id: ID!): Parent
    game(id: ID!): Game
  }

  input CreateStudentInput {
    nickname: String!
    year: Int!
    activeSection: Section!
    hasRegisteredParent: Boolean = False
    parents: [ID!] = null
  }

  input UpdateStudentNickName {
    nickname: String!
    newNickname: String!
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student!
    updateStudentNickname(input: UpdateStudentNickName!): Student!
    deleteStudent(id: ID!): User
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
