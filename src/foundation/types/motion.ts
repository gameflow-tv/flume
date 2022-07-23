/**
 * Flume motion tokens.
 */
export interface Motion {
  /**
   * String index signature for type compat.
   */
  [key: string]: string

  /**
   * Shortest duration for a motion animation in ms.
   */
  short: string

  /**
   * Medium duration for a motion animation in ms.
   */
  medium: string

  /**
   * Longest duration for a motion animation in ms.
   */
  long: string

  /**
   * CSS animation curve.
   */
  curve: string
}
