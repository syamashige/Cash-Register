
(function() {

    var targetNumbers = document.getElementsByClassName('numbers');
    var displayScreen = document.getElementById('screen');

    for (var i = 0; i<targetNumbers.length; i++) {
        targetNumbers[i].addEventListener('click', displayNum)
    }

    var openEvent = document.getElementById('open');
    openEvent.addEventListener('click', openRegister);

    function openRegister() {
       var employeeId = prompt("Enter Employee ID", "");
       if (employeeId === "12345") {
           confirm("Welcome")
       } else {
           confirm("Please enter a valid Employee ID")
       }

    }

    function displayNum() {
       displayScreen.innerHTML += this.innerHTML; 
 
    }

    var clearScreen = document.getElementById('clear');
    clearScreen.addEventListener('click', clearNum);

    function clearNum() {
        displayScreen.innerHTML = null;
    }
    
    var result;
    var storeNums;
    var deposits = [];
    var withdrawing = [];
    var storeAddition;
    var storeSubtraction;
    var storeMultiplication;
    var storeDivision;

    var addDeposit = document.getElementById('deposit');
    addDeposit.addEventListener('click', saveDeposit);

    function saveDeposit() {
        deposits.push(parseFloat(displayScreen.innerHTML));
        console.log(deposits);
        displayScreen.innerHTML = null;
    }

    var subWithdrawl = document.getElementById('withdraw');
    subWithdrawl.addEventListener('click', takeOutWithdrawl);

    function takeOutWithdrawl() {
        withdrawing.push(parseFloat(displayScreen.innerHTML));
        console.log(withdrawing);
        displayScreen.innerHTML = null;
    }

    var getBalance = document.getElementById('balance');
    getBalance.addEventListener('click', displayBalance);

    function displayBalance() {
        var sum = 0;
        var minus = 0;
        for (var i = 0; i < deposits.length; i++){
            sum += deposits[i];
        }
        for (var j = 0; j < withdrawing.length; j++) {
            minus += withdrawing[j];
        }
        var totalBalance = (sum - minus);
        displayScreen.innerHTML = totalBalance;
        console.log(totalBalance);
    }

    var getAdding = document.getElementById('addition');
    getAdding.addEventListener('click', addNumbers);

    function addNumbers() {
        storeAddition = parseFloat(displayScreen.innerHTML)
        displayScreen.innerHTML = null;
    }

    var getSubtracting = document.getElementById('subtraction');
    getSubtracting.addEventListener('click', subNumbers);

    function subNumbers() {
        storeSubtraction = parseFloat(displayScreen.innerHTML);
        displayScreen.innerHTML = null;
    }

    var getMultiplying = document.getElementById('multiply');
    getMultiplying.addEventListener('click', multiplyNumbers);

    function multiplyNumbers() {
        storeMultiplication = parseFloat(displayScreen.innerHTML);
        displayScreen.innerHTML = null;
    }

    var getDividing = document.getElementById('divide');
    getDividing.addEventListener('click', divideNumbers);

    function divideNumbers() {
        storeDivision = parseFloat(displayScreen.innerHTML);
        displayScreen.innerHTML = null;
    }

    var getEquals = document.getElementById('equals');
    getEquals.addEventListener('click', showEquals);

    function showEquals() {

            if(!!storeAddition) {
                storeNums = parseFloat(displayScreen.innerHTML);
                result = storeAddition + storeNums;
                displayScreen.innerHTML = result;
                // console.log("add" + storeAddition);
                // console.log("this" + storeNums);
                // console.log("result" + result)
                storeAddition = null;
                receiptElem.appendChild(result);
            } else if (!!storeSubtraction) {
                storeNums = parseFloat(displayScreen.innerHTML);
                result = storeSubtraction - storeNums;
                displayScreen.innerHTML = result;
                // console.log("sub" + storeSubtraction);
                // console.log("minus" + storeNums);
                // console.log("result" + result);
                storeSubtraction = null;
            } else if (!!storeMultiplication){
                storeNums = parseFloat(displayScreen.innerHTML);
                result = storeMultiplication * storeNums;
                displayScreen.innerHTML = result;
                storeMultiplication = null;
            } else if (!!storeDivision) {
                storeNums = parseFloat(displayScreen.innerHTML);
                result = storeDivision / storeNums;
                displayScreen.innerHTML = result;
                storeDivision = null;
            }
    }

    var receiptElem = document.getElementById('receipt');



})();