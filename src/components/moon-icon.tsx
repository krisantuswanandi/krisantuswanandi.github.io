import { component$ } from '@builder.io/qwik'

export const MoonIcon = component$((props: { class: string }) => {
  return (
    <svg class={props.class} width="24" height="24" viewBox="0 0 24 24">
      <mask id="mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="20" cy="6" r="12" fill="black" />
      </mask>
      <circle cx="12" cy="12" r="12" mask="url(#mask)" fill="currentColor" />
    </svg>
  )
})
