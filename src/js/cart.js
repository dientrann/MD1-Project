renderHeader();
renderModal();
renderFooter();

function renderTable(products) {
  let dataUserLogin = JSON.parse(localStorage.getItem("userLogin")) ?? {};
  if (dataUserLogin == {}) {
    return;
  }
  let carts = dataUserLogin.cart;
  console.log(carts);
  let tbodyEL = document.querySelector(".bodyTable");
  let dataTableString = ``;
  carts.forEach((element) => {
    console.log(element);
    let product = products.find((item) => {
      console.log(item.productId, item.productId == element, element);
      return element == item.productId;
    });
    console.log(product);
    dataTableString += `
    <tr>
        <td><input type="checkbox" name="check" value="" checked /></td>
        <td>${product.productName}</td>
        <td>${product.productImg}</td>
        <td>${product.productPrice}</td>
    </tr>
    `;
  });
  tbodyEL.innerHTML = dataTableString;
}

renderTable(listProduct);
