import { component$, useStylesScoped$ } from '@builder.io/qwik'
import style from './skill.css'

interface SkillProps {
  title: string
  value: number
}

export const Skill = component$(({ title, value }: SkillProps) => {
  useStylesScoped$(style)

  return (
    <div class="skill">
      <div class="skill-value-bar">
        <div class="skill-value" style={{ width: `${value}%` }}></div>
      </div>
      <div class="skill-title">{title}</div>
    </div>
  )
})
