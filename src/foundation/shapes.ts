/**
 * Flume shape tokens as radii.
 */
export interface Shapes {
  /**
   * String index signature for type compat.
   */
  [key: string]: string

  /**
   * The smallest shape radius.
   */
  xsmall: string
  /**
   * The next smallest shape radius.
   */
  small: string
  /**
   * The next larges shape radius.
   */
  medium: string
  /**
   * The largest shape radius.
   */
  large: string
}
