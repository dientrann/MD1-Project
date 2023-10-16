renderHeader();
renderUserLogin();
renderFooter();

function renderSearch(arr) {
  let dataSearch = localStorage.getItem("search");
  let result = arr.filter((item) => {
    return item.productName.toLowerCase().includes(dataSearch);
  });
  renderItem(result);
  localStorage.removeItem("search");
}

renderSearch(listProduct);
