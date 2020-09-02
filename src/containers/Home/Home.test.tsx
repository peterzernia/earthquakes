import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as api from '../../utils/api'
import Home, { DAY, WEEK, MONTH } from '.'

test('Home', () => {
  const spy = jest.spyOn(api, 'getEarthquakeData')

  const { getByText } = render(
    <Home />,
  )

  // Clicking each button will trigger
  // the api endpoint to be called again
  // with new parameters
  let button = getByText('Past Month')
  userEvent.click(button)
  expect(spy).toBeCalledWith(MONTH)
  expect(spy).toBeCalledTimes(2) // called 1 time when Home renders

  button = getByText('Past Week')
  userEvent.click(button)
  expect(spy).toBeCalledWith(WEEK)
  expect(spy).toBeCalledTimes(3)

  button = getByText('Past Day')
  userEvent.click(button)
  expect(spy).toBeCalledWith(DAY)
  expect(spy).toBeCalledTimes(4)
})
