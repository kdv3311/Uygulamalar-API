const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const lastOption = document.querySelector("#lastCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();
runEventListener();



function runEventListener() {
    amountInput.addEventListener("input", exchange);
}

function exchange() {

    const amount = Number(amountInput.value.trim());

    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;

    const lastOptionValue = lastOption.options[lastOption.selectedIndex].textContent;

    currency.exchange(amount, firstOptionValue, lastOptionValue)
        .then((result) => {
            resultInput.value = result.toFixed(3);
            console.log(firstOptionValue);
        })

}