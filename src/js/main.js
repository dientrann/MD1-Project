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

let listProduct = [
  {
    productId: Date.now() * Math.random(),
    productName: "Iphone 14",
    productPrice: 3000000,
    productImg:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-den-thumb-600x600.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: true,
    outstanding: true,
    quantity: 50,
    type: "Smart Phone",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "Iphone 14",
    productPrice: 3000000,
    productImg:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-den-thumb-600x600.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: true,
    outstanding: true,
    quantity: 50,
    type: "Smart Phone",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "Iphone 14",
    productPrice: 3000000,
    productImg:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-den-thumb-600x600.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: false,
    outstanding: true,
    quantity: 50,
    type: "Smart Phone",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "Iphone 14",
    productPrice: 3000000,
    productImg:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-den-thumb-600x600.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: true,
    outstanding: false,
    quantity: 50,
    type: "Smart Phone",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "Iphone 14",
    productPrice: 3000000,
    productImg:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/1/_/1_71_18_1.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: true,
    outstanding: true,
    quantity: 50,
    type: "Lap Top",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "Iphone 14",
    productPrice: 3000000,
    productImg:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/1/_/1_71_18_1.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: true,
    outstanding: true,
    quantity: 50,
    type: "Lap Top",
  },
];

function renderListSmartPhone(IdElement, arr) {
  let divContentEl = document.getElementById(IdElement);
  divContentEl.innerHTML = `
  <div class="listItem">
    <div class="title">${arr[0].type}</div>
    <div class="list"></div>
  </div>
  `;

  let index = document.querySelectorAll(".list").length - 1;
  let listProductEl = document.querySelectorAll(".list")[index];
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
        <h5>${element.productPrice.toLocaleString("en-US")}</h5>
        <div class="divBtnInfo">
          <button class="btnInfo btnBuy">Buy</button>
          <button class="btnInfo btnDetail">Detail</button>
        </div>
      </div>
    </div>
    `;
  });
  dataProduct += `
    <div class="more">
      <div class="itemMore"><h3>More ...</h3></div>
    </div>
    `;

  listProductEl.innerHTML = dataProduct;
}
renderListSmartPhone(
  "smartPhone",
  listProduct.filter((item) => {
    return (
      item.type == "Smart Phone" &&
      item.status == true &&
      item.outstanding == true
    );
  })
);
renderListSmartPhone(
  "lapTop",
  listProduct.filter((item) => {
    return item.type == "Lap Top";
  })
);
