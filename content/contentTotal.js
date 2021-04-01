// create printable page
var html = "";
// get total
var divSuccess = document.getElementsByClassName("panel panel-success");
var totalMoney = divSuccess[0].getElementsByClassName("fa fa-money");
var total = [];
var result;

for (let i = 0; i < totalMoney.length; i++) {
  var numberPattern = /\d+(,|.)\d+/gm;
  var comma = /\,/gm;
  var swap;

  swap = totalMoney[i].parentElement.innerHTML;
  swap = swap.replaceAll('<i class="fa fa-money"></i>&nbsp;', "");
  swap = swap.match(numberPattern);
  swap = swap.map(t => {
    if (t.match(comma)) return (t = t.replaceAll(",", "."));
    return t;
  });
  total.push(swap);
}
total = total.reduce(
  (a, b) =>
    new Number(parseFloat(a).toFixed(2)) + new Number(parseFloat(b).toFixed(2))
);

total = parseFloat(total).toFixed(2);


