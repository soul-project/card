import React from "react";
import NextHead from "next/head";

export default function Head({ username }: Props) {
  return (
    <NextHead>
      {username ? (
        <title>Soul - Card | {username}</title>
      ) : (
        <title>Soul - Card</title>
      )}
      <meta name="description" content="Your social card powered by Soul" />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="refresh" content="1900" />
    </NextHead>
  );
}

type Props = {
  username?: string;
};
