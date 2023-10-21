let bills = [];

function dataBillLocal() {
  let dataLocal = localStorage.getItem("bills");
  if (dataLocal) {
    return JSON.parse(dataLocal);
  } else return [];
}

bills = dataBillLocal();

function renderHeaderBill() {
  document.querySelector(".headerRightContent").innerHTML = `
  <h4>Bill</h4>
  `;
}

function renderDataBill(arr, users, products) {
  renderHeaderBill();
  document.querySelector("thead").innerHTML = `
    <tr>
        <th>User Name</th>
        <th>Price</th>
        <th>Product Name</th>
        <th>Status</th>
        <th>Tools</th>
    </tr>
    `;
  let bodyTableEl = document.querySelector(".bodyTable");
  let dataProduct = ``;
  arr.forEach((item, index) => {
    let userBill = users.find((user) => {
      return user.id == item.billUser;
    });
    dataProduct += `
    <tr class="billItem">
        <td>${userBill.userName}</td>
        <td>${item.billPrice}</td>
        <td>${item.billProducts}</td>
        <td>${item.billStatus}</td>
        <td>
        <button type="button" class="btn btn-danger">Delete</button
        ><button type="button" class="btn btn-primary">Edit</button>
        </td>
    </tr>
        `;
  });

  bodyTableEl.innerHTML = dataProduct;
}
