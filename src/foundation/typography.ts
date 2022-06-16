/**
 * Basic typography data.
 */
interface TypographyData {
  /**
   * Size of the font in rem, determining size, surprisingly.
   */
  fontSize: number

  /**
   * Weighting of the font, determining thickness.
   */
  fontWeight: number

  /**
   * Line height, determining how tall the text line is, regardless of `fontSize`.
   */
  lineHeight: number

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
   * The largest header typography, used for the largest text and h1 tags.
   */
  header1: TypographyData

  /**
   * The next largest header typography, used for h2 tags.
   */
  header2: TypographyData

  /**
   * Medium sized header typography, used for h3 tags.
   */
  header3: TypographyData

  /**
   * Smaller header typography, used for h4 tags.
   */
  header4: TypographyData

  /**
   * Smallest header typography, used for h5 tags.
   */
  header5: TypographyData

  /**
   * The largest body typography, used for the largest breadtext and p tags.
   */
  body1: TypographyData

  /**
   * The next largest body typography, used for p tags.
   */
  body2: TypographyData

  /**
   * The smallest body typography, used for small text, tags and labels.
   */
  body3: TypographyData

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
  label1: TypographyData

  /**
   * Typography used for very small text.
   */
  label2: TypographyData
}
