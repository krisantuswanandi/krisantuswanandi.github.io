export const ThemeScript = () => {
  const themeScript = `
let theme = localStorage.getItem('theme')

if (!theme) {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme = isDark ? 'dark' : 'light'
}

if (theme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
`
  return <script dangerouslySetInnerHTML={themeScript} />
}
