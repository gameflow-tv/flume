import { getLuminance } from './getLuminance'

test('getLuminance returns correct luminance values', () => {
  const lum = getLuminance('#ff0000')
  expect(lum.lum09).toBe('#ae0000')
  expect(lum.lum06).toBe('#910000')
  expect(lum.lum04).toBe('#780000')
  expect(lum.lum02).toBe('#560000')
  expect(lum.lum10).toBe('#b60000')
  expect(lum.lum40).toBe('#ff8686')
})
