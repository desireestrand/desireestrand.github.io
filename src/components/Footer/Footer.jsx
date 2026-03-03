import SocialLinks from "../SocialLinks/SocialLinks";
import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <SocialLinks />
      <p>2026 © Desirée Strand</p>
    </footer>
  );
}

export default Footer;