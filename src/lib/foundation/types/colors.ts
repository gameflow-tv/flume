/**
 * Flume color tokens.
 */
export interface Colors {
  /**
   * String index signature for type compat.
   */
  [key: string]: string

  /**
   * The primary/brand color.
   */
  primary: string

  /**
   * Contrast color to the primary color.
   */
  'on-primary': string

  /**
   * Complementary color to the primary color.
   */
  secondary: string

  /**
   * Third complementary color to the primary color.
   */
  tertiary: string

  /**
   * Contrast color to the secondary color.
   */
  quaternary: string

  /**
   * Text color for headings.
   */
  header: string

  /**
   * Text color for body text.
   */
  body: string

  /**
   * Text color for small/footer text.
   */
  subtitle: string

  /**
   * Color for icons.
   */
  icon: string

  /**
   * Color for button borders when focused.
   */
  'button-focus': string

  /**
   * Sharp, bright signaling color that contrasts most of the other colors.
   */
  signal: string
  /**
   * Contrast color to the signal color.
   */
  'on-signal': string

  /**
   * Color signaling success or positive outcome.
   */
  success: string
  /**
   * Contrast color to the success color.
   */
  'on-success': string

  /**
   * Color signaling warning or caution.
   */
  warning: string

  /**
   * Contrast color to the warning color.
   */
  'on-warning': string

  /**
   * Color signaling error or negative outcome.
   */
  error: string

  /**
   * Contrast color to the error color.
   */
  'on-error': string

  /**
   * Neutral, dull color for neutral outcomes.
   */
  draw: string

  /**
   * Subtle highlight color (overlay).
   */
  'highlight-10': string

  /**
   * Stronger highlight color (overlay).
   */
  'highlight-30': string

  /**
   * Color signaling inactive/disabled states.
   */
  inactive: string

  /**
   * Subtle dim overlay (overlay).
   */
  'overlay-30': string

  /**
   * Stronger dim overlay (overlay).
   */
  'overlay-50': string

  /**
   * Strongest dim overlay (overlay).
   */
  'overlay-70': string

  /**
   * Base color for shadows.
   */
  shadow: string
}
