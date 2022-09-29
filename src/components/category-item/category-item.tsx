import { component$, useStylesScoped$, Slot } from '@builder.io/qwik'
import style from './category-item.css'

interface CategoryItemProps {
  title?: string
}

export const CategoryItem = component$(({ title }: CategoryItemProps) => {
  useStylesScoped$(style)

  return (
    <div class="category-item">
      <div class="category-item-header">
        {title && <div className="category-item-title">{title}</div>}
      </div>
      <div class="category-item-body">
        <Slot />
      </div>
    </div>
  )
})
