import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import styles from './style.css?inline'

export default component$(() => {
  useStyles$(styles)
  const loc = useLocation()

  return (
    <div class="blog m-auto max-w-2xl p-4">
      <div class={loc.url.pathname === '/blog/' ? 'hidden' : ''}>
        <Link
          href="/blog"
          class="text-sm text-neutral-600 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 hover:dark:text-neutral-100"
        >
          cd ..
        </Link>
      </div>
      <Slot />
    </div>
  )
})
