
document.getElementById('loginBtn').addEventListener('click', function(){
    document.getElementById('personalBank').style.display = "none";
    document.getElementById('workInfo').style.display = "block";
})

// Deposit Button Event handler
document.getElementById('deposit').addEventListener('click', function(){
    const depositNumber =getInputNumber('depositAmount');

    updateSpanTag("currentDeposit",depositNumber);
    updateSpanTag("currentbalance",depositNumber);
    
    document.getElementById('depositAmount').value = "";
})

// Withdrow Button Event handler
document.getElementById('withdraw').addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');

    updateSpanTag("currentWithdraw", withdrawNumber);
    updateSpanTag("currentbalance", -1*withdrawNumber);
    
    document.getElementById('withdrawAmount').value = "";
})

//Get Input Number
function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}

// Update span tag value Function 
function updateSpanTag(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const TotalAmount = depositNumber + currentNum;
    document.getElementById(id).innerText = TotalAmount;
}