/* eslint-disable max-len */
let moneyInserted = 0;
let change = 0;
let msg = '';
const messageEle = document.getElementById("message");
let totalPaid = 0;
const beverages = ['Coke', 'Sprite', 'Lemonade', 'Water'];
const price = 1.30;

// CURRENCY VALUES
const currencyOne = 1;
const currencyFive = 5;
const currencyNickel = 0.05;
const currencyDime = 0.10;
const currencyQuarter = 0.25;

// SUM OF CURRENCY INSERTED
function getTotal() {
  let currencyOnes = Number(document.getElementById('ones').value);
  let currencyFives = Number(document.getElementById('fives').value);
  let currencyNickels = Number(document.getElementById('nickels').value);
  let currencyDimes = Number(document.getElementById('dimes').value);
  let currencyQuarters = Number(document.getElementById('quarters').value);

  if (currencyOnes > 0) {
    currencyOnes *= currencyOne;
  }
  if (currencyFives > 0) {
    currencyFives *= currencyFive;
  }
  if (currencyNickels > 0) {
    currencyNickels *= currencyNickel;
  }
  if (currencyDimes > 0) {
    currencyDimes *= currencyDime;
  }
  if (currencyQuarters > 0) {
    currencyQuarters *= currencyQuarter;
  }
  totalPaid = (currencyOnes + currencyFives + currencyNickels + currencyDimes + currencyQuarters).toFixed(2);
  console.log('total paid', totalPaid);
  return totalPaid;
}
console.log('get total', getTotal());

function sumInsertedMoney() {
  moneyInserted = getTotal();
  document.getElementById("paid").innerHTML = moneyInserted;
  return moneyInserted;
}
console.log('tally:', sumInsertedMoney());

function clearInsertedMoney() {
  moneyInserted = 0;
  document.getElementById("paid").innerHTML = moneyInserted;
}

function clearForm() {
  document.getElementById('ones').value = 0;
  document.getElementById('fives').value = 0;
  document.getElementById('nickels').value = 0;
  document.getElementById('dimes').value = 0;
  document.getElementById('quarter').value = 0;
}

function cancel() {
  getTotal();
  if (totalPaid > 0) {
    msg = `Transaction cancelled. $${totalPaid} has been returned.`;
    clearForm();
    clearInsertedMoney();
    messageEle.innerHTML = msg;
  } else if (totalPaid === 0) {
    msg = `Insert money first. Select a beverage.`;
    messageEle.innerHTML = msg;
  }
}

function calculateChange() {
  let tempChange = 0;
  if (getTotal() !== 0) {
    (tempChange = (getTotal() - price).toFixed(2));
  }
  return tempChange.toFixed(2);
}

function dispenseBeverage(beverage) {
  messageEle.innerHTML = "";
  const selectedBeverage = beverages[beverage];
  change = calculateChange();
  if (change < 0) {
    msg = `You did not pay enough. $${totalPaid} has been refunded.`;
    totalPaid = 0;
    change = 0;
    clearForm();
    clearInsertedMoney();
    messageEle.innerHTML = msg;
  } else if (change >= 0) {
    msg = `${selectedBeverage} has been dispensed. $${change} change has been returned.`;
    totalPaid = 0;
    change = 0;
    clearForm();
    clearInsertedMoney();
    messageEle.innerHTML = msg;
  } else if (totalPaid === 0) {
    msg = `Please pay before selecting a beverage.`;
    messageEle.innerHTML = msg;
  }
}
