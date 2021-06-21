import moment from 'moment'

const expenses = [
  {
    id: '1',
    description: 'Gym',
    note: '',
    amount: 1995,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 199965,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
]

export default expenses
