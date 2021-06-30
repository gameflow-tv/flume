import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'

// TODO: Import each icon explicitly to optimize import size
export const importIcons = () => {
  library.add(fal, fas)
}
