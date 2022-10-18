import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Homepage } from '../components/homepage/homepage'

export default component$(() => {
  return (
    <Homepage />
  )
})

export const head: DocumentHead = {
  title: 'Krisantus Wanandi',
}
