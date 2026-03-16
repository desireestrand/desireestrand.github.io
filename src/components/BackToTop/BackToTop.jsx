import { useState, useEffect } from "react";
import s from "./BackToTop.module.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={s.backToTop}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={s.button}
          aria-label="Back to top"
        >
          <ion-icon name="arrow-up" part="icon"></ion-icon>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
