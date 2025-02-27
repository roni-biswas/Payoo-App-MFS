// login form validated
function loginFormValidation(account = null, pin = null) {
  if (!account) {
    return message("invalid-account");
  } else if (account.length !== 11) {
    return message("invalid-account");
  }
  if (!pin) {
    return message("undefined-pin");
  } else if (pin !== 1234) {
    return message("invalid-pin");
  }
  return true;
}

// amount validation

function amountValidation(amount) {
  if (!amount || amount === NaN || amount === null) {
    message("undefined-amount");
  } else if (amount < 0) {
    message("invalid-amount");
  } else {
    return true;
  }
}

// select back account validation
function selectBankValidation(bank) {
  if (bank !== "") {
    return bank;
  }
  return message("undefined-bank");
}

// alert message popup
function message(alert) {
  const message = document.getElementById("message");
  const div = `<div class="w-full relative p-6">
    <div 
              class="bg-slate-600 p-6 text-white rounded-md absolute left-1/2 -top-98 transform translate-x-[-50%] w-11/12">
              <h3 id="message-alert-header" class="text-lg font-bold">Hello!</h3>
              <p id="message-text" class="py-4">Press ESC key or click the button below to close</p>
              <div class="modal-action">
                  <form method="dialog">
                      <button id="close-msg-btn" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      <button id="transaction-massage-btn" class="btn hidden btn-primary bg-blue-500 border-none outline-none">Check Transaction</button>
                  </form>
              </div>
          </div>
        </div>
    `;
  message.innerHTML = div;
  message.style.display = "block";
  const alertMessage = document.getElementById("message-text");
  const alertHeaderMessage = document.getElementById("message-alert-header");
  const transactionBtn = document.getElementById("transaction-massage-btn");

  // display the message
  switch (alert) {
    case "error":
      alertHeaderMessage.innerText = "Invalid Input!";
      alertMessage.innerText = "Something is wrong! Please try again.";
      alertMessage.style.color = "goldenrod";
      alertMessage.style.fontSize = "16px";
      break;
    case "login-success":
      alertHeaderMessage.innerText = "Success!";
      alertMessage.innerText = "Yor are successfully logged-In.";
      alertMessage.style.color = "greenyellow";
      alertMessage.style.fontSize = "16px";
      break;
    case "add-money-success":
      alertHeaderMessage.innerText = "Money Added!";
      alertMessage.innerText =
        "Yor are successfully add money in your balance.";
      alertMessage.style.color = "greenyellow";
      alertMessage.style.fontSize = "16px";
      transactionBtn.classList.remove("hidden");
      break;
    case "cash-out-success":
      alertHeaderMessage.innerText = "CashOut Money!";
      alertMessage.innerText =
        "Yor are successfully Cash-out from your balance.";
      alertMessage.style.color = "greenyellow";
      alertMessage.style.fontSize = "16px";
      transactionBtn.classList.remove("hidden");
      break;
    case "invalid-pin":
      alertHeaderMessage.innerText = "Wrong PIN!";
      alertMessage.innerText = "Please input valid PIN (4-digit)";
      alertMessage.style.color = "goldenrod";
      alertMessage.style.fontSize = "16px";
      break;
    case "invalid-account":
      alertHeaderMessage.innerText = "Wrong! Account Number";
      alertMessage.innerText = "Please enter valid number (11-digit).";
      alertMessage.style.color = "goldenrod";
      alertMessage.style.fontSize = "16px";
      break;
    case "invalid-amount":
      alertHeaderMessage.innerText = "Wrong! Amount";
      alertMessage.innerText = "Please enter valid and Positive number.";
      alertMessage.style.color = "goldenrod";
      alertMessage.style.fontSize = "16px";
      break;
    case "undefined-pin":
      alertHeaderMessage.innerText = "Empty PIN!";
      alertMessage.innerText = "Please input the PIN.";
      alertMessage.style.color = "goldenrod";
      alertMessage.style.fontSize = "16px";
      break;
    case "undefined-amount":
      alertHeaderMessage.innerText = "Empty Amount!";
      alertMessage.innerText = "Please input the Amount.";
      alertMessage.style.color = "goldenrod";
      alertMessage.style.fontSize = "16px";
      break;
    case "undefined-bank":
      alertHeaderMessage.innerText = "Not Selected!";
      alertMessage.innerText = "Please select the Bank Account.";
      alertMessage.style.color = "goldenrod";
      alertMessage.style.fontSize = "16px";
      break;
    case "not-implemented":
      alertHeaderMessage.innerText = "Not implemented!";
      alertMessage.innerText =
        "Please select between (Add-Money, Cash-Out and Transaction History).";
      alertMessage.style.color = "goldenrod";
      alertMessage.style.fontSize = "16px";
      break;
    default:
      break;
  }

  if ((message.style.display = "block")) {
    document.getElementById("close-msg-btn").addEventListener("click", (e) => {
      e.preventDefault();
      message.style.display = "none";
    });
  }

  // click event for check transaction history
  if ((transactionBtn.classList[0] = "btn")) {
    transactionBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showSectionById("transaction-section");
      message.style.display = "none";
    });
  }
}
