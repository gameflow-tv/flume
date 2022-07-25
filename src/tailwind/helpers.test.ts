import { gameflowTheme } from '../foundation'
import { shortenKeys } from './helpers'

describe('shortenKeys', () => {
  const { spacing } = gameflowTheme

  it('should return an object with keys that are shorter than the original', () => {
    const mapped = shortenKeys(spacing, 'x')

    expect(Object.keys(mapped)).toEqual(['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'])
  })

  it('should return equal to original object if no duplicate keys', () => {
    const mapped = shortenKeys(spacing, 'y')

    expect(mapped).toEqual(spacing)
  })
})
