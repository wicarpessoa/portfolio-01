import { useRef, useState } from 'react'
import { TabItem } from '../../components/TabItem'
import { ExperienceContainer, ExperienceContentContainer } from './styles'
import {
  staggeredAnimation,
  useIsOnScreenOnce,
} from '../../hooks/useIsOnScreenOnce'

export function Experience() {
  const [activeTab, setActiveTab] = useState('tab1')
  const ref = useRef<HTMLDivElement | null>(null)
  const onScreen = useIsOnScreenOnce(ref, 0.5)
  const TABS = [
    {
      value: 'tab1',
      title: 'Freelancer',
      office: 'UI Engineer Co-op @ Apple',
      content: [
        'Atuação como freelancer em desenvolvimento Front-End, especializado em React e Node (express) para criação de soluções web personalizadas',
      ],
      period: 'Fev 2023 - Presente',
    },
    {
      value: 'tab2',
      title: 'Olkeey',
      office: 'Dev Front-End @Olkeey',
      content: [
        'Utilização de React e React Native na construção de interfaces web e mobile de alta qualidade, otimizadas para desempenho e usabilidade.',
        'Trabalho em um ambiente ágil adotando a metodologia Scrum, colaborando ativamente com equipes multidisciplinares para entregas incrementais e eficientes ',
      ],
      period: 'março 2022 - fev 2023',
    },
  ]
  const activeTabContent = TABS.find((tab) => tab.value === activeTab)
  return (
    <ExperienceContainer
      id="experiencia"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? 'visible' : 'hidden'}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <h2>Experiências</h2>
      <div>
        <ul>
          {TABS.map((tab) => (
            <TabItem
              key={tab.value}
              value={tab.value}
              title={tab.title}
              isSelected={activeTab === tab.value}
              onClick={() => setActiveTab(tab.value)}
            />
          ))}
        </ul>
        <ExperienceContentContainer>
          {activeTabContent && (
            <ul>
              <h3>{activeTabContent.office}</h3>
              <span>{activeTabContent.period}</span>
              {activeTabContent.content.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          )}
        </ExperienceContentContainer>
      </div>
    </ExperienceContainer>
  )
}
