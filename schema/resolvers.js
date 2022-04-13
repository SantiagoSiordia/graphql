const { StudentList } = require("../fakeData");

const resolvers = {
  Query: {
    students() {
      return StudentList;
    },
  },
};

module.exports = {
  resolvers,
};
