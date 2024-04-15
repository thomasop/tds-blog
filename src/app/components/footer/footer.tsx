import Link from "next/link";
import styles from "./footer.module.scss";
import GoTop from "../goTop/goTop";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <h2 className={styles.footer__h2}>Nous retrouver</h2>
        <ul className={`${styles.footer__ul} ${styles.footer__ul__lineHeight}`}>
          <li className={styles.footer__li}>
            Mail :{" "}
            <Link
              className={`${styles.footer__a} modalOpen`}
              href="mailto:contact@tds-coachingdevie.fr"
            >
              contact@tds-coachingdevie.fr
            </Link>
          </li>
          <li className={styles.footer__li}>
            Tel :{" "}
            <Link
              className={`${styles.footer__a} modalOpen`}
              href="tel:+33781673125"
            >
              {" "}
              07 81 67 31 25
            </Link>
          </li>
          <li className={styles.footer__li}>
            Horaire : 8h - 20h du lundi au vendredi
          </li>
          <li className={styles.footer__li}>
            <strong className={styles.footer__strong}>Bordeaux</strong>,{" "}
            <strong className={styles.footer__strong}>Chambery</strong>,{" "}
            <strong className={styles.footer__strong}>Lyon</strong>
          </li>
        </ul>
        <GoTop />
      </section>
    </footer>
  );
};

export default Footer;
