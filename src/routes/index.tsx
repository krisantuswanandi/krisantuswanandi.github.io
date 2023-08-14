import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { Link, type DocumentHead } from '@builder.io/qwik-city'
import { SocialButton } from '~/components/social-button'
import { ThemeToggle } from '~/components/theme-toggle'
import {
  LuGithub,
  LuTwitter,
  LuInstagram,
  LuCodepen,
  LuBookOpen,
} from '@qwikest/icons/lucide'

export const socials = [
  {
    id: 'github',
    icon: LuGithub,
    url: 'https://github.com/krisantuswanandi',
  },
  {
    id: 'twitter',
    icon: LuTwitter,
    url: 'https://twitter.com/kris_antus',
  },
  {
    id: 'codepen',
    icon: LuCodepen,
    url: 'https://codepen.io/krisantuswanandi',
  },
  {
    id: 'instagram',
    icon: LuInstagram,
    url: 'https://instagram.com/krisantus.wanandi',
  },
]

export default component$(() => {
  const workaround = useSignal(false)

  useVisibleTask$(() => {
    workaround.value = true
  })

  return (
    <div class="flex h-full items-center justify-center p-4 sm:justify-start sm:p-24">
      <div class="flex flex-col items-center sm:items-start">
        <div class="mb-6 -mr-3 text-2xl after:ml-1 after:text-4xl after:text-rose-500 after:content-['.'] sm:text-5xl sm:after:ml-2 sm:after:text-7xl">
          krisantus wanandi
        </div>
        <div class="flex items-center gap-6">
          {socials.map((social) => (
            <SocialButton key={social.id} url={social.url} title={social.id}>
              <social.icon class="text-lg sm:text-2xl" title="adfad" />
            </SocialButton>
          ))}
          <Link
            href="/blog"
            class="opacity-40 transition-opacity hover:opacity-70 dark:opacity-25 dark:hover:opacity-70"
            title="blog"
          >
            <LuBookOpen
              class={`text-lg sm:text-2xl`}
              data-workaround={workaround.value}
            />
          </Link>
          <div class="-ml-1 -mt-0.5">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Krisantus Wanandi',
}
