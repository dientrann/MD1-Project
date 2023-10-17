renderHeader();
renderUserLogin();
renderFooter();
let imgs = [
  "https://2tmobile.com/wp-content/uploads/2023/09/banner-iphone-15-2tmobile-1024x405.png",
  "https://2tmobile.com/wp-content/uploads/2023/09/banner-mac-2tmobile-1024x405.png",
];
renderCarousel(imgs);

let listLapTop = listProduct.filter((item) => {
  return item.type == "Lap Top";
});

let listMacBook = listLapTop.filter((item) => {
  return item.manufacturer == "Apple";
});

let listLapTopSamSung = listLapTop.filter((item) => {
  return item.manufacturer == "SamSung";
});
function renderHeaderContainer() {
  document.querySelector(".headerContainer").innerHTML = `
    <nav class="menu">
      <ul class="listItemMenu">
        <li onclick="renderItem(listLapTopApple)" class="item">Apple</li>
        <li onclick="renderItem(listLapTopSamSung)" class="item">SamSung</li>
        <li class="item">LG</li>
        <li class="item">Dell</li>
      </ul>
    </nav>
    <div class="sort">
      <div>
        Sắp Xếp Theo Giá
        <i onclick="sortPrice(listLapTop)" class="fa-solid fa-arrow-down-short-wide"></i>
        <i class="fa-solid fa-arrow-down-wide-short"></i>
      </div>
    </div>
  `;
}

renderHeaderContainer();

renderItem(listLapTop);

function sortPrice(arr) {
  console.log(arr);
  let sortPrice = arr.sort((a, b) => {
    return a.productPrice - b.productPrice;
  });
  console.log(sortPrice);
  renderItem(sortPrice);
}
