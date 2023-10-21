function showModalAdmin() {
  let modalPageEl = document.querySelector(".modalPage");
  modalPageEl.style.display = "block";
  window.onclick = (event) => {
    if (event.target == modalPageEl) {
      modalPageEl.style.display = "none";
    }
  };
}

function closeModalAdmin() {
  let modalPageEl = document.querySelector(".modalPage");
  modalPageEl.style.display = "none";
}

let types = ["Smart Phone", "Tablet", "Lap Top", "Watch", "Accessory"];
function renderSelectType(arr) {
  let selectTypeEl = document.querySelector(".selectType");
  let optionData = `<option disabled selected>Open this select menu</option>`;
  arr.forEach((element) => {
    optionData += `<option value="${element}">${element}</option>`;
  });

  selectTypeEl.innerHTML = optionData;
}

function itemOption(value) {
  let smartPhone = ["Apple", "SamSung", "Xiaomi", "Oppo", "Vivo", "Honor"];
  let lapTop = ["Apple", "Dell", "SamSung", "Hp", "MSI"];
  let tablet = ["Apple", "SamSung", "Huawei"];
  let watch = ["Apple", "SamSung", "Huawei", "Xiaomi", "Honor"];

  if (value == "Smart Phone") {
    return smartPhone;
  }
  if (value == "Lap Top") {
    return lapTop;
  }
  if (value == "Tablet") {
    return tablet;
  }
  if (value == "Watch") {
    return watch;
  }
  return;
}

function renderOptionManufacturer(arr) {
  let selectTypeEl = document.querySelector(".selectManufacturer");
  selectTypeEl.removeAttribute("disabled");
  let optionData = `<option disabled selected>Open this select menu</option>`;
  arr.forEach((element) => {
    optionData += `<option value="${element}">${element}</option>`;
  });

  selectTypeEl.innerHTML = optionData;
}

function renderModalCreate() {
  let newDiv = document.createElement("div");
  newDiv.className = "modalPage";
  let bodyEL = document.querySelector("body");
  bodyEL.appendChild(newDiv);
  let modalPage = document.querySelector(".modalPage");
  let dataModalPage = `
      <div class="containerModal">
        <div class="headerModal">
          <h5>New Product</h5>
          <i onclick="closeModalAdmin()" class="fa-solid fa-xmark"></i>
        </div>
        <div class="bodyModal">
          <form onsubmit="addProduct(event, products)">
            <div class="form-group">
              <label for="productName">Name Product</label>
              <input
                type="text"
                class="form-control"
                id="productName"
                name="productName"
              />
            </div>
            <div class="form-group">
              <label for="productPrice">Price Product</label>
              <input
                type="number"
                class="form-control"
                id="productPrice"
                name="productPrice"
              />
            </div>
            <div class="form-group">
              <label for="productImg">Img Product</label>
              <input
                type="text"
                class="form-control"
                id="productImg"
                name="productImg"
              />
            </div>
            <label for="">Type</label>
            <select
              name="type"
              class="form-select selectType"
              aria-label="Default select example"
              onchange="renderOptionManufacturer(itemOption(this.value))"
            ></select>
            <label for="">Manufacturer</label>
            <select
              name="manufacturer"
              class="form-select selectManufacturer"
              aria-label="Default select example"
              disabled
            ></select>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="status"
                value="true"
                id="status"
                checked
              />
              <label class="form-check-label" for="status"> Status </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="true"
                name="outstanding"
                id="outstanding"
              />
              <label class="form-check-label" for="outstanding">
                Outstanding
              </label>
            </div>
            <div class="form-group">
              <label for="productName">Quantity</label>
              <input
                type="number"
                class="form-control"
                id="quantity"
                name="quantity"
              />
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
      `;
  modalPage.innerHTML = dataModalPage;
  renderSelectType(types);
}

