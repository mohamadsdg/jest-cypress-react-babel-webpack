import {render} from 'calculator-test-utils'
import React from 'react'
import AutoScalingText from '../auto-scaling-text'
import {light} from '../../themes'

test('renders', () => {
  const {debug, container} = render(<AutoScalingText />, {theme: light})
  debug()
  // console.log(container.innerHTML)
})
