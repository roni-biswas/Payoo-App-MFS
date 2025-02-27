// add click event for add money button
document.getElementById("addMoney-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const account = document.getElementById("input-money-account-number").value;
  const pinNumber = getInputFieldById("input-pin-number");
  // account number and PIN number validation
  const validateAccNumberAndPin = loginFormValidation(account, pinNumber);
  const amount = getInputFieldById("input-add-amount");
  // amount validation
  const amountValidated = amountValidation(amount);
  // get selected Bank
  const selectedBankValue = getSelectedBankById("selected");
  //   selectedBand validation
  const selectBankValidated = selectBankValidation(selectedBankValue);
  //   main balance
  const mainBalance = getInnerTextById("main-balance");
  if (validateAccNumberAndPin && amountValidated && selectBankValidated) {
    const nowBalance = mainBalance + amount;
    document.getElementById("main-balance").innerText = nowBalance;
    setTimeout(() => {
      message("add-money-success");
    }, 500);
    transaction(amount, account, selectedBankValue, nowBalance, "add-money");
  }
});
