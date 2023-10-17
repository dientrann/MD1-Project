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

function getManufacturer(arr) {
  let manufacturers = [];
  arr.forEach((element) => {
    if (!manufacturers.includes(element.manufacturer)) {
      manufacturers.push(element.manufacturer);
    }
  });
  return manufacturers;
}

let manufacturers = getManufacturer(listSmartPhone);

let listSmartPhoneApple = listSmartPhone.filter((item) => {
  return item.manufacturer == "Apple";
});

let listSmartPhoneSamSung = listSmartPhone.filter((item) => {
  return item.manufacturer == "SamSung";
});
function renderHeaderContainer(arr) {
  document.querySelector(".headerContainer").innerHTML = `
    <nav class="menu">
      <ul class="listItemMenu">
        <li onclick="renderItem(listSmartPhoneApple)" class="item">Apple</li>
        <li onclick="renderItem(listSmartPhoneSamSung)" class="item">SamSung</li>
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
  let dataItemMenu = ``;
  arr.forEach((element) => {
    dataItemMenu += `
    <li onclick="renderItem(listSmartPhone${element})" class="item">${element}</li>
    `;
  });
  document.querySelector(".listItemMenu").innerHTML = dataItemMenu;
}

renderHeaderContainer(manufacturers);

renderItem(listSmartPhone);

function sortPrice(arr) {
  console.log(arr);
  let sortPrice = arr.sort((a, b) => {
    return a.productPrice - b.productPrice;
  });
  console.log(sortPrice);
  renderItem(sortPrice);
}
