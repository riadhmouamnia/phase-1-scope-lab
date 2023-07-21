var customerName = "bob";

// modifies the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// setBestCustomer()
function setBestCustomer() {
  bestCustomer = "not bob";
  // or we can write this
  //   window.bestCustomer = "not bob";
}

// overwriteBestCustomer() overwrites the best customer
function overwriteBestCustomer(name) {
  bestCustomer = name;
}

// changeLeastFavoriteCustomer()
const leastFavoriteCustomer = "not bob";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Trying to reassign the least favorite customer";
}
