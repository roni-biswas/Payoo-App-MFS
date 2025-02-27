// add section toggle event features
showSectionById("add-money-section");
document.getElementById("add-money-btn").addEventListener("click", () => {
  showSectionById("add-money-section");
  document.getElementById("message").style.display = "none";
});
document.getElementById("cash-out-btn").addEventListener("click", () => {
  showSectionById("cash-out-section");
  document.getElementById("message").style.display = "none";
});
document.getElementById("transaction-btn").addEventListener("click", () => {
  showSectionById("transaction-section");
  document.getElementById("message").style.display = "none";
});
document.getElementById("transfer-money-btn").addEventListener("click", () => {
  message("not-implemented");
});
document.getElementById("get-bonus-btn").addEventListener("click", () => {
  message("not-implemented");
});
document.getElementById("pay-bill-btn").addEventListener("click", () => {
  message("not-implemented");
});
