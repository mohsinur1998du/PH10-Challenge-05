function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showSectionById(id) {
  if (id === "donation" || id === "donation-02") {
    document.getElementById("history").classList.add("hidden");
    document.getElementById("donation").classList.remove("hidden");
    document.getElementById("donation-02").classList.remove("hidden");
    document.getElementById("donation-03").classList.remove("hidden");
  } else {
    document.getElementById("donation").classList.add("hidden");
    document.getElementById("donation-02").classList.add("hidden");
    document.getElementById("donation-03").classList.add("hidden");
    document.getElementById("history").classList.remove("hidden");
  }
}
