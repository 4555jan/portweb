import styles from './HeroStyles.module.css';
import female from '../../assets/female.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume from '../../assets/res2.pdf';
import { useTheme } from '/src/common/ThemeContext.jsx';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={female}
          className={styles.hero}
         
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          janvi
          
        </h1>
        <h2>Flutter and dart Developer</h2>
        <span>
          <a href="" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/4555jan" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern android and ios apps with single codebase
        </p>
        <a href='https://www.instagram.com/janvi_7582?igsh=MWVwcXd1czRkOTA1NQ=='>
          <button className="hover">socials</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
