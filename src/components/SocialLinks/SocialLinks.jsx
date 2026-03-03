import s from "./SocialLinks.module.css";

function SocialLinks() {
  return (
    <div className={s.contactContainer}>
      <a href="mailto:desireestrxnd@gmail.com" aria-label="Email Desirée">
        <ion-icon name="mail"></ion-icon>
      </a>

      <a
        href="https://www.linkedin.com/in/desireestrand"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
      >
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>

      <a
        href="https://github.com/desireestrand"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
      >
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </div>
  );
}

export default SocialLinks;