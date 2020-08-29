$( document ).ready( onReady );

//globals
let employees = [
    {
        firstName: 'Leslie',
        lastName: 'Knope',
        id: '13',
        jobTitle: 'Deputy Director',
        annualSalary: 46931
    },

    {
        firstName: 'Ron',
        lastName: 'Swanson',
        id: '27',
        jobTitle: 'Director',
        annualSalary: 60425
    },
    {
        firstName: 'Donna',
        lastName: 'Meagle',
        id: '87',
        jobTitle: 'Office Manager',
        annualSalary: 79458
    },
    {
        firstName: 'Chris',
        lastName: 'Traeger',
        id: '344',
        jobTitle: 'City Manager',
        annualSalary: 92183
    }
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
    $(this).closest('tr').remove();
} // end onRemove


function subtractEmployeeSalaryFromTotal(){
    console.log('in subtractEmployeeSalaryFromTotal');
    //target this employee's salary  
    //let el = $(this).closest('td')
    //let employeeSalary = $(this).data()
    //subtract from monthly total
    //monthlyTotal -= (employeeSalary / 12)
} // end subtractEmployeeSalaryFromTotal
