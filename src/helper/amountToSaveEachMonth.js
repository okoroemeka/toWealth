
const getNumberOfMonthsFromYear = (endDate) => {
    const end = new Date(endDate);
    const start = new Date();
    let diff = 0;
    const months = 1000 * 60 * 60 * 24 * 30;
    diff = end - start;
    return Math.ceil(diff / months)
}

const amountToSaveEachMonth = (amount, endDate) => {
    const numberOfMonths = getNumberOfMonthsFromYear(endDate)
    return (amount / numberOfMonths).toFixed(2)
}
export default amountToSaveEachMonth;