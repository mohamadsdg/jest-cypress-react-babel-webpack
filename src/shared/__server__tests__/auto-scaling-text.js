import React from 'react'
import {renderToString} from 'react-dom/server'
import AutoScalingText from '../auto-scaling-text'

test('renders to string server', () => {
  renderToString(<AutoScalingText />)
})
