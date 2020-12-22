var userdao = require('../DAO/userdao.js');

module.exports = function(app){

    app.post('/User/Authuser',function(req,res)
    {  userdao.Authuser(req,res);  });

    app.get('/User/GetDetails',function(req,res)
    {  userdao.GetDetails(req,res);  });

    app.get('/User/DashboardDetails',function(req,res)
    {  userdao.DashboardDetails(req,res);  });

}

