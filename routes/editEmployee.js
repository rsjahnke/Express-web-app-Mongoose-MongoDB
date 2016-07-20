/* Rebecca Jahnke, HW3
   Exports function that renders view for editing existing employee with
   the specified id through the request's parameter. New employee object created 
   from the employee data and passed to view page 
*/

var DB = require('./employeesDb.js');
var Employee = DB.getModel();

module.exports = 
	function editEmployee(req , res , next){
    var id = req.params.id; // recall - each employee gets an id when entered into the database in mongoose.js

    Employee.findById(id, function (err, employee){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!employee)
        return res.render('404');
      res.render('editEmployeesView',
          {title:"Edit Employee", 
           data: {id: employee._id, 
                  lastName: employee.lastName,
                  firstName: employee.firstName}
          });                
    });
};
