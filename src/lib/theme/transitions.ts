export type Transition = {
  selection: string
  duration: string
  curve: string
}

export type Transitions = {
  short: Transition
  medium: Transition
  long: Transition
}

export const transitionToCss = (t: Transition, o?: Partial<Transition>): string =>
  `${o?.selection ?? t.selection} ${o?.duration ?? t.duration} ${o?.curve ?? t.curve}`

export const curve = 'cubic-bezier(0.215, 0.61, 0.355, 1)'

const fallback: Transitions = {
  short: { selection: 'all', duration: '100ms', curve },
  medium: { selection: 'all', duration: '200ms', curve },
  long: { selection: 'all', duration: '300ms', curve }
}

export default fallback
