import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ id, description, amount, note, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount}</p>
    <p>{note}</p>
    <p>{moment(createdAt).calendar()}</p>
  </div>
)

export default ExpenseListItem
