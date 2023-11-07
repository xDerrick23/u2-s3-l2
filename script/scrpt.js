//1

window.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("saveButton");
    const resetButton = document.getElementById("resetButton");
    const btnResetInput = document.getElementsByClassName("resetBtn");
    const txtInput = document.querySelector("input[type='text']");
  
    saveButton.onclick = setSaveButton;
    resetButton.onclick = remResetButton;
    txtInput.onchange = handleInput;
    btnResetInput.onclick = () => {
      localStorage.removeItem("searchQuery");
      txtInput.value = "";
    };
    loadData();
    preLoadText(txtInput);
  });
  
  const preLoadText = (inputNode) => {
    const storedText = localStorage.getItem("searchQuery");
    if (storedText && inputNode) {
      inputNode.value = storedText;
    }
  };
  
  const loadData = () => {
    const dataInStorage = localStorage.getItem("save");
    const html = document.documentElement;
  
    if (dataInStorage) {
      html.classList.add("data");
    } else {
      html.classList.remove("data");
    }
  };
  
  const setSaveButton = () => {
    localStorage.setItem("save", "data");
  
    loadData();
  };
  
  const remResetButton = () => {
    localStorage.removeItem("save");
  
    loadData();
  };
  
  const handleInput = (event) => {
    localStorage.setItem("searchQuery", event.target.value);
  };
  
//2
  
  let seconds = sessionStorage.getItem("timeCounter") || 0;
  
  function updateCounter() {
    seconds++;
    sessionStorage.setItem("timeCounter", seconds);
    document.getElementById("timeCounter").textContent = seconds;
  }
  
  setInterval(updateCounter, 1000);