function renderModalUpdate(productID, arr) {
  let newDiv = document.createElement("div");
  newDiv.className = "modalPage";
  let bodyEL = document.querySelector("body");
  bodyEL.appendChild(newDiv);
  let modalPage = document.querySelector(".modalPage");
  let product = arr.find((item) => {
    return item.productId == productID;
  });
  let dataModalPage = `
    <div class="containerModal">
      <div class="headerModal">
        <h5>Edit Product: ${product.productName}</h5>
        <i onclick="closeModalAdmin()" class="fa-solid fa-xmark"></i>
      </div>
      <div class="bodyModal">
        <form onsubmit="updateProduct(event, ${product.productId}, products)">
          <div class="form-group">
            <label for="productName">Name Product</label>
            <input
              type="text"
              class="form-control"
              id="productName"
              name="productName"
              value="${product.productName}"
            />
          </div>
          <div class="form-group">
            <label for="productPrice">Price Product</label>
            <input
              type="number"
              class="form-control"
              id="productPrice"
              name="productPrice"
              value="${product.productPrice}"
            />
          </div>
          <div class="form-group">
            <label for="productImg">Img Product</label>
            <input
              type="text"
              class="form-control"
              id="productImg"
              name="productImg"
              value="${product.productImg}"
            />
          </div>
          <label for="">Type</label>
          <select
            name="type"
            class="form-select selectType"
            aria-label="Default select example"
            onchange="renderOptionManufacturer(itemOption(this.value))"
            value="${product.type}"
          ></select>
          <label for="">Manufacturer</label>
          <select
            name="manufacturer"
            class="form-select selectManufacturer"
            aria-label="Default select example"
            value="${product.manufacturer}"
            disabled
          ></select>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="status"
              value="true"
              id="status"
            />
            <label class="form-check-label" for="status"> Status </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="true"
              name="outstanding"
              id="outstanding"
            />
            <label class="form-check-label" for="outstanding">
              Outstanding
            </label>
          </div>
          <div class="form-group">
            <label for="productName">Quantity</label>
            <input
              type="number"
              class="form-control"
              id="quantity"
              name="quantity"
              value="${product.quantity}"
            />
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
    `;
  modalPage.innerHTML = dataModalPage;
  renderSelectType(types);
  document.querySelector(".selectType").value = product.type;
  document.querySelector(".selectManufacturer").value = product.manufacturer;
  if (product.status == true) {
    document.getElementById("status").checked = true;
  }
  if (product.outstanding == true) {
    document.getElementById("outstanding").checked = true;
  }
}

/* Product */

function renderHeaderProduct() {
  document.querySelector(".headerRightContent").innerHTML = `
  <h4>Product</h4>
    <button
      onclick="showModalAdmin() , renderModalCreate()"
      class="btn btn-success btnAdd"
    >
      New Product
    </button>
  `;
}

function addProduct(event, arr) {
  event.preventDefault();

  let newProduct = {
    productId: Date.now() * Math.random(),
    productName: event.target.productName.value,
    productPrice: Number(event.target.productPrice.value),
    productImg: event.target.productImg.value,
    productDescribe: "",
    status: event.target.status.value == "true" ? true : false,
    outstanding: event.target.outstanding.value == "true" ? true : false,
    quantity: event.target.quantity.value,
    type: event.target.type.value,
    manufacturer: event.target.manufacturer.value,
  };
  arr.unshift(newProduct);
  localStorage.setItem("products", JSON.stringify(arr));
  alert("Success");
  renderDataProduct(arr);
  closeModalAdmin();
}

function renderDataProduct(arr) {
  renderHeaderProduct();
  document.querySelector("thead").innerHTML = `
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>IMG</th>
    <th>Manufacturer</th>
    <th>Status</th>
    <th>Outstanding</th>
    <th>Quantity</th>
    <th>Type</th>
    <th>Tools</th>
  </tr>
  `;
  let bodyTableEl = document.querySelector(".bodyTable");
  let dataProduct = ``;
  arr.forEach((item, index) => {
    dataProduct += `
      <tr class="productItem">
        <td>${item.productName}</td>
        <td>${item.productPrice}</td>
        <td>
          <img
            src="${item.productImg}"
            alt=""
            style="height: 50px; width: 50px"
          />
        </td>
        <td>${item.manufacturer}</td>
        <td>${item.status}</td>
        <td>${item.outstanding}</td>
        <td>${item.quantity}</td>
        <td>${item.type}</td>
        <td><button onclick="deleteProduct(${item.productId}, products)" type="button" class="btn btn-danger">Delete</button><button onclick="renderModalUpdate(${item.productId}, products), showModalAdmin()" type="button" class="btn btn-primary">Edit</button></td>
      </tr>
      `;
  });

  bodyTableEl.innerHTML = dataProduct;
}
renderDataProduct(products);

function deleteProduct(productId, arr) {
  for (let i in arr) {
    if (arr[i].productId == productId) {
      arr.splice(i, 1);
    }
  }
  localStorage.setItem("products", JSON.stringify(arr));
  renderDataProduct(arr);
}

function updateProduct(event, productId, arr) {
  event.preventDefault();
  for (let i in arr) {
    if (arr[i].productId == productId) {
      arr[i] = {
        productId: arr[i].productId,
        productName: event.target.productName.value,
        productPrice: event.target.productPrice.value,
        productImg: event.target.productImg.value,
        productDescribe: "",
        status: event.target.status.value == "true" ? true : false,
        outstanding: event.target.outstanding.value == "true" ? true : false,
        quantity: event.target.quantity.value,
        type: event.target.type.value,
        manufacturer: event.target.manufacturer.value,
      };
      break;
    }
  }
  localStorage.setItem("products", JSON.stringify(arr));
  alert("Success");
  renderDataProduct(arr);
  closeModalAdmin();
}
