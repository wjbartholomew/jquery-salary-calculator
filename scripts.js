$(document).ready(readyNow); // scripts to run on page load

function readyNow(){  // adding functionality to button click
    $('#submitButton').on('click', submitData);
}

let employeeData = [];  // Global array to hold employee data from DOM inputs

function submitData(){ // function to get user input data
    let firstName = $('#firstName').val();  
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    employeeData.push({firstName,lastName,id,title,annualSalary})
    $('#employees').append(`<tr><th>${firstName}</th><th>${lastName}</th><th>${id}</th><th>${title}</th><th>${annualSalary}</th></tr>`)
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    totalMonthlyCosts();
    console.log(employeeData)
}

function totalMonthlyCosts(){
    $('#monthlyCosts').empty();
    let monthlyCosts = 0;
    for(cost of employeeData){
        monthlyCosts = monthlyCosts + cost.annualSalary/12;
        console.log(monthlyCosts);
    }
    if (monthlyCosts > 20000){
        $('#monthlyCosts').addClass(); 
    }
    $('#monthlyCosts').append(monthlyCosts);
}