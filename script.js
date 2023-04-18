const cuenta = document.querySelector("#bill");
const tip = document.querySelector("#tip");

const calculateTip = () => {
    const result = (bill.value * tip.value ) / 100;
    document.querySelector("#amountTip").value = result;

    document.querySelector("#totalBill").value = parseInt(bill.value) + parseInt(result);
}

cuenta.addEventListener("change", calculateTip);

tip.addEventListener("change", calculateTip );



