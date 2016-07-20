/* Rebecca Jahnke, HW3
   Exports functionality for saving user's edits submitted through edit form. 
   Properties updated for employee with specified id. Property values retrieved from 
   request's body, while id retrived from request's parameters. 
*/

var DB = require('./employeesDb.js');
var Employee = DB.getModel();

module.exports = 
  function saveEmployee(req , res , next){
    var id = req.params.id;  

    Employee.findById(id, function (err, employee){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!employee)
        return res.render('404');
      
        employee.firstName = req.body.firstName
        employee.lastName = req.body.lastName;
        
        employee.save(function (err) {
          if (err)
            console.log("Error updating : %s ",err );
          res.redirect('/employees'); // take user back to /employees page 
        });
    });
  };