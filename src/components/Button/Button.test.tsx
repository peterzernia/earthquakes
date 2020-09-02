import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '.'

test('Button', () => {
  const handleClick = jest.fn()

  const { getByText } = render(
    <Button onClick={handleClick}>
      Press Me
    </Button>,
  )

  const button = getByText('Press Me')
  userEvent.click(button)
  expect(handleClick).toBeCalledTimes(1)
})
