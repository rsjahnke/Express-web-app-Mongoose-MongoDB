/* Rebecca Jahnke, HW3
   based off dbConnection.js from case study example to define the schema  
*/

var mongoose = require('mongoose');

var dbUrl = 'mongodb://127.0.0.1:27017/cs602db';
var connection = null;
var model = null;

var Schema = mongoose.Schema;

/* Define Schema. Use the Schema for capturing employee details for each employee document -
   two properties first and last name, each strings */
var employeeSchema = new Schema({
	firstName: String,
	lastName: String
});

/* Module exports function getModel that creates the model for the schema
   using MongoDB database connection object. Based on name given ("EmployeeModel")
   documents will be created in collection named accordingly. */
module.exports = {
	getModel: function getModel() {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl);
			model = connection.model("EmployeeModel", 
								employeeSchema);
		};
		return model;
	}
};

