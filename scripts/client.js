$( document ).ready( onReady );

//globals
let employees = [];

function addEmployee(){
    console.log( 'in addEmployee ');
    // get user input & place into a new object
    const newEmployee = {
    // values come from input fields 
        firstName: $( '#firstNameIn ').val(),
        lastName: $( '#lastNameIn ').val(),
        id: $( '#idIn ').val(),
        jobTitle: $( '#jobTitleIn ').val(),
        annualSalary: $( '#annualSalaryIn ').val(),
    } // end new employee
    // push the new object into our array
    employees.push( newEmployee )
    // display inventory
} // end addEmployee

function onReady(){
    // capture click event on element with "addEmployeeButton"
    $( '#addEmployeeButton' ).on( 'click', addEmployee );
}

