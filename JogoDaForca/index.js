var letra = document.querySelector("#letra");
var btn = document.querySelector("#btn");
var res = document.querySelector("#resultado");

var segredo = "PIZZA";
var palavraOculta = segredo.replace(/A/gi,"_ ").replace(/B/gi,"_ ").replace(/C/gi,"_ ").replace(/D/gi,"_ ").replace(/E/gi,"_ ").replace(/F/gi,"_ ").replace(/G/gi,"_ ").replace(/H/gi,"_ ").replace(/I/gi,"_ ").replace(/J/gi,"_ ").replace(/K/gi,"_ ").replace(/L/gi,"_ ").replace(/M/gi,"_ ").replace(/N/gi,"_ ").replace(/O/gi,"_ ").replace(/P/gi,"_ ").replace(/Q/gi,"_ ").replace(/R/gi,"_ ").replace(/S/gi,"_ ").replace(/T/gi,"_ ").replace(/U/gi,"_ ").replace(/V/gi,"_ ").replace(/W/gi,"_ ").replace(/X/gi,"_ ").replace(/Y/gi,"_ ").replace(/Z/gi,"_ ");
resultado.innerText = palavraOculta;

btn.onclick = function(){
    var palavra = letra.value.toUpperCase();

}
