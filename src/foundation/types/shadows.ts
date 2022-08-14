/**
 * Flume shadow tokens.
 */
export interface Shadows {
  /**
   * String index signature for type compat.
   */
  [key: string]: string
  /**
   * Very small, very subtle shadow.
   */
  xs: string

  /**
   * Small, subtle shadow.
   */
  sm: string

  /**
   * Medium-sized shadow.
   */
  md: string

  /**
   * Large shadow used for depth.
   */
  lg: string

  /**
   * Shadow for focused elements.
   */
  focus: string

  /**
   * Shadow for text elements.
   */
  text: string
}
