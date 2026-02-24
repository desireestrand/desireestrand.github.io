import s from './SocialLinks.module.css'

function SocialLinks() {

  return (
    <>
    <div className={s.contactcontainer}>
      <a href="mailto:desireestrxnd@gmail.com"><ion-icon name="mail"></ion-icon></a>
      <a href="https://www.linkedin.com/in/desir%C3%A9e-strand-a9ab7b159"><ion-icon name="logo-linkedin"></ion-icon></a>
      <a href="https://github.com/desireestrand"><ion-icon name="logo-github"></ion-icon></a>
    </div>
    </>
  )
}

export default SocialLinks