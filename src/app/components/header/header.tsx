import "server-only";

import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = async () => {
  return (
    <>
      <header className={styles.header}>
        <figure className={styles.header__figure}>
          <Link className="link modalOpen" href="/" tabIndex={0}>
            <Image
              className={styles.header__logo}
              width={0}
              height={0}
              sizes="100vw"
              src="/assets/logo/logo3.webp"
              alt="logo tdss coaching"
              priority={true}
            />
          </Link>
          <figcaption className={styles.header__figcaption}>
            Coach de vie
          </figcaption>
        </figure>
      </header>
    </>
  );
};

export default Header;
