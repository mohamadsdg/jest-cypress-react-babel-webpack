import {render} from '@testing-library/react'
import React from 'react'
import CalculatorDisplay from '../calculator-display'

describe('calculator', () => {
  test('should render calculator', () => {
    const {container, debug} = render(<CalculatorDisplay value="0" />)
    // debug()
    // console.log(container.innerHTML)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="css-lq9ahq-calculator-display--CalculatorDisplay"
        >
          <div
            class="autoScalingText"
            data-testid="total"
            style="transform: scale(1,1);"
          >
            0
          </div>
        </div>
      </div>
    `)
  })
})
