//import modules
const express = require("express"); //express
const morgan = require("morgan"); //morgan
const cors = require("cors"); //cors
//Port Number
const port = process.env.PORT || 8080;

//create server
const server = express();

//run server
server.listen(port, () => {
  console.log("port opened");
});

server.use(morgan("tiny"));
server.use(cors()); //allow many domains


server.use((request, response, next) => {
  response.status(404).json({ data: "Not Found" });
});

server.use((error, request, response, next) => {
  response.status(500).json({ data: `Error: ${error}` });
});
