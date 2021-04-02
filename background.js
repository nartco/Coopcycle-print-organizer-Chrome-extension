//print
let button1 = document.getElementById("activate");
button1.addEventListener("click", async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    chrome.extension.getBackgroundPage().console.log(tab[0]);
    if (tab[0].url.includes("/api/orders")) {
      chrome.tabs.executeScript(tab.id, { file: "./content/contentPrint.js" });
    }
  });
});

// daily total
let button2 = document.getElementById("total");
let totalCase = document.getElementsByClassName("totalMoney");

const GetFormattedDate = date => {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  return month + "/" + day + "/" + year;
};

button2.addEventListener("click", async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    if (tab[0].url.includes("/restaurants")) {
      var date = tab[0].url.match(/date=\w+\W\w+\W\w+/gm);
      date = date[0];

      date = date.replace("date=", "");
      date = new Date(date.toString());
      date = GetFormattedDate(date);

      chrome.tabs.executeScript(
        tab.id,
        { file: "./content/contentTotal.js" },
        result => {
          if (!result[0]) result = 0;
          totalCase[0].innerHTML = "";
          totalCase[0].innerHTML += `<div>  <h5>${date}</h5> </br> <p>Total: ${result}</p></div>`;
          totalCase[0].classList.add("visible");
        }
      );
    }
  });
});
