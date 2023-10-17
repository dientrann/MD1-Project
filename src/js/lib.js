function renderHeader() {
  document.querySelector("header").innerHTML = `
    <div class="containerHeader">
        <div class="logo">
        <a href="/">
        <img
            class="logoImg"
            src="https://png.pngtree.com/template/20190928/ourmid/pngtree-smartphone-shop-sale-logo-design-image_312693.jpg"
            alt=""
        />
        </a>
        </div>
        <nav class="navHeader">
        <ul class="listMenu">
            <li class="itemMenu"><a href="/src/page/smartPhone.html">Smart Phone</a></li>
            <li class="itemMenu"><a href="">Tablet</a></li>
            <li class="itemMenu"><a href="/src/page/lapTop.html">LapTop</a></li>
            <li class="itemMenu"><a href="">Watch</a></li>
            <li class="itemMenu"><a href="">Accessory</a></li>
        </ul>
        </nav>
        <div class="searchHeader">
        <input
            class="inputSearch"
            type="text"
            name="search"
            placeholder="Search"
        />
        <button onclick="searchProduct(listProduct)" class="btnSearch">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>
        <div class="userLogin">
        <i onclick="renderModal(), showModal() " class="fa-solid fa-user"></i>
        </div>
    </div>
    `;
}

/**/
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 0 5px 5px rgba(255,255,255,0.5)";
  } else {
    header.style.boxShadow = "none";
  }
});

/* Modal */

function renderModal(type = "login") {
  let newDiv = document.createElement("div");
  newDiv.className = "modalUser";
  let bodyEl = document.querySelector("body");
  bodyEl.appendChild(newDiv);
  let modalUserEl = document.querySelector(".modalUser");
  let dataModalString = ``;
  if (type == "login") {
    dataModalString = `
  <div class="containerModal">
    <div class="headerModal">
        <h4 class="title">Login</h4>
        <i onclick="closeModal()" class="close fa-solid fa-xmark"></i>
    </div>
    <div class="bodyModal">
        <form onsubmit="userLogin(event, users)">
        <div class="divInput">
            <input
            class="inputUser"
            type="text"
            name="userName"
            id="userName"
            placeholder=""
            />
            <label class="labelInput" for="userName">User Name</label>
        </div>
        <div class="divInput divPassword">
            <input
            class="inputUser"
            type="password"
            name="password"
            id="password"
            placeholder=""
            />
            <label class="labelInput" for="password">Password</label>
            <i onmouseup="hidePassword()" onmousedown="showPassword()" on class=" eye fa-regular fa-eye"></i>
        </div>
        <div class="forgot">
            <span class="forgotPassword"> Forgot password?</span>
        </div>
        <div class="divButton">
            <button class="btnLogin">Login</button>
        </div>
        <div onclick="renderModal('register'), showModal()" class="registerOfLogin">Donot have an accouct? </div>
        </form>
    </div>
    </div>
  `;
  } else {
    dataModalString = `
    <div class="containerModal">
      <div class="headerModal">
        <h4 class="title">Register</h4>
        <i onclick="closeModal()" class="close fa-solid fa-xmark"></i>
      </div>
      <div class="bodyModal">
        <form onsubmit="addUser(event, users)">
          <div class="divInput">
            <input
              class="inputUser"
              type="text"
              name="userName"
              id="userName"
              placeholder=""
            />
            <label class="labelInput" for="email">User Name</label>
          </div>
          <div class="divInput">
            <input
              class="inputUser"
              type="email"
              name="email"
              id="email"
              placeholder=""
            />
            <label class="labelInput" for="userName">Email</label>
          </div>
          <div class="divInput divPassword">
            <input
              class="inputUser"
              type="password"
              name="password"
              id="password"
              placeholder=""
            />
            <label class="labelInput" for="password">Password</label>
            <i
              onmouseup="hidePassword()"
              onmousedown="showPassword()"
              on
              class="eye fa-regular fa-eye"
            ></i>
          </div>
          <div class="divInput divPassword">
            <input
              class="inputUser"
              type="password"
              name="cofirmPassword"
              id="cofirmPassword"
              placeholder=""
            />
            <label class="labelInput" for="cofirmPassword"
              >Cofirm Password</label
            >
            <i
              onmouseup="hidePassword('cofirmPassword')"
              onmousedown="showPassword('cofirmPassword')"
              on
              class="eye fa-regular fa-eye"
            ></i>
          </div>
          <div class="divButton">
            <button class="btnLogin">Register</button>
          </div>
          <div onclick="renderModal(), showModal()" class="registerOfLogin">Already have an account?</div>
        </form>
      </div>
    </div>
    `;
  }
  modalUserEl.innerHTML = dataModalString;
}

