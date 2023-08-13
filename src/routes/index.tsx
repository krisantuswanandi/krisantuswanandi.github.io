import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { SocialButton } from '~/components/social-button'
import { ThemeToggle } from '~/components/theme-toggle'
import {
  LuGithub,
  LuTwitter,
  LuInstagram,
  LuCodepen,
} from '@qwikest/icons/lucide'

export const socials = [
  {
    id: 'github',
    icon: LuGithub,
    url: 'https://github.com/krisantuswanandi',
    title: 'github link',
  },
  {
    id: 'twitter',
    icon: LuTwitter,
    url: 'https://twitter.com/kris_antus',
    title: 'twitter link',
  },
  {
    id: 'codepen',
    icon: LuCodepen,
    url: 'https://codepen.io/krisantuswanandi',
    title: 'codepen link',
  },
  {
    id: 'instagram',
    icon: LuInstagram,
    url: 'https://instagram.com/krisantus.wanandi',
    title: 'instagram link',
  },
]

export default component$(() => {
  return (
    <div class="flex h-full items-center justify-center p-4 sm:justify-start sm:p-24">
      <div class="flex flex-col items-center sm:items-start">
        <div class="mb-6 -mr-3 text-2xl after:ml-1 after:text-4xl after:text-rose-500 after:content-['.'] sm:text-5xl sm:after:ml-2 sm:after:text-7xl">
          krisantus wanandi
        </div>
        <div class="flex items-center gap-6">
          {socials.map((social) => (
            <SocialButton key={social.id} url={social.url}>
              <social.icon q:slot="icon" class="text-lg sm:text-2xl" />
            </SocialButton>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Krisantus Wanandi',
}
