import s from './ContactPage.module.css';

function ContactPage() {

  return (
    <>
      <div className={s.wrapper}>
        <h2>Contact me!</h2>
        <p><a href="mailto:desireestrxnd@gmail.com">E-mail</a></p>
        <p><a href="https://www.linkedin.com/in/desireestrand">LinkedIn</a></p>
      </div>
    </>
  )
}

export default ContactPage