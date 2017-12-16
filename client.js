console.log('js linked');
var monthlyCost = 0;
$(document).ready(start);

function start(){
$('#submit').on('click', addNewEmployee );
$('#employees').on('click', 'button', reset);
$('#employeeInfo').on('click', '.delete', deleteEmployee);



}//end start function



function addNewEmployee(){

  var newEmployee = {
    firstName: $('#fName').val(),
    lastName: $('#lName').val(),
    idNumber: $('#idNum').val(),
    jobTitle: $('#title').val(),
    Salary: $('#salary').val()
  };

    var $row = $('<tr>'); //another way to use jQuery to append to the DOM bling designates
    //that this variable holds a jQuery object
    $row.append('<td>' + newEmployee.firstName + ' ' + newEmployee.lastName +'</td>');
    $row.append('<td>' + newEmployee.idNumber + '</td>');
    $row.append('<td>' + newEmployee.jobTitle + '</td>');
    $row.append('<td>' + '$' + newEmployee.Salary + '</td>');
    $row.append('<td><button class="delete">Delete Employee</button></td>');
    $('#employeeInfo').append($row);
    calculateMonthlyCost(newEmployee);

console.log(newEmployee);
}//end addNewEmployee function
function calculateMonthlyCost(addedEmployee){
  monthlyCost = Math.round(monthlyCost + addedEmployee.Salary/12);
  $('#monthlyCost').children('h3').text('$' + monthlyCost);

}//end monthly salary function
function deleteEmployee(){
    $(this).parents('tr').remove();
}
function reset(){
  $('#imput').empty();
  $('input').val('');
}
