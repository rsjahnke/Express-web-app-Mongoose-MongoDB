/* Rebecca Jahnke, HW3 
   follows ex09_mongoose.js.
   client file that connects to the MongoDB database, uses the Mongoose 
   schema specified in employeesDb.js, and creates & saves the data for 
   each of our three employees from employeeModule in previous homework. */ 

// load mongoose module
var mongoose = require('mongoose');

// create MongoDB connection object 
var dbUrl = 'mongodb://127.0.0.1:27017/cs602db';
var connection = mongoose.createConnection(dbUrl);

// load schema module and create model object using this database connection
var EmployeesDb = require('./routes/employeesDb.js'); // import module w/ schema for all documents
var Employee = EmployeesDb.getModel(connection); // export function getModel & establish connection to database 

// when database connection is established...
connection.on("open", function(){

	// Employee objects can be created and saved to database using save() method
	var employee;

	// done for each of 3 employees from last assignments' employeeModule
	employee = new Employee({
		firstName: 'John',
		lastName: 'Smith'
	});
	employee.save();

	employee = new Employee({
		firstName: 'Jane',
		lastName: 'Smith'
	});
	employee.save();

	employee = new Employee({
		firstName: 'John',
		lastName: 'Doe'
	});
	
	/* after last employee saved, connection closed in callback 
	   function after save is done */ 
	employee.save(function(err) {
		connection.close();
		if (err) throw err;
		console.log("Success!");
	});

});
