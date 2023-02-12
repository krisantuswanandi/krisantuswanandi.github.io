import { component$ } from '@builder.io/qwik'

export default component$(({ img, url }: { img: string; url: string }) => {
  return (
    <a
      href={url}
      target="_blank"
      class="opacity-10 invert hover:opacity-50 dark:opacity-25 dark:invert-0 dark:hover:opacity-70"
    >
      <img src={img} alt="social icon" class="w-4 sm:w-6" />
    </a>
  )
})
