import { component$, useStylesScoped$ } from '@builder.io/qwik'
import style from './homepage.css'

export const Homepage = component$(() => {
  useStylesScoped$(style)
  
  return (
    <div class="homepage">
      <div className="homepage-body">
        <div class="homepage-title">krisantus wanandi.</div>
      </div>
    </div>
  )
})
