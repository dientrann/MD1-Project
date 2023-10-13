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
