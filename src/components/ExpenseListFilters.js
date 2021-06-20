import React, { useState } from 'react'
// import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../actions/filters'

const ExpenseListFilters = () => {
  const [focusedInput, setFocusedInput] = useState(null)

  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters)

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate))
    dispatch(setEndDate(endDate))
  }

  const onFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput)
  }

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => dispatch(setTextFilter(e.target.value))}
      />
      <label htmlFor="sort-select">Sort expenses</label>
      <select
        name="sort"
        id="sort-select"
        value={filters.sortBy}
        onChange={(e) =>
          e.target.value === 'date'
            ? dispatch(sortByDate())
            : dispatch(sortByAmount())
        }
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={filters.startDate}
        startDateId="startDate"
        endDate={filters.endDate}
        endDateId="endDate"
        onDatesChange={onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     filters: state.filters,
//   }
// }

export default ExpenseListFilters
