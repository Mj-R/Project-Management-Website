const mssql = require("mssql/msnodesqlv8");
const config = require("../shared/config.json");

//generic sql query execution

exports.execSqlquery = async function(sqlquery, userInput={},userOutput={}, callback) {
  const pool = new mssql.ConnectionPool({
    server: config.server,
    database: config.db,
    options: {
      trustedConnection: true
    }
  });
  pool.on('error', err => {
    // ... error handler 
    console.log('sql pool error db.js', err);
  });

  try {
    await pool.connect();
    let result = await pool.request();
    for (let key in userInput) {
      if ( Array.isArray(userInput[key]) ) {  
        // input(field_name, dataType, value)
        result = await result.input(key, userInput[key][1], userInput[key][0]);
      } else { 
        // input(field_name, value)
        result = await result.input(key, userInput[key]);
      };
    };
    for (let key in userOutput) {
      if ( Array.isArray(userOutput[key]) ) {  
        // input(field_name, dataType, value)
        result = await result.output(key, userOutput[key][1], userOutput[key][0]);
      } else { 
        // input(field_name, value)
        result = await result.output(key, userOutput[key]);
      };
    };
    result = await result.query(sqlquery);

    return callback(null,result.recordset);
  } catch (err) { 
    // stringify err to easily grab just the message
    let e = JSON.stringify(err, ["message", "arguments", "type", "name"]);     
    return callback(JSON.parse(e).message);
  } finally {
    pool.close(); //closing connection after request is finished.
  }
};


//generic sql sp execution

exports.execSqlproc = async function(sqlquery, userInput={},userOutput={},callback) {
  const pool = new mssql.ConnectionPool({
    server: config.server,
    database: config.db,
    options: {
      trustedConnection: true
    }
  });
  pool.on('error', err => {
    // ... error handler 
    console.log('sql pool error db.js', err);
  });

  try {
    await pool.connect();
    let result = await pool.request();
    for (let key in userInput) {
      if ( Array.isArray(userInput[key]) ) {  
        // input(field_name, dataType, value)
        result = await result.input(key, userInput[key][1], userInput[key][0]);
      } else { 
        // input(field_name, value)
        result = await result.input(key, userInput[key]);
      };
    };
    for (let key in userOutput) {
      if ( Array.isArray(userOutput[key]) ) {  
        // input(field_name, dataType, value)
        result = await result.output(key, userOutput[key][1], userOutput[key][0]);
      } else { 
        // input(field_name, value)
        result = await result.output(key, userOutput[key]);
      };
    };
    result = await result.execute(sqlquery);
    return callback(null,result);
  } catch (err) { 
    // stringify err to easily grab just the message
    let e = JSON.stringify(err, ["message", "arguments", "type", "name"]);     
    return callback(JSON.parse(e).message);
  } finally {
    pool.close(); //closing connection after request is finished.
  }
};