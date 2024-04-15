import Link from "next/link";
import React from "react";
import styles from "../../page.module.scss";

const CommentGererLeStressEtLanxieteAuQuotidienConseilsPratiquesSomaire = ({
  slug,
}: {
  slug: string;
}) => {
  return (
    <ul className={styles.article__container__right__sommaire__ul}>
      <li>
        <Link href={`/${slug}#developpement`}>Introduction</Link>
      </li>
      <li>
        <Link href={""}>Développement</Link>
      </li>
      <li>
        <Link href={""}>Gestion du temps et des priorités</Link>
      </li>
      <li>
        <Link href={""}>Pratique de l&#39;exercice physique régulier</Link>
      </li>
      <li>
        <Link href={""}>
          Gestion de l&#39;alimentation et de l&#39;hydratation
        </Link>
      </li>
      <li>
        <Link href={""}>Pratique de la pleine conscience</Link>
      </li>
      <li>
        <Link href={""}>Conclusion</Link>
      </li>
    </ul>
  );
};

export default CommentGererLeStressEtLanxieteAuQuotidienConseilsPratiquesSomaire;
