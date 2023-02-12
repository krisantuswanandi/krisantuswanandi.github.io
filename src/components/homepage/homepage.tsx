import { component$ } from '@builder.io/qwik'
import Social from './social'
import GithubIcon from '~/assets/images/github.svg'
import TwitterIcon from '~/assets/images/twitter.svg'
import CodepenIcon from '~/assets/images/codepen.svg'
import InstagramIcon from '~/assets/images/instagram.svg'

export const Homepage = component$(() => {
  const socials = [
    {
      id: 'github',
      icon: GithubIcon,
      url: 'https://github.com/krisantuswanandi',
    },
    {
      id: 'twitter',
      icon: TwitterIcon,
      url: 'https://twitter.com/kris_antus',
    },
    {
      id: 'codepen',
      icon: CodepenIcon,
      url: 'https://codepen.io/krisantuswanandi',
    },
    {
      id: 'instagram',
      icon: InstagramIcon,
      url: 'https://instagram.com/krisantus.wanandi',
    },
  ]

  return (
    <div class="flex h-full items-center justify-center bg-neutral-100 p-4 dark:bg-neutral-800 sm:justify-start sm:p-24">
      <div class="flex flex-col items-center sm:items-start">
        <div class="mb-6 -mr-3 text-2xl text-neutral-800 after:ml-1 after:text-4xl after:text-rose-500 after:content-['.'] dark:text-neutral-100 sm:text-5xl sm:after:ml-2 sm:after:text-7xl">
          krisantus wanandi
        </div>
        <div class="flex items-center gap-6">
          {socials.map((social) => (
            <Social key={social.id} img={social.icon} url={social.url} />
          ))}
        </div>
      </div>
    </div>
  )
})
