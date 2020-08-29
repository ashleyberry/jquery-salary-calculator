$( document ).ready( onReady );

//globals
let employees = [];
let monthlyTotal = 0;

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
    $('#employeesList').append(`<tr class= latestEmployee>
    <td>${newEmployee.firstName}</td>
    <td>${newEmployee.lastName}</td>
    <td>${newEmployee.id}</td>
    <td>${newEmployee.jobTitle}</td>
    <td>${newEmployee.annualSalary}</td>
    <td><button class='removeEmployeeBtn'>Delete</button></td>
    </tr>
    `)
    emptyInputs();
    calculateTotalCosts();
} // end addEmployee

function calculateTotalCosts(){
    console.log('in calculateTotalCosts')
    //calculate total monthly costs
    for (let i = 0; i < employees.length; i++){
        //for each employee salary, add up total of all costs
        monthlyTotal += Number(employees[i].annualSalary);
    } // end for
    let el = $( '#totalMonthly' );
    el.empty();
    el.append(monthlyTotal);
    checkTotal();
} // end calculateTotalCosts

function checkTotal(){
    console.log('in check total');
    if (monthlyTotal > 20000){
        $('#totalMonthly').addClass('red');
    }
} // end checkTotal

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
    $(document).on('click', '.removeEmployeeBtn', onRemove);
}

function onRemove(){
    console.log('in onRemove')
    $(this).closest('tr').remove();
};
