renderHeader();
renderUserLogin();
renderFooter();
let imgs = [
  "https://2tmobile.com/wp-content/uploads/2023/09/banner-iphone-15-2tmobile-1024x405.png",
  "https://2tmobile.com/wp-content/uploads/2023/09/banner-mac-2tmobile-1024x405.png",
  "https://2tmobile.com/wp-content/uploads/2023/07/banner-2t-3-1024x405.jpg",
  "https://2tmobile.com/wp-content/uploads/2023/09/banner-02-2tmobile-1-1024x405.png",
];
renderCarousel(imgs);

function renderList(IdElement, arr) {
  let divContentEl = document.getElementById(IdElement);
  if (arr.length == 0) {
    return;
  }
  divContentEl.innerHTML = `
  <div class="listItem">
    <div class="title">${arr[0].type}</div>
    <div class="list"></div>
  </div>
  `;

  let listProductEl = divContentEl.querySelector(".list");
  let dataProduct = ``;
  arr.forEach((element) => {
    dataProduct += `
    <div class="item">
      <img
        class="imgInfo"
        src="${element.productImg}"
        alt=""
      />
      <div class="info">
        <h4>${element.productName}</h4>
        <h5>${element.productPrice.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })}</h5>
        <div class="divBtnInfo">
          <button onclick="cartUser(${
            element.productId
          }, users), sumProduct()" class="btnInfo btnBuy">Buy</button>
          <button onclick="window.location.href = '/src/page/detail.html?id=${
            element.productId
          }'" class="btnInfo btnDetail">Detail</button>
        </div>
      </div>
    </div>
    `;
  });
  dataProduct += `
    <div class="more">
      <div class="itemMore"><a href="/src/page/smartPhone.html?page=${IdElement}"><h3>More ...</h3></a></div>
    </div>
    `;

  listProductEl.innerHTML = dataProduct;
}
renderList(
  "smartPhone",
  listProduct.filter((item) => {
    return (
      item.type == "Smart Phone" &&
      item.status == true &&
      item.outstanding == true
    );
  })
);
renderList(
  "lapTop",
  listProduct.filter((item) => {
    return (
      item.type == "Lap Top" && item.status == true && item.outstanding == true
    );
  })
);

renderList(
  "watch",
  listProduct.filter((item) => {
    return (
      item.type == "Watch" && item.status == true && item.outstanding == true
    );
  })
);

renderList(
  "tablet",
  listProduct.filter((item) => {
    return (
      item.type == "Tablet" && item.status == true && item.outstanding == true
    );
  })
);

renderList(
  "accessory",
  listProduct.filter((item) => {
    return (
      item.type == "Accessory" &&
      item.status == true &&
      item.outstanding == true
    );
  })
);
