renderHeader();
renderModal();
renderFooter();

renderUserLogin();

function renderTable(products) {
  document.querySelector("thead").innerHTML = `
  <tr>
    <th>
      <input type="checkbox" checked />
    </th>
    <th>Name Product</th>
    <th>Img Product</th>
    <th>Price Product</th>
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
  let carts = dataUserLogin.cart;
  if (carts.length == 0) {
    dataTableString = `<tr><th>No Product<th/></tr>`;
    tbodyEL.innerHTML = dataTableString;
    return;
  }
  carts.forEach((element) => {
    let product = products.find((item) => {
      return element == item.productId;
    });
    dataTableString += `
    <tr>
        <td><input onchange="sumPrice(itemCheck(), listProduct)" type="checkbox" class="check" value="${product.productId}" checked /></td>
        <td>${product.productName}</td>
        <td><img src="${product.productImg}" alt="" style="height: 100px; width: 100px;"></td>
        <td>${product.productPrice}</td>
        <td><button onclick="deleteCart(${product.productId},users)" type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    `;
  });
  tbodyEL.innerHTML = dataTableString;
}

renderTable(listProduct);

function itemCheck() {
  let checkEl = document.getElementsByClassName("check");
  let itemCheck = [];

  for (let check of checkEl) {
    if (check.checked) {
      itemCheck.push(check.value);
    }
  }
  return itemCheck;
}

function sumPrice(arr, products) {
  let productPrices = [];
  arr.forEach((element) => {
    let product = products.find((item) => {
      return item.productId == element;
    });
    productPrices.push(product.productPrice);
  });
  let sum = productPrices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  document.querySelector(
    ".sumPrice"
  ).innerHTML = `<h5>Into Money: <span>${sum.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })} </h5></span>`;
  return sum;
}

sumPrice(itemCheck(), listProduct);

function deleteCart(idProduct, users) {
  let userLogin = JSON.parse(localStorage.getItem("userLogin")) ?? {};
  if (userLogin == {}) {
    return;
  }
  let cartUser = userLogin.cart;

  for (let i in cartUser) {
    if (idProduct == cartUser[i]) {
      cartUser.splice(i, 1);
    }
  }

  userLogin = {
    ...userLogin,
    cart: cartUser,
  };
  for (let i in users) {
    if (userLogin.id == users[i].id) {
      users[i] = userLogin;
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("userLogin", JSON.stringify(userLogin));
  renderTable(listProduct);
}

function renderHeaderCart(type = "cart") {
  let headerContainerEl = document.querySelector(".headerContainer");
  let dataHeader = ``;
  if (type == "cart") {
    dataHeader = `
    <div onclick="renderTable(listProduct),renderHeaderCart()" class="menuHeader active">
      <h4>Cart</h4>
    </div>
    <div onclick="renderTableBill(bills, listProduct),renderHeaderCart('bill')" class="menuHeader">
      <h4>Bill</h4>
    </div>
    `;
  } else {
    dataHeader = `
    <div onclick="renderTable(listProduct),renderHeaderCart()" class="menuHeader">
      <h4>Cart</h4>
    </div>
    <div onclick="renderTableBill(bills, listProduct),renderHeaderCart('bill')" class="menuHeader active">
      <h4>Bill</h4>
    </div>
    `;
  }
  headerContainerEl.innerHTML = dataHeader;
}
