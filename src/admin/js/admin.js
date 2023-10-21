if (JSON.parse(localStorage.getItem("userLogin") ?? "{}").role != "admin") {
  window.location.href = "/";
}

let products = [];

function dataLocalProduct() {
  let dataProduct = localStorage.getItem("products");
  if (dataProduct) {
    return JSON.parse(dataProduct);
  } else return [];
}

products = dataLocalProduct();

function dataLocalUser() {
  let dataUser = localStorage.getItem("users");
  if (dataUser) {
    return JSON.parse(dataUser);
  } else return [];
}

users = dataLocalUser();

function renderMenu(type = "product") {
  let leftContentEl = document.querySelector(".leftContent");
  let dataMenu = ``;
  if (type == "product") {
    dataMenu = `
  <div
      onclick="renderDataProduct(products),renderMenu()"
      class="itemMenu active"
    >
      <h5>Product Manager</h5>
    </div>
    <div
      onclick="renderDataBill(bills, users, products),renderMenu('bill')"
      class="itemMenu"
    >
      <h5>Bill Manager</h5>
    </div>
    `;
  }
  if (type == "bill") {
    dataMenu = `
  <div
      onclick="renderDataProduct(products),renderMenu()"
      class="itemMenu "
    >
      <h5>Product Manager</h5>
    </div>
    <div
      onclick="renderDataBill(bills, users, products),renderMenu('bill')"
      class="itemMenu active"
    >
      <h5>Bill Manager</h5>
    </div>
    `;
  }
  leftContentEl.innerHTML = dataMenu;
}
