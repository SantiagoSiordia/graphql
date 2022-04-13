const StudentList = [
  {
    id: "Student ID 1",
    nickname: "Santi",
    year: 6,
    activeSection: "PRIMARIA",
    hadActiveSections: ["PRIMARIA"],
    hasRegisteredParent: false,
    parents: [],
  },
  {
    id: "Student ID 2",
    nickname: "Olivers",
    year: 2,
    activeSection: "SECUNDARIA",
    hadActiveSections: ["PRIMARIA", "SECUNDARIA"],
    hasRegisteredParent: true,
    parents: ["Parent ID 1"],
  },
  {
    id: "Student ID 3",
    nickname: "Lissandroid",
    year: 3,
    activeSection: "PREPARATORIA",
    hadActiveSections: ["SECUNDARIA", "PREPARATORIA"],
    hasRegisteredParent: true,
    parents: ["Parent ID 2"],
  },
  {
    id: "Student ID 4",
    nickname: "Rodo",
    year: 2,
    activeSection: "SECUNDARIA",
    hadActiveSections: ["SECUNDARIA"],
    hasRegisteredParent: true,
    parents: ["Parent ID 3"],
  },
  {
    id: "Student ID 5",
    nickname: "Lasso",
    year: 6,
    activeSection: "PREPARATORIA",
    hadActiveSections: ["PREPARATORIA"],
    hasRegisteredParent: false,
    parents: [],
  },
];

const ParentsList = [
  {
    id: "Parent ID 1",
    creditCard: {
      expirationDate: "05/05/2025",
      number: "1234123412341234",
      name: "Rail",
    },
    hasRegisteredStudents: true,
    students: ["Student ID 2"],
  },
  {
    id: "Parent ID 2",
    creditCard: {
      expirationDate: "05/05/2025",
      number: "1234123412341234",
      name: "Erika",
    },
    hasRegisteredStudents: true,
    students: ["Student ID 3"],
  },
  {
    id: "Parent ID 2",
    creditCard: {
      expirationDate: "05/05/2025",
      number: "1234123412341234",
      name: "Erika",
    },
    hasRegisteredStudents: true,
    students: ["Student ID 4"],
  },
];

const GameList = [
  {
    id: "Game ID 1",
    name: "First game",
    playersPerMonth: 300,
    rating: 5,
    rul: "https://first-game.com",
  },
  {
    id: "Game ID 2",
    name: "Second game",
    playersPerMonth: 450,
    rating: 3,
    rul: "https://second-game.com",
  },
  {
    id: "Game ID 3",
    name: "Third game",
    playersPerMonth: 82,
    rating: 4,
    rul: "https://third-game.com",
  },
  {
    id: "Game ID 4",
    name: "Fourth game",
    playersPerMonth: 90,
    rating: 1,
    rul: "https://fourth-game.com",
  },
  {
    id: "Game ID 5",
    name: "Fifth game",
    playersPerMonth: 94,
    rating: 3,
    rul: "https://fifth-game.com",
  },
  {
    id: "Game ID 6",
    name: "Sixth game",
    playersPerMonth: 76,
    rating: 3,
    rul: "https://sixth-game.com",
  },
];

module.exports = {
  StudentList,
  ParentsList,
  GameList,
};
