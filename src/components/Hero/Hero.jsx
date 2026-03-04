import s from "./Hero.module.css";

function Hero() {
  return (
    <section className={s.hero}>
      <h1>
        Hi! I'm Desirée, <br />a <span>Fullstack Developer</span> and <br />
        <span>UX Enthusiast</span>, passionate about <br />
        crafting robust and meaningful <br />
        digital experiences <br />
        that create real value for users.
      </h1>
    </section>
  );
}

export default Hero;