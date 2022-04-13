const { StudentList, ParentsList } = require("../fakeData");

const resolvers = {
  Query: {
    students() {
      return StudentList;
    },
    parents() {
      return ParentsList;
    },
  },
};

module.exports = {
  resolvers,
};
