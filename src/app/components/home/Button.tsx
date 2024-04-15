"use client";

import React from "react";
import styles from "./Button.module.scss";
import { useRouter } from "next/navigation";
const Button = ({ slug }: { slug: string }) => {
  const router = useRouter();
  return (
    <>
      <button
        className={`modalOpen ${styles.button}`}
        onClick={() => {
          router.push(`/${slug}`);
        }}
      >
        Lire la suite
      </button>
    </>
  );
};

export default Button;
