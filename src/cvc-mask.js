import IMask from "imask";

const securityCode = document.querySelector('#security-code');
const securityCodePattern = {
  mask: '0000',
}

const securityCodeMasked = IMask(securityCode, securityCodePattern);