import React from 'react'
import {render} from 'calculator-test-utils'
import CalculatorDisplay from '../calculator-display'
// import {render} from '../../../test/calculator-test-utils'
import {light} from '../../themes'

describe('calculator', () => {
  test('should render calculator', () => {
    const {container, debug} = render(<CalculatorDisplay value="0" />)
    // debug()
    // console.log(container.innerHTML)
    expect(container).toMatchInlineSnapshot(`
      .emotion-0 {
        position: relative;
        line-height: 130px;
        font-size: 6em;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        color: white;
        background: #1c191c;
      }

      <div>
        <div
          class="emotion-0 emotion-1"
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

  test('mount', () => {
    // const {container} = render(
    //   <ThemeProvider theme={light}>
    //     <CalculatorDisplay value="0" />
    //   </ThemeProvider>,
    // )
    // const {container} = render(<CalculatorDisplay value="0" />, {
    //   wrapper,
    // })
    // const {container} = renderWithProvider(<CalculatorDisplay value="0" />)
    const {container} = render(<CalculatorDisplay value="0" />, {theme: light})

    // expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        position: relative;
        line-height: 130px;
        font-size: 6em;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        color: white;
        background: #1c191c;
      }

      <div
        class="emotion-0 emotion-1"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          0
        </div>
      </div>
    `)
  })
})
