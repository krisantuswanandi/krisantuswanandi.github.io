import { Slot, component$ } from '@builder.io/qwik'

interface Props {
  url: string
}

export const SocialButton = component$<Props>(({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      class="opacity-40 hover:opacity-70 dark:opacity-25 dark:hover:opacity-70"
    >
      <Slot name="icon" />
    </a>
  )
})
