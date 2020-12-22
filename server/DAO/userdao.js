const db = require('../shared/db');
const mssql = require("mssql/msnodesqlv8");

var Authuser = function(req, res){
    var username = req.body.UserName;
    var password = req.body.Password;

        let sql = "login_sp";
        let userInput = {'userid':[username,mssql.Int], 'password':[password,mssql.VarChar],};
        let userOutput = {};
        
        db.execSqlproc(sql,userInput,userOutput,function(err,data){
            if(err){
                res.json({Message:'Error fetching tasks for newparts ' + err});
            }
            else
            {
                //var result = { recordset: data.recordset};
                //console.log(data.recordsets);
                res.json(data.recordset)
            }
        });
        //res.json({ message:"json called"})
    

}

var GetDetails = function(req,res){
    let sql = "sp1";
    let userInput = {};
    let userOutput = {};
    
    db.execSqlproc(sql,userInput,userOutput,function(err,data){
        if(err){
            res.json({Message:'Error fetching tasks for newparts ' + err});
        }
        else
        {
            res.json(data.recordset)
        }
    });
}

var DashboardDetails = function(req,res){
    let sql = "sp2";
    let userInput = {};
    let userOutput = {};
    
    db.execSqlproc(sql,userInput,userOutput,function(err,data){
        if(err){
            res.json({Message:'Error fetching tasks for newparts ' + err});
        }
        else
        {
            res.json(data.recordset)
        }
    });
}

module.exports = {Authuser:Authuser, GetDetails:GetDetails}

