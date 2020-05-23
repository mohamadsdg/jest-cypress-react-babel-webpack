/* eslint-disable no-undef */
import {render, fireEvent} from '@testing-library/react'
// import * as jestDOM from '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import Calculator from '../../calculator'

test('renders', () => {
  render(<Calculator />)
})

// expect.extend(jestDOM)

describe('sds', () => {
  test('the clear button switches from AC to C when there is an entry', () => {
    const {getByText} = render(<Calculator />)
    const clearButton = getByText('AC')
    // console.log(clearButton, debug())

    fireEvent.click(getByText(/3/))
    // expect(clearButton.textContent).toBe('C')
    expect(clearButton).toHaveTextContent('C')

    fireEvent.click(clearButton)
    // expect(clearButton.textContent).toBe('AC')
    expect(clearButton).toHaveTextContent('AC')
  })
})
