var express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
//const mssql = require("mssql/msnodesqlv8");

//app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
//app.use(cors({credentials: true, origin: 'http://hkdnt2100.asia.ad.flextronics.com'}));
//app.use(cors({credentials: true, origin: 'http://gacportal.flex.com'}));
//app.use(cors({credentials: true, origin: 'http://sgdnte2070.asia.ad.flextronics.com:8095'}));
app.use(bodyParser.json());
//app.use('/file',fileroutes);


// define a route to download a file 
// app.get('/download/:file(*)',(req, res) => {
//     var file = req.params.file;
//     var fileLocation = path.join(file);
//     console.log(fileLocation);
//     res.download(fileLocation, file); 
//     //res.json('downloaded');
//   });

//EndPoints
require('./Handler/userhandler.js')(app);

//app.listen(3080);
console.log("listening")
app.listen(3000, () => {
    console.log("listening")
  });