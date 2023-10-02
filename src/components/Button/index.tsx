import { ComponentProps } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  title: string
}
export function Button({ title, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{title}</ButtonContainer>
}
