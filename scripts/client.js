$( document ).ready( onReady );

//globals
let employees = [
    {
        firstName: 'Ron',
        lastName: 'Swanson',
        id: '278',
        jobTitle: 'Director',
        annualSalary: 60425
    },
    {
        firstName: 'Leslie',
        lastName: 'Knope',
        id: '577',
        jobTitle: 'Deputy Director',
        annualSalary: 46931
    },
    {
        firstName: 'Donna',
        lastName: 'Meagle',
        id: '235',
        jobTitle: 'Office Manager',
        annualSalary: 53000
    },
    {
        firstName: 'Ann',
        lastName: 'Perkins',
        id: '1284',
        jobTitle: 'Public Relations Director',
        annualSalary: 40000
    },
    {
        firstName: 'Tom',
        lastName: 'Haverford',
        id: '679',
        jobTitle: 'Business Liaison',
        annualSalary: 55384
    },
    {
        firstName: 'Gary',
        lastName: 'Gergich',
        id: '395',
        jobTitle: 'Office Manager',
        annualSalary: 52000
    },
    {
        firstName: 'April',
        lastName: 'Ludgate-Dwyer',
        id: '812',
        jobTitle: 'Assistant to the Director',
        annualSalary: 35671
    },
];
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
    $('#employeesList').append(`<tr>
    <td>${newEmployee.firstName}</td>
    <td>${newEmployee.lastName}</td>
    <td>${newEmployee.id}</td>
    <td>${newEmployee.jobTitle}</td>
    <td class='annualSalary'>${newEmployee.annualSalary}</td>
    <td><button class='removeEmployeeBtn'>Delete</button></td>
    </tr>
    `)
    //setEmployeeAnnualSalaryData();
    emptyInputs();
    calculateTotalCosts();
} // end addEmployee

function calculateTotalCosts(){
    console.log('in calculateTotalCosts')
    //calculate total monthly costs
    for (let i = 0; i < employees.length; i++){
        //for each employee salary, add up total of all costs
        monthlyTotal += ((Number(employees[i].annualSalary)) / 12);
    } // end for
    let el = $( '#totalMonthly' );
    el.empty();
    el.append((monthlyTotal).toFixed(2));
    //twoDecimals();
    checkTotal();
} // end calculateTotalCosts

function checkTotal(){
    console.log('in check total');
    if (monthlyTotal > 20000){
        $('#totalMonthly').addClass('red');
    }
} // end checkTotal

function displayEmployees(){
    console.log( 'in displayEmployees' );
    // target a tbody element on DOM
    let el = $( '.employeesOut' );
    // empty el
    el.empty();
    // loop through inventory
    for( let i=0; i<employees.length; i++ ){
        // append each item to the tbody 
        el.append( `<tr>
        <td>${ employees[i].firstName }</td>
        <td>${ employees[i].lastName }</td>
        <td>${ employees[i].id }</td>
        <td>${ employees[i].jobTitle }</td>
        <td class='annualSalary'>${ employees[i].annualSalary }</td>
        <td><button class='removeEmployeeBtn'>Delete</button></td></tr>
        ` );
    } // end for
    calculateTotalCosts();
} // end displayEmployees

function emptyInputs(){
    console.log('in emptyInputs')
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
} // end emptyInputs

function onReady(){
    // capture click event on element with "addEmployeeButton"
    $( '#addEmployeeButton' ).on( 'click', addEmployee );
    $( document ).on( 'click', '.removeEmployeeBtn', onRemove );
    displayEmployees();
} // end onReady

function onRemove(){
    console.log('in onRemove')
    // target table row
    let tr = $(this).parent().parent();
    // target text in salary
    let annualSalary = tr.children('.annualSalary').text();
    // math stuff
    let monthlySalary = (Number(annualSalary / 12)).toFixed(2);
    // remove salary from total
    monthlyTotal-=monthlySalary
    // update DOM
    let el = $( '#totalMonthly' );
    el.empty();
    el.append((monthlyTotal).toFixed(2));
    if (monthlyTotal < 20000) {
        $('#totalMonthly').removeClass('red');
    }
    // peace out employee
    $(this).parent().parent().remove();
} // end onRemove