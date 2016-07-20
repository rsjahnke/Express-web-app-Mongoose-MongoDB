/* Rebecca Jahnke, HW3
   Exports function that renders view for adding a new employee
*/

module.exports = 
	function addEmployee(req , res , next){
  	res.render('addEmployeeView', 
  		{title:"Add an Employee"});
};
