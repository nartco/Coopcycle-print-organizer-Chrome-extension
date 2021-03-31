// create printable page
var html = "";
// get products with options
var table = document.getElementsByClassName("table-condensed");
var tr = table[0].getElementsByTagName("tr");
var dish = table[0].getElementsByTagName("span");

// get pick up time
var pickupDiv = document.getElementsByClassName("ant-timeline-item-content");
var pickupTime = pickupDiv[1].getElementsByTagName("strong")[0].innerHTML;

// get order number
var orderDiv = document.getElementsByClassName("ReactModal__Content--foodtech");
var orderNb = orderDiv[0].getElementsByClassName("order-number")[0].innerHTML;

// get customer name
var customerN = document.getElementsByTagName("h5")[0].innerHTML;
//remove icon tag & HTML Entities for keep just user name
customerN = customerN.replaceAll("&nbsp;", "");
customerN = customerN.replace('<i class="fa fa-user"></i>', "");

html += "<table class='print'>";

html += `<strong>${orderNb}</strong> | <strong>Client: ${customerN}</strong>`;
html += `<br/><br/>`;
html += `| <strong>${pickupTime}</strong> |`;
html += `<br/><br/>`;
html += `<p>commande: </p>`;

for (var i = 0; i < tr.length; i++) {
  html += `<h4>${dish[i].innerHTML}</h4>`;

  if (tr[i].getElementsByTagName("ul")) {
    var options = tr[i].getElementsByTagName("li");
    for (var j = 0; j < options.length; j++) {
      var clearOptions = options[j].getElementsByTagName("small")[0].innerHTML;
      html += `<p>${clearOptions}</p>`;
    }
  }
}

html += "</table>";

document.body.innerHTML = html;
var sheet = window.document.styleSheets[0];
sheet.insertRule("body { text-align: center; }", sheet.cssRules.length);
window.print()
document.location.reload();

