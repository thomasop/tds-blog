import "server-only";

import Image from "next/image";
import prisma from "../../lib/prisma";
import Paragraph from "./components/home/Paragraph";
import Button from "./components/home/Button";
import styles from "./page.module.scss";
import localFont from "next/font/local";
const Parisienne = localFont({
  src: "./Parisienne-Regular.ttf",
  display: "swap",
});

export const metadata = {
  title: "Tous les articles - tdscoaching",
  description:
    "Retrouvez tous les articles de Thierry Da Silva, coach de vie, sur le développement personnel, le coaching professionnel, la relation de couple, la communication, l'équilibre vie professionnelle-vie personnelle, la confiance en soi et la gestion du stress.",
  icons: {
    icon: "https://www.tdscoaching.fr/assets/logo/logo3.webp",
  },
  keywords:
    "Développement personnel, Coaching professionnel, Relation de couple, Communication, Équilibre vie professionnelle-vie personnelle, Confiance en soi, Gestion du stress",
  author: "Thierry Da Silva",
  robots: "index, follow",
  other: {
    "google-site-verification": "Y4xZukc_t4Ow9fnxrPprO_4tGLfVZv972xeGF6znJNw",
  },
};

async function getData() {
  const getArticleData = await prisma.article.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      image: true,
    },
  });
  return getArticleData;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className={styles.home}>
      <section className={styles.home__article}>
        <div className={styles.home__article__container}>
          <h2
            className={`${styles.home__article__container__h2} ${Parisienne.className}`}
          >
            Tous les articles
          </h2>

          <div className={styles.home__article__container__content}>
            {data &&
              data.map((e, index) => {
                return (
                  <div
                    key={index}
                    className={styles.home__article__container__content__card}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      src={`/assets/img/${e.image}`}
                      width="0"
                      height="0"
                      sizes="100vw"
                      alt="Description of my image"
                    />
                    <div
                      className={
                        styles.home__article__container__content__card__div
                      }
                    >
                      <h2
                        className={`${styles.home__article__container__content__card__div__h2} ${Parisienne.className}`}
                      >
                        {e.title}
                      </h2>
                      <Paragraph content={e.description} />
                      <Button slug={e.slug} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
