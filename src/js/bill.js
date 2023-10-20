let bills = [];

function dataBillLocal() {
  let dataLocal = localStorage.getItem("bills");
  if (dataLocal) {
    return JSON.parse(dataLocal);
  } else return [];
}

bills = dataBillLocal();

function addBill(arr, users) {
  let listCheck = itemCheck();
  let dataUserLogin = JSON.parse(localStorage.getItem("userLogin")) ?? {};
  if (dataUserLogin == {}) {
    alert("Not Login");
    return;
  }
  let newBill = {
    billId: Date.now() * Math.random(),
    billUser: dataUserLogin.id,
    billProducts: listCheck,
  };
  arr.push(newBill);
  localStorage.setItem("bills", JSON.stringify(arr));
  listCheck.forEach((element) => {
    deleteCart(element, users);
  });
}
