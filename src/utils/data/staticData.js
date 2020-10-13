const colors = [
  {
    colorId: 0,
    color: '#b620e0',
    active: false,
  },
  {
    colorId: 1,
    color: '#F7B500',
    active: false,
  },
  {
    colorId: 2,
    color: '#FA6400',
    active: false,
  },
  {
    colorId: 3,
    color: '#44D7B6',
    active: false,
  },

  //add more colors here
  {
    colorId: 4,
    color: '#b620e0',
    active: false,
  },
  {
    colorId: 5,
    color: '#F7B500',
    active: false,
  },
  {
    colorId: 6,
    color: '#FA6400',
    active: false,
  },
  {
    colorId: 7,
    color: '#44D7B6',
    active: false,
  },
  {
    colorId: 8,
    color: '#b620e0',
    active: false,
  },
  {
    colorId: 9,
    color: '#F7B500',
    active: false,
  },
  {
    colorId: 10,
    color: '#FA6400',
    active: false,
  },
  {
    colorId: 11,
    color: '#44D7B6',
    active: false,
  },
];

const months = {
  JAN: 'JANUARY',
  FEB: 'FEBRUARY',
  MAR: 'MARCH',
  APR: 'APRIL',
  MAY: 'MAY',
  JUN: 'JUNE',
  JUL: 'JULY',
  AUG: 'AUGUST',
  SEPT: 'SEPTEMBER',
  OCT: 'OCTOBER',
  NOV: 'NOVEMBER',
  DEC: 'DECEMBER',
};

const transactionDropdown = [
  {
    name: 'Income',
    colorCode: '#75BF72',
  },
  {
    name: ' Expenses',
    colorCode: '#DF5060',
  },
  {
    name: 'Transfers',
    colorCode: '#32C5FF',
  },
];

const transactionTableData = [
  {
    transactionType: 'income',
    date: '02/03/2020',
    description: 'monthly salary',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'expense',
    date: '02/03/2020',
    description: 'tip',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'income',
    date: '02/03/2020',
    description: 'rent',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'expense',
    date: '02/03/2020',
    description: 'monthly salary',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'income',
    date: '02/03/2020',
    description: 'shirt',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'expense',
    date: '02/03/2020',
    description: 'gas',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'income',
    date: '02/03/2020',
    description: 'gas',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'expense',
    date: '02/03/2020',
    description: 'gas',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'income',
    date: '02/03/2020',
    description: 'gas',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'expense',
    date: '02/03/2020',
    description: 'gas',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
  {
    transactionType: 'income',
    date: '02/03/2020',
    description: 'gas',
    category: 'salary',
    account: 'savings',
    amount: '12,000.00',
  },
];
const currency = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  NGN: '₦',
};
export default {
  colors,
  months,
  transactionDropdown,
  transactionTableData,
  currency,
};
