import education from '../../assets/images/education.svg';
import drinks from '../../assets/images/drinks.svg';
import clothing from '../../assets/images/clothing.svg';
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
  {
    colorId: 4,
    color: '#4287f5',
    active: false,
  },
  {
    colorId: 5,
    color: '#948e23',
    active: false,
  },
  {
    colorId: 6,
    color: '#8dade0',
    active: false,
  },
  {
    colorId: 7,
    color: '#384252',
    active: false,
  },
  {
    colorId: 8,
    color: '#b620e0',
    active: false,
  },
  {
    colorId: 9,
    color: '#7929ba',
    active: false,
  },
  {
    colorId: 10,
    color: '#513f61',
    active: false,
  },
  {
    colorId: 11,
    color: '#db1ac2',
    active: false,
  },
  {
    colorId: 12,
    color: '#b620e0',
    active: false,
  },
  {
    colorId: 13,
    color: '#ed133f',
    active: false,
  },
  {
    colorId: 14,
    color: '#570f1d',
    active: false,
  },
  {
    colorId: 15,
    color: '#db93a1',
    active: false,
  },
  {
    colorId: 17,
    color: '#a5db93',
    active: false,
  },
  {
    colorId: 18,
    color: '#2e611d',
    active: false,
  },
  {
    colorId: 19,
    color: '#8dade0',
    active: false,
  },
  {
    colorId: 20,
    color: '#16f033',
    active: false,
  },
  {
    colorId: 20,
    color: '#b620e0',
    active: false,
  },
  {
    colorId: 21,
    color: '#7929ba',
    active: false,
  },
  {
    colorId: 22,
    color: '#031a06',
    active: false,
  },
  {
    colorId: 23,
    color: '#f5e918',
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

const category = [
  {
    color: '#DD9701',
    name: 'education',
    img: education,
  },
  {
    color: '#35116B',
    name: 'Food and Drinks',
    img: drinks,
  },
  {
    color: '#3308E2',
    name: 'clothing',
    img: clothing,
  },
];

export default {
  colors,
  months,
  transactionDropdown,
  transactionTableData,
  currency,
  category,
};
