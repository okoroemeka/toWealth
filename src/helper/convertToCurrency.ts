const convertToCurrency = (amount: number, currency: string) => {
    return amount.toLocaleString('en-NG', { style: 'currency', currency });
}

export default convertToCurrency;