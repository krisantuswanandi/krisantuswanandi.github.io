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
    <div class="h-full flex items-center p-24 bg-neutral-800 text-5xl">
      <div>
        <div class="mb-6">
          <span>krisantus wanandi</span>
          <span class="inline-block ml-2 text-7xl text-rose-500">.</span>
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
