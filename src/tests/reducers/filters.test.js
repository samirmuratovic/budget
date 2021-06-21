import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
})

test('should set sortBy state property to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
})

test('should set sortBy state property to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  }
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
  expect(state.sortBy).toBe('date')
})

test('should set text filter state property', () => {
  const text = 'rent'
  const state = filtersReducer(undefined, { type: 'SET_TEXT', text })
  expect(state.text).toBe(text)
})

test('should set start date state property', () => {
  const date = moment(0)
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    date,
  })
  expect(state.startDate).toBe(date)
})

test('should set end date state property', () => {
  const date = moment(0)
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    date,
  })
  expect(state.endDate).toBe(date)
})
