// const sumy = require("./sum");
// console.log(sumy.sum(5, 4));
// console.log(sumy.dis(5, 4));

// const path = require("path");
// console.log(path.parse(__filename));

// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());

// const fileSys = require("fs");
// const files = fileSys.readdirSync("./");
// console.log(files);

// fileSys.readdir('./' , (err, files) => {
//   console.log(err); //error
//   console.log(files); // files found
// });

// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('bell', (e)=>{
//   console.log(e)
//   console.log('open the door');
// });
// emitter.emit('bell', {time : Date.now(), count : 2})

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("new connection");
  
// console.log(typeof(req.url))
//   ( req.url == '/reza') ? res.write("fine I catch it") : res.write(JSON.stringify({app : 'mobile', soft : 'hard'}));
//   res.end();
// });

// server.listen(3000);

// search jalali moment npm =install> npm i jalali-moment

const moment = require('jalali-moment');
console.log(moment(new Date()).locale('fa').format('YYYY/MM/DD'));

// const m = require('jalali-moment');
// m.locale('fa');
// m.format; // it would be in jalali system
