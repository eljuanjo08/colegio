// "use strict";

window.addEventListener("load", iniciarf);
let vCosto;
let vPorcentaje;

function iniciarf(vCosto, vPorcentaje) {
    vCosto =  document.getElementById("costop");
    vPorcentaje = document.getElementById("porcentajev");
    vCosto.addEventListener("input", mostarPVenta);
    vPorcentaje.addEventListener("input", mostarPVenta);
}
function calcularporcentaje(costof, porcentajef) {
    let tantoTotal = costof * (porcentajef / 100);
    let pVenta = parseFloat(costof) + parseFloat(tantoTotal);
    return pVenta;
}

function mostarPVenta(vCosto, vPorcentaje) {
    vCosto =  document.getElementById("costop");
    vPorcentaje = document.getElementById("porcentajev");
    if (vCosto.value != "" && vPorcentaje != "") {
        let calculo = calcularporcentaje(vCosto.value, vPorcentaje.value);
        document.getElementById("pventa").value = calculo;
    } else {
        document.getElementById("pventa").value = "";
    }
}