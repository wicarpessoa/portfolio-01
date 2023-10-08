import { ComponentProps } from 'react'
import { StackTagContainer } from './styles'

interface StackTagProps extends ComponentProps<'a'> {
  title: string
}

export function StackTag({ title, ...props }: StackTagProps) {
  return <StackTagContainer {...props}>{title}</StackTagContainer>
}
