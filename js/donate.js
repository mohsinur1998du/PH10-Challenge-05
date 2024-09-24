document
  .getElementById("btn-donate")
  .addEventListener("click", function (event) {
    const remainingBalance = getTextFieldValueById("total-money");
    const addMoney = getInputFieldValueById("input-donate-money");
    document.getElementById("input-donate-money").value = "";

    if (isNaN(addMoney) || remainingBalance < addMoney || addMoney < 0) {
      alert("Failed to Donate!!");
    } else {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = addMoney + balance;

      const totalBalance = remainingBalance - addMoney;

      document.getElementById("account-balance").innerText = newBalance;
      document.getElementById("total-money").innerText = totalBalance;

      const div = document.createElement("div");

      //   div.innerHTML = `
      //         <h2 style="font-weight: bold; border: 1px solid grey; text-align: center;">${addMoney} is donated for ${
      //     event.target.previousElementSibling.previousElementSibling
      //       .previousElementSibling.textContent
      //   }.</h2>
      //         <p>Date: ${new Date()}</p>
      //         `;

      const h2 = document.createElement("h2");
      h2.textContent = `${addMoney} is donated for ${event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`;

      h2.style.fontWeight = 900;

      const p = document.createElement("p");
      p.textContent = `Date: ${new Date()}`;

      div.appendChild(h2);
      div.appendChild(p);

      div.style.border = "1px solid";
      div.style.margin = "0 auto";
      div.style.padding = "10px";
      div.style.marginBottom = "10px";
      div.style.borderRadius = "6px";

      console.log(div);
      document.getElementById("history").appendChild(div);
    }
  });

document
  .getElementById("btn-donate-02")
  .addEventListener("click", function (event) {
    const remainingBalance = getTextFieldValueById("total-money");
    const addMoney = getInputFieldValueById("input-donate-money-02");
    document.getElementById("input-donate-money-02").value = "";

    if (isNaN(addMoney) || remainingBalance < addMoney || addMoney < 0) {
      alert("Failed to Donate!!");
    } else {
      const balance = getTextFieldValueById("account-balance-02");
      const newBalance = addMoney + balance;

      const totalBalance = remainingBalance - addMoney;

      document.getElementById("account-balance-02").innerText = newBalance;
      document.getElementById("total-money").innerText = totalBalance;

      const div = document.createElement("div");

      //   div.innerHTML = `
      //         <h2 style="font-weight: bold; border: 1px solid grey; text-align: center;">${addMoney} is donated for ${
      //     event.target.previousElementSibling.previousElementSibling
      //       .previousElementSibling.textContent
      //   }.</h2>
      //         <p>Date: ${new Date()}</p>
      //         `;

      const h2 = document.createElement("h2");
      h2.textContent = `${addMoney} is donated for ${event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`;

      h2.style.fontWeight = 900;

      const p = document.createElement("p");
      p.textContent = `Date: ${new Date()}`;

      div.appendChild(h2);
      div.appendChild(p);

      div.style.border = "1px solid";
      div.style.margin = "0 auto";
      div.style.padding = "10px";
      div.style.marginBottom = "10px";
      div.style.borderRadius = "6px";

      console.log(div);
      document.getElementById("history").appendChild(div);
    }
  });

document
  .getElementById("btn-donate-03")
  .addEventListener("click", function (event) {
    const remainingBalance = getTextFieldValueById("total-money");
    const addMoney = getInputFieldValueById("input-donate-money-03");
    document.getElementById("input-donate-money-03").value = "";

    if (isNaN(addMoney) || remainingBalance < addMoney || addMoney < 0) {
      alert("Failed to Donate!!");
    } else {
      const balance = getTextFieldValueById("account-balance-03");
      const newBalance = addMoney + balance;

      const totalBalance = remainingBalance - addMoney;

      document.getElementById("account-balance-03").innerText = newBalance;
      document.getElementById("total-money").innerText = totalBalance;

      const div = document.createElement("div");

      //   div.innerHTML = `
      //         <h2 style="font-weight: bold; border: 1px solid grey; text-align: center;">${addMoney} is donated for ${
      //     event.target.previousElementSibling.previousElementSibling
      //       .previousElementSibling.textContent
      //   }.</h2>
      //         <p>Date: ${new Date()}</p>
      //         `;

      const h2 = document.createElement("h2");
      h2.textContent = `${addMoney} is donated for ${event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent}`;

      h2.style.fontWeight = 900;

      const p = document.createElement("p");
      p.textContent = `Date: ${new Date()}`;

      div.appendChild(h2);
      div.appendChild(p);

      div.style.border = "1px solid";
      div.style.margin = "0 auto";
      div.style.padding = "10px";
      div.style.marginBottom = "10px";
      div.style.borderRadius = "6px";

      console.log(div);
      document.getElementById("history").appendChild(div);
    }
  });
