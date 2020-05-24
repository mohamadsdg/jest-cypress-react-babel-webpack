import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {ThemeProvider} from 'emotion-theming'
import PropTypes from 'prop-types'
import * as themes from '../src/themes'

function render(ui, {theme = themes.dark, ...options}) {
  function wrapper({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
  wrapper.propTypes = {
    children: PropTypes.node,
  }
  return rtlRender(ui, {wrapper, ...options})
}

export * from '@testing-library/react'
export {render}
