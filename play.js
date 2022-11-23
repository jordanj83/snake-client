const {connect} = require("./client")
const {setupInput} = require("./input")

console.log("Connecting ...");

setupInput(connect()); //function invocation, calling the setup input function

