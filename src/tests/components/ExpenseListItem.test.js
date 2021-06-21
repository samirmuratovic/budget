import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'

test('should render ExpenseListItem with fixture data', () => {
  const expense = expenses[1]
  const wrapper = shallow(<ExpenseListItem {...expense} key={expense.id} />)

  expect(wrapper).toMatchSnapshot()
})
