import { useRef } from 'react'
import { ProjectCard, ProjectCardProps } from '../../components/ProjectCard'
import {
  staggeredAnimation,
  useIsOnScreenOnce,
} from '../../hooks/useIsOnScreenOnce'
import { ProjectsContainer } from './styles'

const projectsContent: ProjectCardProps[] = [
  {
    title: 'Video player usando Redux',
    description:
      'Esta aplicação permite assistir vídeos do YouTube usando Redux ou (Zustand) para gerenciamento de estado. Ela oferece uma interface amigável para transmitir vídeos do YouTube.',
    tags: [
      'React.js',
      'TypeScript',
      'Redux',
      'Zustand',
      'Tailwind.css',
      'Vitest',
    ],
    deployUrl: '',
    repoUrl: 'video-player-redux-zustand',
    imgUrl: 'https://i.imgur.com/RilVzcA.png',
  },
  {
    title: 'Ignite to do',
    description:
      'Este aplicativo permite que você gerencie suas tarefas (to-dos) com uma interface amigável e moderna. O projeto foi construído usando React, Vite, CSS Modules e TypeScript.',
    tags: ['React.js', 'TypeScript', 'Css-Modules'],
    deployUrl: '',
    repoUrl: 'ignite-toDos',
    imgUrl: 'https://i.imgur.com/gcRAcwz.png',
  },
]

export function Projects() {
  const ref = useRef<HTMLDivElement | null>(null)
  const onScreen = useIsOnScreenOnce(ref, 0.5)
  return (
    <ProjectsContainer
      id="projetos"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? 'visible' : 'hidden'}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <h2>Projetos</h2>
      <div>
        {projectsContent.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              deployUrl={project.deployUrl}
              repoUrl={project.repoUrl}
              imgUrl={project.imgUrl}
            />
          )
        })}
      </div>
    </ProjectsContainer>
  )
}
