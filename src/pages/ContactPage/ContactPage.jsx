import s from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div className={s.wrapper}>
      <h2>Contact me!</h2>
      <div className={s.links}>
        <p>
          <span>E-mail:</span>
          <a href="mailto:desireestrxnd@gmail.com">desireestrxnd@gmail.com</a>
        </p>
        <p>
          <span>LinkedIn:</span>
          <a href="https://www.linkedin.com/in/desireestrand" target="_blank" rel="noreferrer">Desirée Strand</a>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;