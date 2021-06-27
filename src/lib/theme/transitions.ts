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

export const transitionToCss = (t: Transition): string => `${t.selection} ${t.duration} ${t.curve}`

const fallback: Transitions = {
short: { selection: 'all', duration: '100ms', curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
medium: { selection: 'all', duration: '200ms', curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
long: { selection: 'all', duration: '300ms', curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
}

export default fallback
