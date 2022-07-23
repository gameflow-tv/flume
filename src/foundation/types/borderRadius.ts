/**
 * Flume shape tokens as radius.
 */
export interface BorderRadius {
  /**
   * String index signature for type compat.
   */
  [key: string]: string

  /**
   * The smallest shape radius.
   */
  xs: string
  /**
   * The next smallest shape radius.
   */
  sm: string
  /**
   * The next larges shape radius.
   */
  md: string
  /**
   * The largest shape radius.
   */
  lg: string
}
