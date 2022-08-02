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
  onPrimary: string

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
  buttonFocus: string

  /**
   * Sharp, bright signaling color that contrasts most of the other colors.
   */
  signal: string
  /**
   * Contrast color to the signal color.
   */
  onSignal: string

  /**
   * Color signaling success or positive outcome.
   */
  success: string
  /**
   * Contrast color to the success color.
   */
  onSuccess: string

  /**
   * Color signaling warning or caution.
   */
  warning: string

  /**
   * Contrast color to the warning color.
   */
  onWarning: string

  /**
   * Color signaling error or negative outcome.
   */
  error: string

  /**
   * Contrast color to the error color.
   */
  onError: string

  /**
   * Neutral, dull color for neutral outcomes.
   */
  draw: string

  /**
   * Subtle highlight color (overlay).
   */
  highlight10: string

  /**
   * Stronger highlight color (overlay).
   */
  highlight30: string

  /**
   * Color signaling inactive/disabled states.
   */
  inactive: string

  /**
   * Subtle dim overlay (overlay).
   */
  overlay30: string

  /**
   * Stronger dim overlay (overlay).
   */
  overlay50: string

  /**
   * Strongest dim overlay (overlay).
   */
  overlay70: string

  /**
   * Base color for shadows.
   */
  shadow: string
}
