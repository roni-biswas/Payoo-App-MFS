// transaction history
function transaction(amount, account, bank = null, mainBalance, transaction) {
  const transactionContainer = document.getElementById(
    "transaction-history-container"
  );
  const txId = Math.floor(Math.random() * 99999999999);
  const date = new Date();
  const nowDate = date.toLocaleString();
  const div = document.createElement("div");
  div.classList = "card w-full max-w-sm shrink-0 shadow-md mb-3";
  if (transaction === "add-money" && bank !== null) {
    div.innerHTML = `
                    <div class="card-body">
                        <h2 class="card-title">Added Money <span><span>${amount}</span><span
                                    class="font-extrabold">৳</span></span>
                        </h2>
                        <p>From Account No. ${account} <br> Bank Name: <span>${bank}</span> <br>TxID: ${txId}
                            <br> Now your balance : <span class="font-extrabold">৳</span><span
                                class="font-bold">${mainBalance}</span>
                        </p>
                        <p>date: ${nowDate}</p>
                    </div>
    `;
    transactionContainer.prepend(div);
  } else if (transaction === "cash-out" || bank) {
    // const div = document.createElement('div')
    // div.classList = "card w-full max-w-sm shrink-0 shadow-md mb-3";
    div.innerHTML = `
    <div class="card-body">
    <h2 class="card-title">Cash-Out Money <span><span>${amount}</span><span
    class="font-extrabold">৳</span></span>
    </h2>
    <p>From Account No. ${account} <br>TxID: ${txId}
    <br> Now your balance : <span class="font-extrabold">৳</span><span
    class="font-bold">${mainBalance}</span>
    </p>
    <p>date: ${nowDate}</p>
    </div>
    `;
    transactionContainer.prepend(div);
  } else {
    message("error");
  }
}
