import { Slot, component$ } from '@builder.io/qwik'

interface Props {
  url: string
  title: string
}

export const SocialButton = component$<Props>(({ url, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      class="opacity-40 transition-opacity hover:opacity-70 dark:opacity-25 dark:hover:opacity-70"
      title={title}
    >
      <Slot />
    </a>
  )
})
