let bills = [];

function dataBillLocal() {
  let dataLocal = localStorage.getItem("bills");
  if (dataLocal) {
    return JSON.parse(dataLocal);
  } else return [];
}

bills = dataBillLocal();

function addBill(arr, users) {
  let listCheck = itemCheck();
  let dataUserLogin = JSON.parse(localStorage.getItem("userLogin")) ?? {};
  if (dataUserLogin == {}) {
    alert("Not Login");
    return;
  }
  let newBill = {
    billId: Date.now() * Math.random(),
    billUser: dataUserLogin.id,
    billProducts: listCheck,
    billPrice: sumPrice(listCheck, listProduct),
    billStatus: "pending",
  };
  arr.push(newBill);
  localStorage.setItem("bills", JSON.stringify(arr));
  listCheck.forEach((element) => {
    deleteCart(element, users);
  });
}

function getProductBill(bill, products) {
  let arrProduct = bill.billProducts;
  let productName = [];
  arrProduct.forEach((element) => {
    products.find((item) => {
      if (element == item.productId) {
        productName.push(item.productName);
        return true;
      }
      return false;
    });
  });
  return productName;
}

function renderTableBill(bills, products) {
  document.querySelector(".sumPrice").style.display = "none";
  document.querySelector(".btnPay").style.display = "none";
  document.querySelector("thead").innerHTML = `
  <tr>
    <th>
      <input type="checkbox" checked />
    </th>
    <th>User Name</th>
    <th>Price</th>
    <th>Product Name</th>
    <th>Status</th>
    <th>Delete</th>
  </tr>
  `;
  let tbodyEL = document.querySelector(".bodyTable");
  let dataTableString = ``;
  let dataUserLogin = JSON.parse(localStorage.getItem("userLogin")) ?? {};
  if (dataUserLogin == {}) {
    alert("Not Login");
    return;
  }
  let userBills = [];
  bills.forEach((element) => {
    if (element.billUser == dataUserLogin.id) {
      userBills.push(element);
    }
  });
  if (userBills.length == 0) {
    dataTableString = `<tr><th>No Bill<th/></tr>`;
    tbodyEL.innerHTML = dataTableString;
    return;
  }
  userBills.forEach((element, index) => {
    dataTableString += `
    <tr class="bill${index}">
        <td><input onchange="sumPrice(itemCheck(), listProduct)" type="checkbox" class="check" value="" checked /></td>
        <td>${dataUserLogin.userName}</td>
        <td>${element.billPrice}</td>
        <td><ul class="listNameProduct"></ul></td>
        <td>${element.billStatus}</td>
        <td><button onclick="deleteBill(${element.billId},bills)" type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    `;
  });

  tbodyEL.innerHTML = dataTableString;
  userBills.forEach((element, index) => {
    let productNameBill = getProductBill(element, products);
    let dataItem = ``;
    let trEl = document.querySelector(`.bill${index}`);
    let listNameProductEl = trEl.querySelector(".listNameProduct");
    productNameBill.forEach((item) => {
      dataItem += `<li class="itemName">${item}</li>`;
    });
    listNameProductEl.innerHTML = dataItem;
  });
}

function deleteBill(idBill, bills) {
  let bill = bills.find((item) => {
    return item.billId == idBill;
  });

  if (bill.billStatus != "pending") {
    alert("No Delete");
    return;
  }
  for (let i in bills) {
    if (bills[i].billId == idBill) {
      bills.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("bills", JSON.stringify(bills));
  renderTableBill(listProduct);
}
