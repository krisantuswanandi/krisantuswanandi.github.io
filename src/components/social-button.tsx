import { component$ } from '@builder.io/qwik'

export const SocialButton = component$(
  ({ img, url, title }: { img: string; url: string; title: string }) => {
    return (
      <a
        href={url}
        target="_blank"
        class="opacity-20 invert hover:opacity-50 dark:opacity-25 dark:invert-0 dark:hover:opacity-70"
      >
        <img src={img} alt={title} class="w-4 sm:w-6" />
      </a>
    )
  }
)
