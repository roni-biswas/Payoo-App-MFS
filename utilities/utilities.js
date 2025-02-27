// Common shared function
function getInputFieldById(id) {
  return parseFloat(document.getElementById(id).value.trim());
}

function getInnerTextById(id) {
  return parseFloat(document.getElementById(id).innerText.trim());
}

// select back account with validation
function getSelectedBankById(id) {
  return document.getElementById(id).value;
}

// Toggle between sections by button
function showSectionById(id) {
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("cash-out-section").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
