let DOM_currencyModal = document.getElementById("currencyModal");
let DOM_languageModal = document.getElementById("languageModal");

var currencyBtn = document.getElementById("currencyBtn");
var lanuageBtn = document.getElementById("languageBtn");

var xBtnCurrency = document.getElementById("closeCurrencyModal");
var xBtnLanguage = document.getElementById("closeLangugeModal");

currencyBtn.onclick = function () {
  DOM_currencyModal.style.display = "block";
};

lanuageBtn.onclick = function () {
  DOM_languageModal.style.display = "block";
};

xBtnCurrency.onclick = function () {
  DOM_currencyModal.style.display = "none";
};
xBtnLanguage.onclick = function () {
  DOM_languageModal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == DOM_currencyModal) {
    DOM_currencyModal.style.display = "none";
  }
  if (e.target == DOM_languageModal) {
    DOM_languageModal.style.display = "none";
  }
};
