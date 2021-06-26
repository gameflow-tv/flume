import { pxToRem } from './units'

describe('conversions between units', function () {
  it('converts 16px to 1rem', function () {
    let val = '16px'
    let result = pxToRem(val)
    expect(result).toBe(1)
  })

  it('converts 18px to 1,125rem', function () {
      let val = '18px'
      let result = pxToRem(val)
      expect(result).toBe(1.125)
  })
})
