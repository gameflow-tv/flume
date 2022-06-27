/**
 * Flume spacing tokens.
 */
export interface Spacing {
  /**
   * String index signature for type compat.
   */
  [key: string]: string

  /**
   * The smallest spacing, used for incremental and very minor gaps.
   */
  xxxsmall: string

  /**
   * A very small spacing, used for incremental and very minor gaps.
   */
  xxsmall: string

  /**
   * A small spacing, used for incremental and minor gaps.
   */
  xsmall: string

  /**
   * Spacing often used to add air between elements and in lists.
   */
  small: string

  /**
   * Spacing used for medium sized gaps and paddings.
   */
  medium: string

  /**
   * Spacing used for large gaps and paddings.
   */
  large: string

  /**
   * Spacing used for very large gaps and paddings.
   */
  xlarge: string

  /**
   * Spacing used for huge gaps and paddings.
   */
  xxlarge: string
}
