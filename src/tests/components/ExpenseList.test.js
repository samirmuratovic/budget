import React from 'react'
import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseList from '../../components/ExpenseList'

test('should render ExpenseList with expenses', () => {
  const spy = jest.spyOn(redux, 'useSelector')
  spy.mockReturnValue([...expenses])

  const wrapper = shallow(<ExpenseList />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () => {
  const spy = jest.spyOn(redux, 'useSelector')
  spy.mockReturnValue([])

  const wrapper = shallow(<ExpenseList />)
  expect(wrapper).toMatchSnapshot()
})
