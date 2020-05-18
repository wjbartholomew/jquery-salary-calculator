$(document).ready(readyNow); // scripts to run on page load

function readyNow(){  // adding functionality to button clicks
    $('#submitButton').on('click', submitData);
    $('#employees').on('click', '#deleteButton', deleteEmployee); // using a descendant selector to attach a click event to deleteButton
}

let employeeData = [];  // Global array to hold employee data from DOM inputs

function submitData(){ // function to get client input data
    let firstName = $('#firstName').val();  
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    employeeData.push({firstName,lastName,id,title,annualSalary})  // creating and placing an object in employeeData array
    $('#employees').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${id}</td><td>${title}</td><td>${annualSalary}</td><td><button id="deleteButton">Delete</button></td></tr>`) // appending employee objects to the DOM
    $('#firstName').val('');   // clearing input values after click event
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    totalMonthlyCosts();  // calling separate function to utilize stored client data
}

function totalMonthlyCosts(){ // function calculates monthly costs associated with a payroll
    $('#monthlyCosts').empty();  // clearing DOM value displayed after each employees information is submitted
    let monthlyCosts = 0;  
    for(cost of employeeData){  // getting specific data from each object our array
        monthlyCosts = monthlyCosts + cost.annualSalary/12;
    }
    if (monthlyCosts > 20000){  // determination if monthly costs are acceptable or not and indicating if or if not by changing the background color of a DOM element 
        $('#monthlyCosts').removeClass("monthlyCostsLow").addClass("monthlyCostsHigh"); 
    }
    else if (monthlyCosts <= 20000){
        $('#monthlyCosts').addClass("monthlyCostsLow"); 
    }
    $('#monthlyCosts').append(monthlyCosts);
}

function deleteEmployee(){  // function that deletes a row of data from the DOM when deleteButton is clicked
    console.log('in delete')
    $(this).parent().parent().remove(); // using jquery methods to target and delete items on the DOM
}