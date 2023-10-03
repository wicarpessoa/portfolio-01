import { ComponentProps, ReactNode } from 'react'
import { StackTagContainer } from './styles'

interface StackTagProps extends ComponentProps<'a'> {
  title: string
  children: ReactNode
}

export function StackTag({ children, title, ...props }: StackTagProps) {
  return (
    <StackTagContainer {...props}>
      {children}
      {title}
    </StackTagContainer>
  )
}
