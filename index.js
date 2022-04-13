const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({}, resolvers);

server.listen().then(({ url }) => {
  console.log("Your API is running at" + url);
});
