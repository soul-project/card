import React from "react";
import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      {/* TODO: Put name of person logged in */}
      <title>Soul - Card</title>
      <meta name="description" content="Your social card powered by Soul" />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="refresh" content="1900" />
    </NextHead>
  );
}
