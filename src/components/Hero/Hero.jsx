import s from './Hero.module.css'

function Hero() {

  return (
    <>
      <div className={s.hero}>
        <h2>
            Hi! I'm Desirée, <br />
            a <span>Fullstack Developer</span> and <br />
            <span>UX enthusiast</span>, passionate about <br />
            crafting robust and meaningful <br />
            digital experiences <br />
            that create real value for users.
        </h2>
      </div>
    </>
  )
}

export default Hero