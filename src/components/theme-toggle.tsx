import { $, component$, useClientEffect$, useSignal } from '@builder.io/qwik'
import { SunIcon } from './sun-icon'
import { MoonIcon } from './moon-icon'

export const ThemeToggle = component$(() => {
  const darkMode = useSignal(false)

  useClientEffect$(() => {
    let theme = localStorage.getItem('theme')

    if (!theme) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme = isDark ? 'dark' : 'light'
    }

    darkMode.value = theme === 'dark'
  })

  useClientEffect$(({ track }) => {
    track(darkMode)

    if (darkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  })

  const onClick$ = $(() => {
    darkMode.value = !darkMode.value
  })

  return (
    <button
      class="opacity-20 invert hover:opacity-50 dark:opacity-25 dark:invert-0 dark:hover:opacity-70"
      onClick$={onClick$}
    >
      <MoonIcon class="hidden dark:inline" />
      <SunIcon class="dark:hidden" />
    </button>
  )
})
