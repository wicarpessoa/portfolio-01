import { Folder, GithubLogo } from '@phosphor-icons/react'
import {
  ProjectCardContainer,
  ProjectCardImgContainer,
  ProjectCardTextContainer,
} from './styles'

export function ProjectCard() {
  return (
    <ProjectCardContainer>
      <ProjectCardTextContainer>
        <span>Featured Project</span>
        <a href="" target="_blank">
          Spotify Profile
        </a>
        <div>
          <p>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>
        <ul>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
        </ul>
        <div>
          <a
            href="https://github.com/wicarpessoa"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={24} />
          </a>
          <a href="">
            <Folder size={24} />
          </a>
        </div>
      </ProjectCardTextContainer>
      <ProjectCardImgContainer>
        <img src="https://i.imgur.com/RilVzcA.png" />
        <a />
      </ProjectCardImgContainer>
    </ProjectCardContainer>
  )
}
