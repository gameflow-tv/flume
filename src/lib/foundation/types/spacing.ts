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
  '3xs': string

  /**
   * A very small spacing, used for incremental and very minor gaps.
   */
  '2xs': string

  /**
   * A small spacing, used for incremental and minor gaps.
   */
  xs: string

  /**
   * Spacing often used to add air between elements and in lists.
   */
  sm: string

  /**
   * Spacing used for medium sized gaps and paddings.
   */
  md: string

  /**
   * Spacing used for large gaps and paddings.
   */
  lg: string

  /**
   * Spacing used for very large gaps and paddings.
   */
  xl: string

  /**
   * Spacing used for huge gaps and paddings.
   */
  '2xl': string
}
