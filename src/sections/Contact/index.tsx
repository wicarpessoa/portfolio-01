import { FormEvent, useRef } from 'react'
import { ContactContainer } from './styles'
import emailjs from '@emailjs/browser'
export function Contact() {
  const form = useRef<HTMLFormElement>(null)

  function sendEmail(e: FormEvent) {
    e.preventDefault()
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.EMAILJS_SERVICE_ID,
          import.meta.env.EMAILJS_PUBLIC_KEY,
          form.current,
          import.meta.env.EMAILJS_PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log(result.text)
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
    <ContactContainer id="contact">
      <h2>Contato</h2>
      <form ref={form} action="" onSubmit={sendEmail}>
        <label htmlFor="">Full Name</label>
        <input type="email" name="user_name" placeholder="" required />
        <label>Email</label>
        <input type="text" name="user_email" placeholder="" required />
        <label>Subject</label>
        <input type="text" placeholder="" required />
        <label htmlFor="">mensagem</label>
        <textarea required cols={30} rows={10} />
        <button>Send Message</button>
      </form>
      <div></div>
      <button>wpp</button>
    </ContactContainer>
  )
}
