import "./style.css";

interface tipData {
  bill: number;
  people: number;
  tip: number;
}

const peopleNumber = document.getElementById(
  "peopleNumber",
) as HTMLInputElement | null;
const billAmount = document.getElementById(
  "billAmount",
) as HTMLInputElement | null;
const tipPercentage = document.getElementById(
  "tipPercentage",
) as HTMLInputElement | null;

const tipSection = document.getElementById("tip") as HTMLFieldSetElement | null;

const tipResult = document.getElementById("tipResult");
const totalResult = document.getElementById("totalResult");

const form = document.getElementById("tipForm") as HTMLFormElement | null;
const resetBtn = document.getElementById("reset");

const peopleError = document.getElementById("peopleError");
const billError = document.getElementById("billError");
const tipError = document.getElementById("tipError");

function reset() {
  if (peopleNumber) peopleNumber.value = "";
  if (billAmount) billAmount.value = "";
  if (tipPercentage) tipPercentage.value = "";
  if (tipResult) tipResult.textContent = "$0.00";
  if (totalResult) totalResult.textContent = "$0.00";

  peopleError?.classList.add("hidden");
  billError?.classList.add("hidden");
  tipError?.classList.add("hidden");
}

resetBtn?.addEventListener("click", reset);

function calculateTip(data: tipData) {
  const { bill, people, tip } = data;

  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;

  const tipPerPerson = tipAmount / people;
  const totalPerPerson = totalAmount / people;

  if (tipResult) tipResult.textContent = `$${tipPerPerson.toFixed(2)}`;
  if (totalResult) totalResult.textContent = `$${totalPerPerson.toFixed(2)}`;
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
});
