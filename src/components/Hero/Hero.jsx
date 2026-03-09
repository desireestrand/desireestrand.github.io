import s from "./Hero.module.css";

function Hero() {
  return (
    <section className={s.hero}>
      <h1>
        Hi! I'm Desirée, a <span>Fullstack Developer</span> and <br />
        <span>UX/UI Designer</span>, passionate about
        crafting robust and meaningful
        digital experiences
        that create real value for users.
      </h1>
    </section>
  );
}

export default Hero;