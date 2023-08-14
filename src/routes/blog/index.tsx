import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

const items = [
  {
    title: 'Enable location services from command line in macOS',
    description: `macOS Ventura 13.5 has a known bug where users can't see list of apps that are using location services. In consequence, users can't enable location services for apps that don't have it enabled. To solve this...`,
    url: '/blog/location-service-macos',
    date: 'Aug 14, 2023',
  },
]

export default component$(() => {
  return (
    <>
      <div class="mt-20">
        <div class="flex justify-center">
          <div class="text-right">
            <div class="mr-1 text-rose-500">santus'</div>
            <div class="-mt-3 text-5xl underline underline-offset-8">
              Brain Dump
            </div>
          </div>
        </div>
        <div class="mx-auto mt-4 max-w-lg text-center text-neutral-600 dark:text-neutral-400">
          Should be a proper blog, but didn't want to waste too much time
          tweaking my naturally bad writing. Could probably use gpt's help but
          prefer to use my time to code some more.
          <br />
          Or just sleep.
        </div>
      </div>
      <div class="mt-8 text-center">
        <Link
          href="/"
          class="text-sm text-neutral-600 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 hover:dark:text-neutral-100"
        >
          cd ~
        </Link>
      </div>
      <div>
        {items.map((item) => (
          <div class="mt-16" key={item.date}>
            <div class="text-xs text-neutral-500 dark:text-neutral-400">
              {item.date}
            </div>
            <div class="py-1">
              <Link
                href={item.url}
                class="text-lg underline-offset-4 hover:underline"
              >
                {item.title}
              </Link>
            </div>
            <div class="text-sm text-neutral-500 dark:text-neutral-400">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </>
  )
})
