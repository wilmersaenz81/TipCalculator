const cuenta = document.querySelector("#checkT");
const tip = document.querySelector("#tip");

const calculateTip = () => {
    const resultadoTip = (cuenta.value * tip.value) / 100
    document.querySelector("#tipD").value = resultadoTip;

    document.querySelector("#totalB").value = parseInt(cuenta.value) + parseInt(resultadoTip);
}

cuenta.addEventListener("change", calculateTip);

tip.addEventListener("change", calculateTip);










