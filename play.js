const net = require("net");
const {connect} = require("./client")


console.log("Connecting ...");

connect();


// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost',
//     port: 50541
    
//   });
//   conn.on("connect", () => {
//     console.log("hello!")
//   });
//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };




//server code
// const net = require('net');
// const port = 8009;

// const server = net.createServer();
// const connectedClients = [];

// const broadcast = (message, author) => {
//   for (let cl of connectedClients) {
//     cl.write(message);
//   }
// };

// server.on('connection,' (clent) => {
// connectedClients.push(client)
//   console.log('connection has been made by client.')
// client.setEncoding('utf8');

// client.write('Welcome to my awesome server!')

// client.on('data', (message) => {
//   console.log(`Message recieved ${message}`);
// if (message.startsWith('setName ')) {
//   const clientName = message.replace(/setName /, '');
//   console.log('setting client name to:', clientName);
// client.name = clientName
// } else {
// broadcast(message, client)
// }
// })
// })

// server.listen(port, function (){
//   console.log(`Server is listening on port=${port}`)
// })

// const net = require('net');
// const port = 12350;

// // 2.tcp.ngrok.io:12350

// const connectionConfig = {
//   port: port,
//   host: '2.tcp.ngrok.io'
// };

// const client = net.createConnection(connectionConfig);

// client.setEncoding('utf8');

// client.on('connect', () => {
//   console.log('client is connected to the server');
// });

// process.stdin.on('data', (message) => {
//   client.write(message);
// });

// client.on('data', function(message){
//   console.log('server sent:', message);
// });
