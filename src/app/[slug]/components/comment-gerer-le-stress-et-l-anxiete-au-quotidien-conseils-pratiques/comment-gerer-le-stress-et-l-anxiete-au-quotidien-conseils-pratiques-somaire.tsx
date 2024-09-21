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
        <Link href={`/${slug}#introduction`}>Introduction</Link>
      </li>
      <li>
        <Link href={`/${slug}#pratiqueRespiration`}>
          Pratique de la respiration profonde et de la relaxation
        </Link>
      </li>
      <li>
        <Link href={`/${slug}#gestionDuTemps`}>
          Gestion du temps et des priorités
        </Link>
      </li>
      <li>
        <Link href={`/${slug}#pratiqueExercice`}>
          Pratique de l&#39;exercice physique régulier
        </Link>
      </li>
      <li>
        <Link href={`/${slug}#pratiqueDeLalimentation`}>
          Gestion de l&#39;alimentation et de l&#39;hydratation
        </Link>
      </li>
      <li>
        <Link href={`/${slug}#pratiqueDeLaPleine`}>
          Pratique de la pleine conscience
        </Link>
      </li>
      <li>
        <Link href={`/${slug}#conclusion`}>Conclusion</Link>
      </li>
    </ul>
  );
};

export default CommentGererLeStressEtLanxieteAuQuotidienConseilsPratiquesSomaire;
