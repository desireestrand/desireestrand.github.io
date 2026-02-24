import SocialLinks from "../SocialLinks/SocialLinks"
import s from './Footer.module.css'

function Footer() {

  return (
    <>
      <div className={s.footer}>
        <SocialLinks />
        <p>2026 © Desirée Strand</p>
      </div>
    </>
  )
}

export default Footer