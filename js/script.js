// ===login button event handler start ===
let lodinId = document.getElementById('login');
lodinId.addEventListener("click", function(){
    const loginBox = document.getElementById('login_box');
    loginBox.style.display = "none";
    const transactionBox = document.getElementById('transection_area');
    transactionBox.style.display = 'block'
})
// ===login button event handler end ===

// ===transection part start ===
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositNum = getInputNum("depositAmount");

    updateSpanText("curentDeposit", depositNum)
  updateSpanText("curentBalance", depositNum)
    document.getElementById('depositAmount').value = "";
})
// ===widhdraw button handler===
const withdeawBtn = document.getElementById('addWidhdraw');
withdeawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNum("withdrawAmount");

    updateSpanText("curentWithdraw", withdrawNumber);
    updateSpanText("curentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
})

function getInputNum(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
// ===widhdraw button handler===

function updateSpanText(id, depositNum){
    const curentBalance = document.getElementById(id).innerText;
    const curentBalanceNum = parseFloat(curentBalance);
    const totalBalance = depositNum + curentBalanceNum;
    document.getElementById(id).innerText = totalBalance;
}
// ===transection part end ===