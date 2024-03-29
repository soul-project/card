import React from "react";
import NextHead from "next/head";

export default function Head({ subTitle }: Props) {
  return (
    <NextHead>
      {subTitle ? (
        <title>Soul - Card | {subTitle}</title>
      ) : (
        <title>Soul - Card</title>
      )}
      <meta name="description" content="Your social card powered by Soul" />
      <link rel="icon" href="/card-icon.svg" />
    </NextHead>
  );
}

type Props = {
  subTitle?: string;
};
