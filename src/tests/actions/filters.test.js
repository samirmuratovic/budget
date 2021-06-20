import moment from 'moment'
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../../actions/filters'

test('should set up setTextFilter with provided value action object', () => {
  const text = 'rent'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT',
    text,
  })
})

test('should set up setTextFilter with default value action object', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: '',
  })
})

test('should set up sortByAmount action object', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})

test('should set up sortByDate action object', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  })
})

test('should set up setStartDate action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0),
  })
})

test('should set up setEndDate action object', () => {
  const action = setEndDate(moment(1000))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(1000),
  })
})
