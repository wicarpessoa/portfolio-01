import { useState } from 'react'
import { TabItem } from '../../components/TabItem'
import { ExperienceContainer, ExperienceContentContainer } from './styles'

export function Experience() {
  const [activeTab, setActiveTab] = useState('tab1')
  const TABS = [
    {
      value: 'tab1',
      title: 'Freelancer',
      office: 'UI Engineer Co-op @ Apple',
      content: ['Freelance 1', 'Freelance 2'],
      period: 'Fev 2023 - Presente',
    },
    {
      value: 'tab2',
      title: 'Olkeey',
      office: 'Front end Olkeey',
      content: ['Item 1', 'Item 2', 'Item 3'],
      period: 'março 2022 - fev 2023',
    },
  ]
  const activeTabContent = TABS.find((tab) => tab.value === activeTab)
  return (
    <ExperienceContainer>
      <h2>About Me</h2>
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
