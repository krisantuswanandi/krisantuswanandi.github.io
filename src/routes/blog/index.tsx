import { component$ } from '@builder.io/qwik'
import { Link, routeLoader$ } from '@builder.io/qwik-city'

interface Frontmatter {
  title: string
  description: string
  createdAt: string
}

interface Markdown {
  frontmatter: Frontmatter
}

interface Article extends Frontmatter {
  url: string
}

export const useArticles = routeLoader$(async () => {
  return await Promise.all(
    Object.entries(
      import.meta.glob<Markdown>('/src/routes/blog/**/index.mdx'),
    ).map(async ([path, v]) => {
      const data = await v()
      return {
        url: path.replace('/src/routes', '').replace('/index.mdx', ''),
        ...data.frontmatter,
      } as Article
    }),
  )
})

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

export default component$(() => {
  const articles = useArticles()

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {articles.value.map((article) => (
          <li
            class="mt-4 flex items-baseline gap-2 first:mt-0"
            key={article.createdAt}
          >
            <Link
              href={article.url}
              class="text-lg font-bold underline-offset-4 hover:underline"
            >
              {article.title}
            </Link>
            <span class="text-sm text-neutral-400 dark:text-neutral-500">
              {formatDate(new Date(article.createdAt))}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
})
