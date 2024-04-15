import Image from "next/image";
import prisma from "../../lib/prisma";
import Paragraph from "./components/home/Paragraph";
import Button from "./components/home/Button";
import ImageArticle from "./components/home/ImageArticle";
import styles from "./page.module.scss";
import Link from "next/link";
import localFont from "next/font/local";
const Parisienne = localFont({
  src: "./Parisienne-Regular.ttf",
  display: "swap",
});

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
            Derniers articles
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
