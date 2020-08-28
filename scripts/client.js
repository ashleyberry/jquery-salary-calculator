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
    employees.push( newEmployee );
    emptyInputs();
    calculateTotalCosts();
    // display inventory
} // end addEmployee

function calculateTotalCosts(){
    console.log('in calculateTotalCosts')
    //calculate total monthly costs
    let totalPrices = 0;
    for (let i = 0; i < employees.length; i++){
        //for each employee salary, add up total of all costs
        totalPrices += Number(employees[i].annualSalary);
    } // end for
    let el = $( '#totalMonthly' );
    el.empty();
    el.append(totalPrices);
    // display employees in DOM
    displayEmployees();
} // end calculateTotalCosts

function displayEmployees(){
    console.log( 'in displayEmployees');
    // target an tr element on DOM
    let el = $( '#employeesOut' );
    // empty el
    el.empty();
    // loop through employees
    for (let i=0; i<employees.length; i++){
    // append each item to the table
        el.append( `
        <td> ${ employees[i].firstName } </td>
        <td> ${ employees[i].lastName } </td>
        <td> ${ employees[i].id } </td>
        <td> ${ employees[i].jobTitle } </td>
        <td> ${ employees[i].annualSalary } </td>
        `
        );
    } // end for
} // end displayEmployees


function emptyInputs(){
    console.log('in emptyInputs')
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}

function onReady(){
    // capture click event on element with "addEmployeeButton"
    $( '#addEmployeeButton' ).on( 'click', addEmployee );
}


