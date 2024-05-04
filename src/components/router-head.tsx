import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'
import { ThemeScript } from './theme-script'

export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const loc = useLocation()

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif&amp;display=swap"
        rel="stylesheet"
      />

      <meta name="description" content="Krisantus Wanandi personal website" />
      <meta property="og:site_name" content="Krisantus Wanandi" />
      <meta name="twitter:site" content="@kris_antus" />
      <meta name="twitter:title" content="Krisantus Wanandi" />
      <meta name="color-scheme" content="light dark" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      <ThemeScript />
    </>
  )
})
