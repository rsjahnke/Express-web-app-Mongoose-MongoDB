/* Rebecca Jahnke, HW3
   Exports functionality for saving data into database. Form submitted via POST, 
   so first and last name obtained through request body and employee
   object created with those properties 
*/

var DB = require('./employeesDb.js');
var Employee = DB.getModel();

module.exports = 
  function saveEmployee(req , res , next){

    var employee = new Employee({
      firstName:     req.body.firstName, 
      lastName:       req.body.lastName,
    }); 
 
    employee.save(function (err){
      if(err)
        console.log("Error : %s ",err);
      res.redirect('/employees');
    });

  };