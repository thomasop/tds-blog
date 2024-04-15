"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

const ImageArticle = ({ name }: any) => {
  return (
    <CldImage
      style={{
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px",
      }}
      width="0"
      height="0"
      sizes="100vw"
      src={`${name}`}
      alt="Description of my image"
    />
  );
};

export default ImageArticle;
