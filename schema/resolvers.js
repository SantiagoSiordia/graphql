const { StudentList, ParentsList, GameList } = require("../fakeData");

const resolvers = {
  Query: {
    // Students resolvers
    students: () => StudentList,
    student: (_, { id }) => StudentList.find((student) => student.id === id),

    // Parents Resolvers
    parents: () => ParentsList,
    parent: (_, { id }) => ParentsList.find((parent) => parent.id === id),

    // Games Resolves
    games: () => GameList,
    game: (_, { id }) => GameList.find((game) => game.id === id),
  },
};

module.exports = {
  resolvers,
};