function showModal() {
  let modalUserEl = document.querySelector(".modalUser");
  modalUserEl.style.display = "block";
  window.onclick = (event) => {
    if (event.target == modalUserEl) {
      modalUserEl.style.display = "none";
    }
  };
}

function closeModal() {
  let modalUserEl = document.querySelector(".modalUser");
  modalUserEl.style.display = "none";
}

function showPassword(el = "password") {
  if (el == "password") {
    let passwordEl = document.getElementById("password");
    passwordEl.type = "text";
  } else {
    let confirmPassword = document.getElementById("cofirmPassword");
    confirmPassword.type = "text";
  }
}

function hidePassword(el = "password") {
  if (el == "password") {
    let passwordEl = document.getElementById("password");
    passwordEl.type = "password";
  } else {
    let confirmPassword = document.getElementById("cofirmPassword");
    confirmPassword.type = "password";
  }
}

/* User */

let users = [];

function dataUsersLocal() {
  let dataUsersLocal = localStorage.getItem("users");
  if (dataUsersLocal) {
    return JSON.parse(dataUsersLocal);
  } else {
    return [];
  }
}
users = dataUsersLocal();

function hashPassword(password) {
  let passwordString = `@@${password}!!`;
  let hashPassword = ``;
  for (let i in passwordString) {
    hashPassword += passwordString[i].charCodeAt(0);
  }
  return hashPassword * 22;
}

function addUser(event, arr) {
  event.preventDefault();

  let newUser = {
    id: Date.now() * Math.random(),
    userName: event.target.userName.value,
    password: event.target.password.value,
    email: event.target.email.value,
    role: "member",
    status: true,
  };

  let user = arr.find((item) => {
    return item.userName == newUser.userName;
  });
  if (user) {
    alert("User Tồn Tại");
    return;
  }
  let email = arr.find((item) => {
    return item.email == newUser.email;
  });
  if (email) {
    alert("email đã dc sử dụng");
    return;
  }
  if (newUser.password != event.target.cofirmPassword.value) {
    alert("Confirm pass sai");
    return;
  }

  arr.push(newUser);
  localStorage.setItem("users", JSON.stringify(arr));
  localStorage.setItem("userLogin", JSON.stringify(newUser));
  window.location.href = "/";
}

function userLogin(event, arr) {
  event.preventDefault();

  let userLogin = {
    userName: event.target.userName.value,
    password: event.target.password.value,
  };

  let user = arr.find((item) => {
    return item.userName == userLogin.userName;
  });

  if (!user) {
    alert("User Name Chưa tồn tại");
    return;
  }
  if (user.password != userLogin.password) {
    alert("sai mat khau");
    return;
  }
  localStorage.setItem("userLogin", JSON.stringify(userLogin));
  window.location.href = "/";
}

function renderUserLogin() {
  let dataUserLogin = JSON.parse(localStorage.getItem("userLogin")) ?? {};
  let userLoginEl = document.querySelector(".userLogin");
  let dataUserString = ``;
  if (dataUserLogin.userName) {
    dataUserString = `<p>Chào ${dataUserLogin.userName} </p><i onclick="userLogout()" class="fa-solid fa-arrow-right-from-bracket"></i>`;
  } else {
    dataUserString = `<i onclick="renderModal(), showModal() " class="fa-solid fa-user"></i>`;
  }

  userLoginEl.innerHTML = dataUserString;
}

function userLogout() {
  localStorage.removeItem("userLogin");
  window.location.href = "/";
}

/* Footer */

