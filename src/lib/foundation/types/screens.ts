/**
 * Flume breakpoints.
 */
export interface Screens {
  /**
   * String index signature for type compat.
   */
  [key: string]: string

  /**
   * Smallest screen size.
   */
  default: string

  /**
   * Extra small screen size.
   */
  xs: string

  /**
   * Small screen size.
   */
  sm: string

  /**
   * Medium screen size.
   */
  md: string
  /**
   * Large screen size.
   */
  lg: string
  /**
   * Large screen size.
   */
  xl: string
  /**
   * Extra LArge screen size.
   */
  '2xl': string
}
