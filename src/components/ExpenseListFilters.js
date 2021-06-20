import React, { useState } from 'react'
// import moment from 'moment'
import { connect } from 'react-redux'
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

const ExpenseListFilters = ({
  filters,
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
}) => {
  const [focusedInput, setFocusedInput] = useState(null)

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  const onFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput)
  }

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => setTextFilter(e.target.value)}
      />
      <label htmlFor="sort-select">Sort expenses</label>
      <select
        name="sort"
        id="sort-select"
        value={filters.sortBy}
        onChange={(e) =>
          e.target.value === 'date' ? sortByDate() : sortByAmount()
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

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
}

export default connect(mapStateToProps, {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
})(ExpenseListFilters)
