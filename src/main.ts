import "./style.css";

const peopleNumber = document.getElementById(
  "peopleNumber",
) as HTMLInputElement | null;
const billAmount = document.getElementById(
  "billAmount",
) as HTMLInputElement | null;
const tipOptions = document.querySelectorAll(
  'input[name="tipPercentage"]',
) as NodeListOf<HTMLInputElement>;

const customTip = document.getElementById(
  "customTip",
) as HTMLInputElement | null;

const peopleInput = document.getElementById("peopleInput");
const billInput = document.getElementById("billInput");

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
  if (tipOptions)
    tipOptions.forEach((tipOption) => {
      (tipOption as HTMLInputElement).checked = false;
    });
  if (tipResult) tipResult.textContent = "0.00";
  if (totalResult) totalResult.textContent = "0.00";

  peopleError?.classList.add("hidden");
  billError?.classList.add("hidden");
  tipError?.classList.add("hidden");
}

resetBtn?.addEventListener("click", reset);

function calculateTip() {
  const bill = Number(billAmount?.value);
  const people = Number(peopleNumber?.value);

  if (people <= 0) {
    peopleError?.classList.remove("hidden");
    peopleInput?.classList.remove("border-transparent");
    peopleInput?.classList.add("border-red-500");
  } else {
    peopleError?.classList.add("hidden");
    peopleInput?.classList.remove("border-red-500");
    peopleInput?.classList.add("border-transparent");
  }

  if (bill <= 0) {
    billError?.classList.remove("hidden");
    billAmount?.classList.add("border-red-500");
    billInput?.classList.remove("border-transparent");
    billInput?.classList.add("border-red-500");
  } else {
    billError?.classList.add("hidden");
    billAmount?.classList.remove("border-red-500");
    billInput?.classList.remove("border-red-500");
    billInput?.classList.add("border-transparent");
  }

  const selectedTip = document.querySelector(
    'input[name="tipPercentage"]:checked',
  ) as HTMLInputElement | null;

  let tip: number;

  if (customTip?.value) {
    tip = Number(customTip.value);
    tipError?.classList.add("hidden");
  } else if (selectedTip) {
    tip = Number(selectedTip.value);
    tipError?.classList.add("hidden");
  } else {
    tipError?.classList.remove("hidden");
    return;
  }

  if (bill <= 0 || people <= 0) {
    return;
  }

  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;

  const tipPerPerson = tipAmount / people;
  const totalPerPerson = totalAmount / people;

  if (tipResult) {
    tipResult.textContent = `$${tipPerPerson.toFixed(2)}`;
  }

  if (totalResult) {
    totalResult.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateTip();
});
