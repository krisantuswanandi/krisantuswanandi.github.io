import { $, component$, useVisibleTask$, useSignal } from '@builder.io/qwik'
import { SunIcon } from './sun-icon'
import { MoonIcon } from './moon-icon'

export const ThemeToggle = component$(() => {
  const darkMode = useSignal(false)

  useVisibleTask$(() => {
    let theme = localStorage.getItem('theme')

    if (!theme) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme = isDark ? 'dark' : 'light'
    }

    darkMode.value = theme === 'dark'
  })

  useVisibleTask$(({ track }) => {
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
      <MoonIcon class="hidden w-4 dark:inline sm:w-6" />
      <SunIcon class="w-4 dark:hidden sm:w-6" />
    </button>
  )
})
