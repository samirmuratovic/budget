import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(
    <ExpenseForm description="rent" amount={5000} note="Was lower last month" />
  )
  expect(wrapper).toMatchSnapshot()
})
