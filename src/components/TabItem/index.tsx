import { motion } from 'framer-motion'
import { TabItemContainer } from './styles'
import { ComponentProps } from 'react'
interface TabItemProps extends ComponentProps<'div'> {
  isSelected?: boolean
  title: string
  value: string
}

export function TabItem({ isSelected = false, title, ...props }: TabItemProps) {
  return (
    <TabItemContainer {...props}>
      <span>{title}</span>

      {isSelected && <motion.div layoutId="activeTab" />}
    </TabItemContainer>
  )
}
