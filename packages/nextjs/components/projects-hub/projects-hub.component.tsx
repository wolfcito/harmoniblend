import { Article } from '../article'
import { Projects } from '../projects/projects.component'
import { Title } from '../title'

export function ProjectsHub() {
  return (
    <Article className="flex-col">
      <Title label="Projects Hub" />
      <Projects />
    </Article>
  )
}
