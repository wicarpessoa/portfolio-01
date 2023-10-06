import { ProjectCard } from '../../components/ProjectCard'
import { ProjectsContainer } from './styles'

export function Projects() {
  return (
    <ProjectsContainer id="projetos">
      <h2>Projetos</h2>
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </ProjectsContainer>
  )
}