function renderFooter() {
  let footerEl = document.querySelector("footer");
  footerEl.innerHTML = `
  <div class="containerFooter">
    <div class="address">
      <div class="title"><h5>Adderss</h5></div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1404220778245!2d106.64761527417312!3d10.800555358749971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175296b1af354b9%3A0x706c1d25db148bf!2zNzcgTMOqIFRydW5nIE5naMSpYSwgUGjGsOG7nW5nIDEyLCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1697216357501!5m2!1svi!2s"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="mapGoogle"
        ></iframe>
      </div>
    </div>
    <div class="hotline">
      <div class="title"><h5>Hotline</h5></div>
      <div class="itemPhone"><p>1900.333.888</p></div>
      <div class="itemPhone"><p>1900.333.999</p></div>
    </div>
    <div class="socialNetwork">
      <div class="title"><h5>Social Network</h5></div>
      <div class="itemNetwork">
        <div class="icon">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <p>Facebook</p>
      </div>
      <div class="itemNetwork">
        <div class="icon"><i class="fa-brands fa-tiktok"></i></div>
        <p>Tiktok</p>
      </div>
      <div class="itemNetwork">
        <div class="icon"><i class="fa-brands fa-youtube"></i></div>
        <p>Youtube</p>
      </div>
    </div>
  </div>
  `;
}

/* Carousel */
function renderCarousel(arrImg) {
  let carouselEl = document.querySelector(".carousel");
  carouselEl.innerHTML = `
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://2tmobile.com/wp-content/uploads/2023/09/banner-iphone-15-2tmobile-1024x405.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://2tmobile.com/wp-content/uploads/2023/09/banner-iphone-15-2tmobile-1024x405.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://2tmobile.com/wp-content/uploads/2023/09/banner-iphone-15-2tmobile-1024x405.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  `;

  let carouselInnerEl = document.querySelector(".carousel-inner");
  let dataRenderImg = ``;
  let carouselIndicatorsEl = document.querySelector(".carousel-indicators");
  let dataButton = ``;
  arrImg.forEach((element, index) => {
    if (index == 0) {
      dataRenderImg += `
      <div class="carousel-item active">
        <img
          src="${element}"
          class="d-block w-100"
          alt="..."
        />
      </div>
      `;
      dataButton += `
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      `;
    } else {
      dataRenderImg += `
      <div class="carousel-item">
        <img
          src="${element}"
          class="d-block w-100"
          alt="..."
        />
      </div>
      `;
      dataButton += `
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="${index}"
        aria-label="Slide ${index + 1}"
      ></button>
      `;
    }
  });
  carouselInnerEl.innerHTML = dataRenderImg;
  carouselIndicatorsEl.innerHTML = dataButton;
}

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
    manufacturer: "Apple",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "SamSung Z",
    productPrice: 3000000,
    productImg:
      "https://2tmobile.com/wp-content/uploads/2023/08/samsung-galaxy-z-flod5-xanh-2tmobile.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: true,
    outstanding: true,
    quantity: 50,
    type: "Smart Phone",
    manufacturer: "SamSung",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "Iphone 14",
    productPrice: 4000000,
    productImg:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-den-thumb-600x600.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: true,
    outstanding: true,
    quantity: 50,
    type: "Smart Phone",
    manufacturer: "Apple",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "Iphone 14",
    productPrice: 2000000,
    productImg:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-den-thumb-600x600.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: false,
    outstanding: true,
    quantity: 50,
    type: "Smart Phone",
    manufacturer: "Apple",
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
    manufacturer: "Apple",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "MacBook 13",
    productPrice: 3000000,
    productImg:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/1/_/1_71_18_1.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: true,
    outstanding: true,
    quantity: 50,
    type: "Lap Top",
    manufacturer: "Apple",
  },
  {
    productId: Date.now() * Math.random(),
    productName: "MacBook 14",
    productPrice: 3000000,
    productImg:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/1/_/1_71_18_1.jpg",
    productDescribe: "Iphone 14 jahsdasdkasdhkajsdh",
    status: true,
    outstanding: true,
    quantity: 50,
    type: "Lap Top",
    manufacturer: "Apple",
  },
];

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
        <h5>${element.productPrice.toLocaleString("en-US")}</h5>
        <div class="divBtnInfo">
          <button class="btnInfo btnBuy">Buy</button>
          <button class="btnInfo btnDetail">Detail</button>
        </div>
      </div>
    </div>
    `;
  });
  listEl.innerHTML = dataItemString;
}

function searchProduct(arr) {
  let dataSearch = document.querySelector(".inputSearch").value.toLowerCase();
  localStorage.setItem("search", dataSearch);
  window.location.href = "http://127.0.0.1:5500/src/page/search.html";
}
