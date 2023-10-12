function renderHeader() {
  document.querySelector("header").innerHTML = `
    <div class="containerHeader">
        <div class="logo">
        <img
            class="logoImg"
            src="https://png.pngtree.com/template/20190928/ourmid/pngtree-smartphone-shop-sale-logo-design-image_312693.jpg"
            alt=""
        />
        </div>
        <nav class="navHeader">
        <ul class="listMenu">
            <li class="itemMenu"><a href="">Smart Phone</a></li>
            <li class="itemMenu"><a href="">Tablet</a></li>
            <li class="itemMenu"><a href="">LapTop</a></li>
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
        <button class="btnSearch">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>
        <div class="userLogin">
        <i onclick="renderModal(), showModal() " class="fa-solid fa-user"></i>
        </div>
    </div>
    `;
}

/* Modal */

function renderModal() {
  let newDiv = document.createElement("div");
  newDiv.className = "modalUser";
  let bodyEl = document.querySelector("body");
  bodyEl.appendChild(newDiv);
  let modalUserEl = document.querySelector(".modalUser");
  let dataModalString = `
  <div class="containerModal">
    <div class="headerModal">
        <h4 class="title">Login</h4>
        <i onclick="closeModal()" class="close fa-solid fa-xmark"></i>
    </div>
    <div class="bodyModal">
        <form>
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
            <i onmouseup="showPassword()" class=" eye fa-regular fa-eye"></i>
        </div>
        <div class="forgot">
            <span class="forgotPassword"> Forgot password?</span>
        </div>
        <div class="divButton">
            <button class="btnLogin">Login</button>
        </div>
        <div class="registerOfLogin">Donot have an accouct? </div>
        </form>
    </div>
    </div>
  `;
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

let flag = true;
function showPassword() {
  let passwordEl = document.getElementById("password");
  let divPassword = document.querySelector(".divPassword");
  if (flag) {
    passwordEl.type = "text";
    flag = false;
  } else {
    passwordEl.type = "password";
    flag = true;
  }
}
