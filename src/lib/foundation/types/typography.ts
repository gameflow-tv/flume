/**
 * Basic typography data.
 */
export interface TypographyData {
  /**
   * Size of the font in rem, determining size, surprisingly.
   */
  fontSize: string

  /**
   * Weighting of the font, determining thickness.
   */
  fontWeight: string

  /**
   * Line height, determining how tall the text line is, regardless of `fontSize`.
   */
  lineHeight: string

  /**
   * Typeface family, determining the typeface.
   */
  fontFamily: string
}

/**
 * Flume typography tokens.
 */
export interface Typography {
  /**
   * String index signature for type compat.
   */
  [key: string]: TypographyData
  /**
   * The largest header typography, used for the largest text and h1 tags.
   */
  'header-xl': TypographyData

  /**
   * The next largest header typography, used for h2 tags.
   */
  'header-lg': TypographyData

  /**
   * Medium sized header typography, used for h3 tags.
   */
  'header-md': TypographyData

  /**
   * Smaller header typography, used for h4 tags.
   */
  'header-sm': TypographyData

  /**
   * Smallest header typography, used for h5 tags.
   */
  'header-xs': TypographyData

  /**
   * The largest body typography, used for the largest breadtext and p tags.
   */
  'body-lg': TypographyData

  /**
   * The next largest body typography, used for p tags.
   */
  'body-md': TypographyData

  /**
   * The smallest body typography, used for small text, tags and labels.
   */
  'body-sm': TypographyData

  /**
   * Typography used for buttons.
   */
  button: TypographyData

  /**
   * Typography used for links and anchor tags.
   */
  link: TypographyData

  /**
   * Typography used for small text.
   */
  'label-md': TypographyData

  /**
   * Typography used for very small text.
   */
  'label-sm': TypographyData
}
