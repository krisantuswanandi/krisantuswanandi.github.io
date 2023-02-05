import { component$ } from '@builder.io/qwik'

export default component$(({ img, url }: { img: string; url: string }) => {
  return (
    <a href={url} target="_blank" class="opacity-25 hover:opacity-70">
      <img src={img} alt="social icon" class="w-6" />
    </a>
  )
})
