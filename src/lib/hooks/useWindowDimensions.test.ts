import { getWindowDimensions } from './useWindowDimensions'

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x
  window.innerHeight = y
  window.dispatchEvent(new Event('resize'))
}

describe('getWindowDimensions', () => {
  it('returns the current window dimensions in px and rem', () => {
    resizeWindow(1024, 1024)
    const { innerWidth, innerHeight } = window

    const { width, height } = getWindowDimensions()

    expect(width.px).toBe(innerWidth)
    expect(width.rem).toBe(innerWidth / 16)

    expect(height.px).toBe(innerHeight)
    expect(height.rem).toBe(innerHeight / 16)
  })
})
