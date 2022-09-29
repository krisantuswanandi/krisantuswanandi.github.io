import { component$, useStylesScoped$, Slot } from '@builder.io/qwik'
import style from './category.css'

interface CategoryProps {
  title?: string
}

export const Category = component$(({ title }: CategoryProps) => {
  useStylesScoped$(style)

  return (
    <div class="category">
      <div class="category-header">
        {title && <div className="category-title">{title}</div>}
      </div>
      <div class="category-body">
        <Slot />
      </div>
    </div>
  )
})
