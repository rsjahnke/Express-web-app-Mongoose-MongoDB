/* Rebecca Jahnke, HW3
   index.js file creates router with routes and their handlers. module exported
   used in main web application 
*/

var express = require('express');
var router = express.Router();


// other modules 
var displayEmployees = require("./displayEmployees");
var addEmployee = require("./addEmployee");
var saveEmployee = require("./saveEmployee");
var editEmployee = require("./editEmployee");
var saveAfterEdit = require("./saveAfterEdit");
var deleteEmployee = require("./deleteEmployee");

// router specs 
router.get('/', function(req, res, next) {
  res.redirect('/employees');
});

// path for displaying all employees
router.get('/employees', displayEmployees);

// paths for adding new employee
router.get('/employees/add', addEmployee);
router.post('/employees/add', saveEmployee);

// paths for editing existing employee
router.get('/employees/edit/:id', editEmployee);
router.post('/employees/edit/:id', saveAfterEdit);

// path for deleting existing employee
router.get('/employees/delete/:id', deleteEmployee);

module.exports = router;