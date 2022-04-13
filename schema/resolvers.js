const { StudentList, ParentsList } = require("../fakeData");

const resolvers = {
  Query: {
    students: () => StudentList,
    student: (_, { id }) => StudentList.find((student) => student.id === id),
    parents: () => ParentsList,
    parent: (_, { id }) => ParentsList.find((parent) => parent.id === id),
  },
};

module.exports = {
  resolvers,
};
