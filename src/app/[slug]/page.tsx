import "server-only";

import React from "react";
import prisma from "../../../lib/prisma";
import styles from "./page.module.scss";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import localFont from "next/font/local";
import CommentGererLeStressEtLanxieteAuQuotidienConseilsPratiques from "./components/comment-gerer-le-stress-et-l-anxiete-au-quotidien-conseils-pratiques/comment-gerer-le-stress-et-l-anxiete-au-quotidien-conseils-pratiques";
import CommentGererLeStressEtLanxieteAuQuotidienConseilsPratiquesSomaire from "./components/comment-gerer-le-stress-et-l-anxiete-au-quotidien-conseils-pratiques/comment-gerer-le-stress-et-l-anxiete-au-quotidien-conseils-pratiques-somaire";
const Parisienne = localFont({
  src: "../Parisienne-Regular.ttf",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const oneData: any = await getOne({ slug: params.slug });
  return {
    title: oneData.title,
    description: oneData.description,
    keywords:
      "Développement personnel, Coaching professionnel, Relation de couple, Communication, Équilibre vie professionnelle-vie personnelle, Confiance en soi, Gestion du stress",
    author: "Thierry Da Silva",
    icons: {
      icon: "https://www.tdscoaching.fr/assets/logo/logo3.webp",
    },
    robots: "index, follow",
    other: {
      "google-site-verification": "Y4xZukc_t4Ow9fnxrPprO_4tGLfVZv972xeGF6znJNw",
    },
  };
}

async function getOne({ slug }: { slug: string }) {
  const article = await prisma.article.findUnique({
    where: { slug: slug },
  });
  return article;
}

async function getLast() {
  const article = await prisma.article.findMany({
    where: {
      slug: {
        not: "comment-gerer-le-stress-et-l-anxiete-au-quotidien-conseils-pratiques",
      },
    },
    orderBy: { created_at: "desc" },
    take: 10,
  });
  return article;
}

export default async function page({ params }: { params: { slug: string } }) {
  const oneData: any = await getOne({ slug: params.slug });
  const lastData = await getLast();
  if (!oneData) {
    redirect("/");
  }
  return (
    <>
      <main className={styles.article}>
        <div className={styles.article__banner}>
          <Image
            className={styles.article__banner__img}
            src={`/assets/img/${oneData?.image}`}
            alt={oneData?.title}
            width={0}
            height={0}
            sizes={"100vw"}
          />
          <h1
            className={`${styles.article__banner__h1} ${Parisienne.className}`}
          >
            {oneData?.title}
          </h1>
        </div>
        <div id="introduction" className={styles.article__container}>
          <div className={styles.article__container__left}>
            <Link className={styles.article__container__left__link} href={"/"}>
              Retour vers les articles
            </Link>
            <p className={styles.article__container__left__author}>
              Ecrit par Thierry DA SILVA le{" "}
              <time title="August 28th, 2011">
                {oneData?.created_at.toLocaleString("FR-fr", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            <p className={styles.article__container__left__desc}>
              {oneData?.description}
            </p>
            {oneData?.slug ===
              "comment-gerer-le-stress-et-l-anxiete-au-quotidien-conseils-pratiques" && (
              <CommentGererLeStressEtLanxieteAuQuotidienConseilsPratiques />
            )}
          </div>

          <div className={styles.article__container__right}>
            <div className={styles.article__container__right__sommaire}>
              <h2
                className={`${styles.article__container__right__sommaire__title} ${Parisienne.className}`}
              >
                Sommaire
              </h2>
              {oneData?.slug ===
                "comment-gerer-le-stress-et-l-anxiete-au-quotidien-conseils-pratiques" && (
                <CommentGererLeStressEtLanxieteAuQuotidienConseilsPratiquesSomaire
                  slug={oneData?.slug}
                />
              )}
            </div>
            <div className={styles.article__container__right__about}>
              <h2
                className={`${styles.article__container__right__about__title} ${Parisienne.className}`}
              >
                A propos de l&apos;auteur
              </h2>
              <div
                style={{ textAlign: "center" }}
                className={styles.article__container__right__about__author}
              >
                <Image
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                  className={
                    styles.article__container__right__about__author__img
                  }
                  src="/assets/img/moi.webp"
                  alt="Thierry DA SILVA"
                  width={0}
                  height={0}
                  sizes={"100vw"}
                />
                <p
                  className={
                    styles.article__container__right__about__author__desc
                  }
                >
                  Thierry DA SILVA est un passionné de la santé et du bien-être.
                  Il partage ses conseils et astuces pour une vie plus saine et
                  équilibrée.
                </p>
                <Link
                  className={
                    styles.article__container__right__about__author__link
                  }
                  href={"https://www.tdscoaching.fr"}
                >
                  https://www.tdscoaching.fr
                </Link>
              </div>
            </div>
            <div className={styles.article__container__right__last}>
              <h2
                className={`${styles.article__container__right__last__title} ${Parisienne.className}`}
              >
                Les derniers articles
              </h2>

              <div className={styles.article__container__right__last__content}>
                {lastData &&
                  lastData.map((e, index) => {
                    return (
                      <Link
                        className={
                          styles.article__container__right__last__content__link
                        }
                        key={index}
                        href={`/${e.slug}`}
                      >
                        {e.title}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
