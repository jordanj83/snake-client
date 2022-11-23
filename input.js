let connection;
//user input

//this is the function definition
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  //whenever there is data this will call handle user input which is above
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
  
};
const handleUserInput = function (key) {
  if (key === '\u0003') {     process.exit();   } 
  else if (key == "w") { connection.write("Move: up")
  }
  else if (key == "a") { connection.write("Move: left")
  }
  else if (key == "d") { connection.write("Move: right")
  }
  else if (key == "s") { connection.write("Move: down")
  
  }
  };
module.exports = {
  setupInput
}