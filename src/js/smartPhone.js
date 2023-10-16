renderHeader();
renderUserLogin();
renderFooter();
let imgs = [
  "https://2tmobile.com/wp-content/uploads/2023/09/banner-iphone-15-2tmobile-1024x405.png",
  "https://2tmobile.com/wp-content/uploads/2023/09/banner-mac-2tmobile-1024x405.png",
];
renderCarousel(imgs);

let listSmartPhone = listProduct.filter((item) => {
  return item.type == "Smart Phone";
});

let listSmartPhoneApple = listSmartPhone.filter((item) => {
  return item.manufacturer == "Apple";
});
function renderHeaderContainer() {
  document.querySelector(".headerContainer").innerHTML = `
    <nav class="menu">
      <ul class="listItemMenu">
        <li onclick="renderItem(listSmartPhoneApple)" class="item">Apple</li>
        <li class="item">SamSung</li>
        <li class="item">LG</li>
        <li class="item">Xiaomi</li>
      </ul>
    </nav>
    <div class="sort">
      <div>
        Sắp Xếp Theo Giá
        <i onclick="sortPrice(listSmartPhone)" class="fa-solid fa-arrow-down-short-wide"></i>
        <i class="fa-solid fa-arrow-down-wide-short"></i>
      </div>
    </div>
  `;
}

renderHeaderContainer();

renderItem(listSmartPhone);

function sortPrice(arr) {
  console.log(arr);
  let sortPrice = arr.sort((a, b) => {
    return a.productPrice - b.productPrice;
  });
  console.log(sortPrice);
  renderItem(sortPrice);
}
