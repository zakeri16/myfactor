const resultEle = document.getElementById("result-body");
const submitBtn = document.getElementById("submit-btn");
const sumEle = document.getElementById("sum");

let sum = 0;

submitBtn.onclick = function () {
  const customerNameEle = document.getElementById("customerName");
  const customerNumberEle = document.getElementById("customerNumber");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productQTY = document.getElementById("productQTY");
    if (customerName =""){
alert ="لطفا نام مشتری را وارد کنید";
returen;
};
  let currentSum = productPrice.value * productQTY.value;
  sum += currentSum;

  let newRecord = "<tr>";
  newRecord += "<td>" + productName.value + "</td>";
  newRecord += "<td>" + productPrice.value + "</td>";
  newRecord += "<td>" + productQTY.value + "</td>";
  newRecord += "<td>" + currentSum + "</td>";
  newRecord += "</tr>";
  resultEle.innerHTML += newRecord;

  customerNameEle.readonly = "readonly";
  customerNameEle.disabled = "disable";

  customerNumberEle.readonly = "readonly";
  customerNumberEle.disabled = "disable";

  productName.value = "";
  productPrice.value = "";
  productQTY.value = "";

  sumEle.innerText = "مجموع قابل پرداخت :" + sum;
};

const printBtn = document.getElementById("print-btn");
printBtn.onclick = function () {
  window.print();
};
