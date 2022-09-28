// client built today is to connect to LHL. the server holds all logics and rules for the game
// to play it urself, need to set up the server locally
// Here’s the info for the snek server this afternoon!
// View the snakes : http://165.227.47.243:8000/view
// Host: 165.227.47.243
// Port: 50541
// IP and port number tells clients the place to make a connection
// connect to the snake server and listen for incoming data

// first step, use connect function to set up the connection
const net = require('net'); // use node library
// establish the connection with Snake server
const connect = function () {
  const conn = net.createConnection({ //net createConnection function to create an object
    host: "165.227.47.243",
    port: 50541
  });
//client side set the encoding protocol 
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connected, yeah!")
  });
  conn.on("data", () => {
    console.log("leobigdick");
  });
  conn.on("close", (ifError) => {
    if(!ifError) {
    console.log("you are doing nothing")
    }
  });
  return conn; // represents the connection with the server
};

console.log("Connecting... ");
connect();

// introduction of "events", examples fo events include: connect/closes/data 
// can control how your clients react by doing the "lister", 
// event handler: 
// .on method lets you specify an event name and a function that does something when that event happens
// eg: conn.on("event name", functionthatdoessomething);(or even use anonymous function );
