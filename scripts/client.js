$( document ).ready( onReady );


function onReady(){
    // capture click event on element with "addEmployeeButton"
    $( '#addEmployeeButton' ).on( 'click', onAddEmployee );
    $( document ).on( 'click', '.removeEmployeeBtn', onRemove );

    let totalMonthlyCosts = 0;

    function onAddEmployee() {
        console.log( 'in addEmployee ');
        // get user input & place into a new object
        let employee = {
        // values come from input fields 
            firstName: $( '#firstNameIn ').val(),
            lastName: $( '#lastNameIn ').val(),
            id: $( '#idIn ').val(),
            jobTitle: $( '#jobTitleIn ').val(),
            annualSalary: $( '#annualSalaryIn ').val(),
        } // end new employee
        $('#employeesList').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.jobTitle}</td>
        <td class='annualSalary'>${employee.annualSalary}</td>
        <td><button class='removeEmployeeBtn'>Delete</button></td>
        </tr>
        `)
        // empty imputs
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#idIn').val('');
        $('#jobTitleIn').val('');
        $('#annualSalaryIn').val('');

        let monthlySalary = ((employee.annualSalary) / 12);
        totalMonthlyCosts += monthlySalary

        let el = $( '#totalMonthly' );
        el.empty();
        el.append((totalMonthlyCosts).toFixed(2));

        if (totalMonthlyCosts > 20000){
            $('#totalMonthly').addClass('red');
        }
        //displayEmployees();
    } // end onAddEmployee

function onRemove(){
    console.log('in onRemove')
    // peace out employee
    $(this).parent().parent().remove();
    /*
    // target table row
    let tr = $(this).parent().parent();
    // target text in salary
    let annualSalary = tr.children('.annualSalary').text();
    // math stuff
    let monthlySalary = (annualSalary / 12);
    // remove salary from total
    monthlyTotal-=monthlySalary
    // update DOM
    let el = $( '#totalMonthly' );
    el.empty();
    el.append((monthlyTotal).toFixed(2));
    if (monthlyTotal < 20000) {
        $('#totalMonthly').removeClass('red');
    }
    */
    } // end onRemove
} // end onAddEmployee