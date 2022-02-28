import { saturate } from './saturate'

test('saturate returns correct saturation values', () => {
  const sat = saturate('#ff0000', 0.5)
  expect(sat).toBe('#ff5a36')
})

test('sature white returns white', () => {
  const sat = saturate('#ffffff', 0.5)
  expect(sat).toBe('#ffffff')
})

test('saturate black returns black', () => {
  const sat = saturate('#000000', 1)
  expect(sat).toBe('#000000')
})
