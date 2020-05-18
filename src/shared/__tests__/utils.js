import {getFormattedValue} from '../utils'

describe('test Utils', () => {
  test('number format getFormattedValue', () => {
    expect(getFormattedValue('1234.0')).toBe('1,234.0')
  })
})

console.log(window)
