import { MdMail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import s from "./SocialLinks.module.css";

function SocialLinks() {
  return (
    <div className={s.contactContainer}>
      <a href="mailto:desireestrxnd@gmail.com" aria-label="Email Desirée">
        <MdMail className={s.icon} />
      </a>

      <a
        href="https://www.linkedin.com/in/desireestrand"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
      >
        <FaLinkedin className={s.icon} />
      </a>

      <a
        href="https://github.com/desireestrand"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
      >
        <FaGithub className={s.icon} />
      </a>
    </div>
  );
}

export default SocialLinks;