let button1 = document.getElementById("activate");
button1.addEventListener("click", async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    chrome.extension.getBackgroundPage().console.log(tab[0]);
    if (tab[0].url.includes("/api/orders")) {
      chrome.tabs.executeScript(tab.id, { file: "content.js" });
    }
  });
});
