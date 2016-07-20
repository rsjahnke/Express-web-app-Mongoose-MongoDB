/* Rebecca Jahnke, HW3
   Exports function that deletes the specified course whose id is specified in the 
   request's parameters. redirects to employee list after successful delete
*/

var DB = require('./employeesDb.js');
var Employee = DB.getModel();

module.exports = 
	function deleteEmployee(req , res , next){
    var id = req.params.id; 
    
    Employee.findById(id, function (err, employee){ // find employee
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!employee)
        return res.render('404');
      
      employee.remove(function (err) { // delete the employee 
        if (err)
          console.log("Error deleting : %s ",err );
        res.redirect('/employees'); // redirect to employee list after delete
      });        
    });
  };