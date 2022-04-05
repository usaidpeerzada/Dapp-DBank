import { hello } from "../../declarations/hello";

window.addEventListener("load", async function () {
  console.log("hello", hello);
  const currentAmount = await hello.checkBalance();
  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const button = e.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(
    document.getElementById("withdrawal-amount").value
  );

  button.setAttribute("disabled", true);
  if (inputAmount) {
    await hello.topUp(inputAmount);
  } else if (outputAmount) {
    await hello.withdraw(outputAmount);
  } else {
    alert("add or withdraw amount");
  }
  const currentAmount = await hello.checkBalance();
  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;

  document.getElementById("input-amount").value = "";
  button.removeAttribute("disabled");
});
