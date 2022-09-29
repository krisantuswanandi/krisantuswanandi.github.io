import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Category } from '../components/category/category'
import { CategoryItem } from '../components/category-item/category-item'
import { Skill } from '../components/skill/skill'
import skills from '../content/skills'
import educations from '../content/educations'
import experiences from '../content/experiences'

export default component$(() => {
  return (
    <div>
      <Category>
        <div class="profile">
          <img src="/photo.jpg" class="photo" />
          <div class="name">Krisantus Wanandi</div>
        </div>
      </Category>
      <Category>
        <CategoryItem title="ADDRESS">
          Jalan <strong>Anggrek Loka no AF 6</strong>
          <br />
          Rawa Buntu, Tangerang Selatan
          <br />
          Banten 15318
        </CategoryItem>
        <CategoryItem title="PHONE">
          <a href="tel:+6281314928595">
            +62<strong>81314928595</strong>
          </a>
        </CategoryItem>
        <CategoryItem title="EMAIL">
          <a href="mailto:krisantus.wanandi@gmail.com">
            <strong>krisantus.wanandi</strong>@gmail.com
          </a>
        </CategoryItem>
      </Category>
      <Category title="EXPERIENCES">
        {experiences.map((experience) => (
          <CategoryItem title={experience.period}>
            <strong>{experience.company}</strong>, <em>{experience.title}</em>
            <br />
            <ul>
              {experience.items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </CategoryItem>
        ))}
      </Category>
      <Category title="EDUCATIONS">
        {educations.map((education) => (
          <CategoryItem title={education.period}>
            <strong>{education.name}</strong>
            <br />
            {education.major && education.gpa && (
              <>
                {education.major} ({education.gpa})
                <br />
              </>
            )}
            {education.city}
          </CategoryItem>
        ))}
      </Category>
      <Category title="SKILLS">
        <CategoryItem title="TECHNICAL">
          {skills.technical.map((skill) => (
            <Skill {...skill} />
          ))}
        </CategoryItem>
        <CategoryItem title="PERSONAL">
          {skills.personal.map((skill) => (
            <Skill {...skill} />
          ))}
        </CategoryItem>
        <CategoryItem title="LANGUAGE">
          {skills.language.map((skill) => (
            <Skill {...skill} />
          ))}
        </CategoryItem>
      </Category>
      <Category title="OTHERS">
        <CategoryItem title="FREELANCE">
          <ul>
            <li>
              <a target="_blank" href="https://djisamsoe.id">
                djisamsoe
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.producthunt.com/products/graphicdash"
              >
                graphicdash
              </a>
            </li>
          </ul>
        </CategoryItem>
        <CategoryItem title="PERSONAL">
          <ul>
            <li>
              <a target="_blank" href="alpha">
                alpha
              </a>
            </li>
            <li>
              <a target="_blank" href="https://codepen.io/krisantuswanandi/">
                codepen
              </a>
            </li>
          </ul>
        </CategoryItem>
        <CategoryItem title="DRAWING">
          <ul>
            <li>
              <a target="_blank" href="https://www.instagram.com/kris_antus">
                instagram
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.deviantart.com/kris-antus">
                deviantart
              </a>
            </li>
          </ul>
        </CategoryItem>
      </Category>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Krisantus Wanandi',
}
