import s from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Let's connect!</h2>
      <p className={s.subtitle}>
        I'm currently open for new opportunities and collaborations.
      </p>

      <div className={s.container}>
        <a href="mailto:desireestrxnd@gmail.com" className={s.card}>
          <span className={s.label}>E-mail</span>
          <span className={s.value}>desireestrxnd@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/desireestrand" target="_blank" rel="noreferrer" className={s.card}>
          <span className={s.label}>LinkedIn</span>
          <span className={s.value}>Desirée Strand</span>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
