import { Slot, component$ } from '@builder.io/qwik'

interface Props {
  url: string
}

export const SocialButton = component$<Props>(({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      class="opacity-30 invert hover:opacity-70 dark:opacity-25 dark:invert-0 dark:hover:opacity-70"
    >
      <Slot name="icon" />
    </a>
  )
})
