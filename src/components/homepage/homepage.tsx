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
      url: 'https://github.com/krisantuswanandi'
    },
    {
      id: 'twitter',
      icon: TwitterIcon,
      url: 'https://twitter.com/kris_antus'
    },
    {
      id: 'codepen',
      icon: CodepenIcon,
      url: 'https://codepen.io/krisantuswanandi'
    },
    {
      id: 'instagram',
      icon: InstagramIcon,
      url: 'https://instagram.com/krisantus.wanandi'
    },
  ]
  
  return (
    <div class="h-full flex items-center justify-center sm:justify-start p-4 sm:p-24 bg-neutral-800">
      <div class="flex flex-col items-center sm:items-start">
        <div class="mb-6 -mr-3 text-2xl sm:text-5xl after:content-['.'] after:ml-1 after:sm:ml-2 after:text-4xl after:sm:text-7xl after:text-rose-500">
          krisantus wanandi
        </div>
        <div class="flex items-center gap-6">
          {socials.map(social => (
            <Social key={social.id} img={social.icon} url={social.url} />
          ))}
        </div>
      </div>
    </div>
  )
})
