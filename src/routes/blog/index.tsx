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
      <div class="mt-20">
        <div class="flex justify-center">
          <div class="text-right">
            <div class="mr-1 text-rose-500">santus'</div>
            <div class="-mt-3 text-5xl underline underline-offset-8">
              Brain Dump
            </div>
          </div>
        </div>
        <div class="mx-auto mt-4 max-w-lg text-center text-neutral-600 dark:text-neutral-400">
          Should be a proper blog, but didn't want to waste too much time
          tweaking my naturally bad writing. Could probably use gpt's help but
          prefer to use my time to code some more.
          <br />
          Or just sleep.
        </div>
      </div>
      <div class="mt-8 text-center">
        <Link
          href="/"
          class="text-sm text-neutral-600 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 hover:dark:text-neutral-100"
        >
          cd ~
        </Link>
      </div>
      <div>
        {articles.value.map((article) => (
          <div class="mt-16" key={article.createdAt}>
            <div class="text-xs text-neutral-500 dark:text-neutral-400">
              {formatDate(new Date(article.createdAt))}
            </div>
            <div class="py-1">
              <Link
                href={article.url}
                class="text-lg underline-offset-4 hover:underline"
              >
                {article.title}
              </Link>
            </div>
            <div class="text-sm text-neutral-500 dark:text-neutral-400">
              {article.description}
            </div>
          </div>
        ))}
      </div>
    </>
  )
})
