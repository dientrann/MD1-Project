if (JSON.parse(localStorage.getItem("userLogin") ?? "{}").role != "admin") {
  window.location.href = "/";
}

let products = [];

function dataLocal() {
  let dataProduct = localStorage.getItem("products");
  if (dataProduct) {
    return JSON.parse(dataProduct);
  } else return [];
}

products = dataLocal();
