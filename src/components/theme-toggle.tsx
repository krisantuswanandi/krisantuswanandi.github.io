import { $, component$, useVisibleTask$, useSignal } from '@builder.io/qwik'
import { LuSun, LuMoon } from '@qwikest/icons/lucide'

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
      class="block opacity-40 transition-opacity hover:opacity-70 dark:opacity-25 dark:hover:opacity-70"
      onClick$={onClick$}
    >
      <LuMoon class="hidden text-lg dark:block sm:text-2xl" />
      <LuSun class="text-lg dark:hidden sm:text-2xl" />
    </button>
  )
})
