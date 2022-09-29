const net = require('net'); 
const {host, port} = require('./constants');
const connect = function () {
  const conn = net.createConnection({ 
    host,
    port
  });

  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connected, yeah!")
  });
  conn.on("connect", () => {
    conn.write("Name: LLL");
  });
  conn.on("connect", () => {
    conn.write("Move: up")
  });
  conn.on("data", () => {
    console.log("testing if receiving messages");
  });
  conn.on("close", (ifError) => {
    if(!ifError) {
    console.log("you are doing nothing")
    }
  });
  return conn; 
};
module.exports = {net, connect};

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)