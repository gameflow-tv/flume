/**
 * Flume motion tokens.
 */
export interface Motion {
  /**
   * Shortest duration for a motion animation in ms.
   */
  short: number

  /**
   * Medium duration for a motion animation in ms.
   */
  medium: number

  /**
   * Longest duration for a motion animation in ms.
   */
  long: number

  /**
   * CSS animation curve.
   */
  curve: string
}
