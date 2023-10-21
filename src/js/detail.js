renderHeader();
renderUserLogin();
renderFooter();

function productID() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  let productId = params.id;
  return productId;
}

function renderProduct(arr) {
  let productId = productID();
  let product = arr.find((item) => {
    return item.productId == productId;
  });
  let dataProduct = `
    <div class="infoProduct">
    <img
      class="imgInfo"
      src="${product.productImg}"
      alt=""
    />
    <div class="info">
      <h4>${product.productName}</h4>
      <h5>${product.productPrice.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</h5>
      <div class="divBtnInfo">
        <button onclick="cartUser(${
          product.productId
        }, users)" class="btnInfo btnBuy">Buy</button>
      </div>
    </div>
  </div>
    `;
  document.querySelector(".bodyContainer").innerHTML = dataProduct;
}
renderProduct(listProduct);
