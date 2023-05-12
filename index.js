const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", () => {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const TnansactonArea = document.getElementById("transaction-area");
  TnansactonArea.style.display = "block";
});
//for deposit button
const Addeposit = document.getElementById("button");
Addeposit.addEventListener("click", () => {
  const depositNumber = getInputNumber("depositAmount");

  update("currentBalance", depositNumber);
  update("currentDeposit", depositNumber);

  document.getElementById("depositAmount").value = "";
});

//withdraw button Even handler

const withdrewBtn = document.getElementById("addwithdraw");
withdrewBtn.addEventListener("click", () => {
  const withdrawNumber = getInputNumber("withdrawAmout");

  update("currentWithdraw", withdrawNumber);
  update("currentBalance", -1 * withdrawNumber);
  document.getElementById("withdrawAmout").value = "";
});

function getInputNumber(id) {
  const Amount = document.getElementById(id).value;
  const amountNumber = parseFloat(Amount);
  return amountNumber;
}

function update(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
