const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) > path");
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) > path");
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img");

function setCardType(type) {
  const colors = {
    "amex": ["#5CCEFF", "#4959EC"],
    "default": ["f5f5f5", "f5f5f5"],
    "diners": ["#BC31ED", "#8EB5FF"],
    "discover": ["#F73A67", "#FFC632"],
    "elo": ["#FF3C21", "#FFA724"],
    "hipercard": ["red", "#F16529"],
    "maestro": ["#47A8C6", "#EABEFF"],
    "mastercard": ["#DF6F29", "#C69347"],
    "visa": ["#436D99", "#2D57F2"]
  }
  ccBgColor01.setAttribute("fill", colors[type][0]);
  ccBgColor02.setAttribute("fill", colors[type][1]);
  ccLogo.setAttribute("src", `cc-${type}.svg`);
}

setCardType("discover")
globalThis.setCardType = setCardType;