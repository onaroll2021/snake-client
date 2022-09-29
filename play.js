const {handleUserInput, setupInput} = require('./input')
const {net, connect} = require('./client');
console.log("Connecting... ");
const connection = connect();

setupInput(connection);

module.exports = {connect}