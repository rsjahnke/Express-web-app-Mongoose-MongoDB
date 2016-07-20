/* Rebecca Jahnke, HW3 
   Exports function that retrieves all relevant documents from MongoDB database,
   maps over employees and passes customized data to the view 
*/

var DB = require('./employeesDb.js');
var Employee = DB.getModel();

module.exports = 
   function displayEmployees(req, res , next){
	 Employee.find({}, function(err , employees){
		if(err)
			console.log("Error : %s ",err);

		var results = employees.map(function (employee){ // map - for each employee object, interested in id, first and last name properties
      	  return {
      	  	id: employee._id,
            firstName: employee.firstName,
            lastName: employee.lastName
      	  } 
		});
		res.render('displayEmployeesView', 
		  {title: "List of Employees", data:results});
	  });
};