import { pxToRem } from './units'

describe('conversions between px and rem', function () {
  it('converts 16px to 1rem', function () {
    let val = '16px'
    let result = pxToRem(val)
    expect(result).toBe('1rem')
  })

  it('converts 18px to 1,125rem', function () {
    let val = '18px'
    let result = pxToRem(val)
    expect(result).toBe('1.125rem')
  })

  it('fails to convert invalid input', function () {
    let val = 'test'
    let result = pxToRem(val)
    expect(result).toBeFalsy()
  })
})
