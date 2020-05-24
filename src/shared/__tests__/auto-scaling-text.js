import {render} from 'calculator-test-utils'
import React from 'react'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  const {debug, container} = render(<AutoScalingText />)
  debug()
  // console.log(container.innerHTML)
})
