import { FormEvent, useRef } from 'react'
import { ContactContainer } from './styles'
import emailjs from '@emailjs/browser'
import {
  staggeredAnimation,
  useIsOnScreenOnce,
} from '../../hooks/useIsOnScreenOnce'
import { Button } from '../../components/Button'
export function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const ref = useRef<HTMLDivElement | null>(null)
  const onScreen = useIsOnScreenOnce(ref, 0.5)

  function sendEmail(e: FormEvent) {
    e.preventDefault()
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log(result.text)
            form.current!.reset()
          },
          (error) => {
            console.log(error.text)
          },
        )
    } else {
      console.error('Form ref is NULL')
    }
  }
  return (
    <ContactContainer
      id="contato"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? 'visible' : 'hidden'}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <h2>Contato</h2>
      <h3>Por Email:</h3>
      <form ref={form} action="" onSubmit={sendEmail}>
        <label htmlFor="user_name">Nome</label>
        <input
          type="text"
          name="user_name"
          placeholder="Digite seu nome..."
          required
        />
        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Digite seu email..."
          required
        />
        <label htmlFor="subject">Assunto</label>
        <input
          type="text"
          placeholder="Digite o assunto..."
          name="subject"
          required
        />
        <label htmlFor="message">Mensagem</label>
        <textarea
          required
          cols={30}
          rows={10}
          placeholder="Me envie uma mensagem..."
          name="message"
        />
        <Button title="Mandar email" />
      </form>
      <div>ou</div>
      <h3>Por Whatsapp:</h3>
      <a href="https://w.app/v5Urfw">
        <Button title="Whatsapp" />
      </a>
    </ContactContainer>
  )
}
