const { StudentList, ParentsList, GameList } = require("../fakeData");
const { remove, slice } = require("lodash");

const resolvers = {
  Query: {
    // Students resolvers
    students: (_, { first }) => {
      if (first === undefined) return StudentList;
      return StudentList.slice(0, first);
    },
    student: (_, { id }) => StudentList.find((student) => student.id === id),

    // Parents Resolvers
    parents: () => ParentsList,
    parent: (_, { id }) => ParentsList.find((parent) => parent.id === id),

    // Games Resolves
    games: () => GameList,
    game: (_, { id }) => GameList.find((game) => game.id === id),
  },
  Student: {
    favoriteGames: () => {
      return GameList.filter((game) => game.playersPerMonth < 100);
    },
  },
  Mutation: {
    createStudent: (_, { input: student }) => {
      StudentList.push({
        ...student,
        id: "Student ID " + (StudentList.length + 1),
      });
      return StudentList[StudentList.length - 1];
    },
    updateStudentNickname: (_, { input: updateStudent }) => {
      const studentIndex = StudentList.findIndex(
        (stdnt) => stdnt.nickname === updateStudent.nickname
      );
      StudentList[studentIndex] = {
        ...StudentList[studentIndex],
        nickname: updateStudent.newNickname,
      };
      return StudentList[studentIndex];
    },
    deleteStudent: (_, { id }) => {
      remove(StudentList, (student) => student.id === id);
      return null;
    },
  },
};

module.exports = {
  resolvers,
};
