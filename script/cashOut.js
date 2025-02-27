// add click event for cash-out
document.getElementById("cashOut-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const account = document.getElementById(
    "input-cash-out-account-number"
  ).value;
  const pinNumber = getInputFieldById("input-cash-out-pin");
  // account number and PIN number validation
  const validateAccNumberAndPin = loginFormValidation(account, pinNumber);
  const amount = getInputFieldById("input-cash-out-amount");
  // amount validation
  const amountValidated = amountValidation(amount);
  // main Balance
  const mainBalance = getInnerTextById("main-balance");
  let bank = null;
  if (validateAccNumberAndPin && amountValidated) {
    const nowBalance = mainBalance - amount;
    document.getElementById("main-balance").innerText = nowBalance;
    setTimeout(() => {
      message("cash-out-success");
    }, 500);
    transaction(amount, account, bank, nowBalance, "cash-out");
  }
});
