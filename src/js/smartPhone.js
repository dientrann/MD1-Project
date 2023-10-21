renderHeader();
renderUserLogin();
renderFooter();

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let page = params.page;

let list = [];

let imgs = [
  "https://2tmobile.com/wp-content/uploads/2023/09/banner-iphone-15-2tmobile-1024x405.png",
  "https://2tmobile.com/wp-content/uploads/2023/09/banner-mac-2tmobile-1024x405.png",
];

if (page == "smartPhone") {
  list = listProduct.filter((item) => {
    return item.type == "Smart Phone";
  });
}
if (page == "lapTop") {
  list = listProduct.filter((item) => {
    return item.type == "Lap Top";
  });
}

if (page == "tablet") {
  list = listProduct.filter((item) => {
    return item.type == "Tablet";
  });
}

if (page == "watch") {
  list = listProduct.filter((item) => {
    return item.type == "Watch";
  });
}

if (page == "accessory") {
  list = listProduct.filter((item) => {
    return item.type == "Accessory";
  });
}

renderCarousel(imgs);

function getManufacturer(arr) {
  let manufacturers = [];
  arr.forEach((element) => {
    if (!manufacturers.includes(element.manufacturer)) {
      manufacturers.push(element.manufacturer);
    }
  });
  return manufacturers;
}

let manufacturers = getManufacturer(list);

function listManufacturer(manufacturers) {
  let listManufacturer = list.filter((item) => {
    return item.manufacturer == manufacturers;
  });
  return listManufacturer;
}

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
        <i onclick="sortPriceUp(list)" class="fa-solid fa-arrow-down-short-wide"></i>
        <i onclick="sortPriceDown(list)" class="fa-solid fa-arrow-down-wide-short"></i>
      </div>
    </div>
    
  `;
  let dataItemMenu = ``;
  arr.forEach((element) => {
    dataItemMenu += `
    <li onclick="renderItem(listManufacturer('${element}'))" class="item">${element}</li>
    `;
  });
  document.querySelector(".listItemMenu").innerHTML = dataItemMenu;
}

renderHeaderContainer(manufacturers);

function renderItem(arr) {
  let bodyContainerEl = document.querySelector(".bodyContainer");
  if (!bodyContainerEl.querySelector(".list")) {
    let newDiv = document.createElement("div");
    newDiv.className = "list";
    bodyContainerEl.appendChild(newDiv);
  }
  let listEl = bodyContainerEl.querySelector(".list");
  let dataItemString = ``;
  arr.forEach((element) => {
    dataItemString += `
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
          }, users),sumProduct()" class="btnInfo btnBuy">Buy</button>
          <button onclick="window.location.href = '/src/page/detail.html?id=${
            element.productId
          }'" class="btnInfo btnDetail">Detail</button>
        </div>
      </div>
    </div>
    `;
  });
  listEl.innerHTML = dataItemString;
}

renderItem(list);

function sortPriceUp(arr) {
  let sortPrice = arr.sort((a, b) => {
    return a.productPrice - b.productPrice;
  });
  renderItem(sortPrice);
}

function sortPriceDown(arr) {
  let sortPrice = arr.sort((a, b) => {
    return b.productPrice - a.productPrice;
  });
  renderItem(sortPrice);
}

// function renderfilter(arr) {
//   let filterManufacturersEl = document.querySelector(".filterManufacturers");
//   let dataItem = ``;
//   arr.forEach((element) => {
//     dataItem += `
//     <div>
//       <input onchange="urlParams('${element}')" type="checkbox" name="" id="${element}" value="${element}" />
//       <label for="${element}">${element}</label>
//     </div>
//     `;
//   });
//   filterManufacturersEl.innerHTML = dataItem;
// }
// renderfilter(manufacturers);

// function urlParams(idEl) {
//   console.log("vào");
//   console.log(idEl);
//   const urlSearchParams = new URLSearchParams(window.location.search);
//   const params = Object.fromEntries(urlSearchParams.entries());
//   let filter = params.filter;
//   let url = window.location.href;
//   console.log(url);
//   if (!filter) {
//     window.location.href = `${url}&filter=${
//       document.getElementById(idEl).value
//     }`;
//   } else {
//     window.location.href = `${url}_${document.getElementById(idEl).value}`;
//   }
// }

// function filter() {
//   const urlSearchParams = new URLSearchParams(window.location.search);
//   const params = Object.fromEntries(urlSearchParams.entries());
//   let filter = params.filter;
//   console.log(filter);
// }
// filter();
