
class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=SrbyIBG0UZ0ggBtqO04u4q8TauKjCPuLFFlgfk83&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency) {

        const response = await fetch(`${this.url}${firstCurrency}`);

        const result = await response.json();

        const exchangedResult = amount * result.data[secondCurrency];

        return exchangedResult;
    }
}