import { component$, Slot } from '@builder.io/qwik'
import { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <Slot />
    </>
  )
})

export const head: DocumentHead = ({ head }) => {
  let title = 'Krisantus Wanandi'

  if (head.title) title = `${head.title} - ${title}`

  return { title }
}
