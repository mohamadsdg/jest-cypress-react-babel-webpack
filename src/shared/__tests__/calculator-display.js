import {render} from '@testing-library/react'
import React from 'react'
import CalculatorDisplay from '../calculator-display'

describe('calculator', () => {
  test('should render calculator', () => {
    const {container, debug} = render(<CalculatorDisplay value="0" />)
    // debug()
    // console.log(container.innerHTML)
    expect(container).toMatchInlineSnapshot(`
      .emotion-0 {
        position: relative;
        color: white;
        background: #1c191c;
        line-height: 130px;
        font-size: 6em;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }

      <div>
        <div
          class="emotion-0"
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
