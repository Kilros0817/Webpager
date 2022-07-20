import { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { checkDayNight } from "../components/statics/DarkThemeSwitch";

export default function Document() {
  return (
    <Html className={checkDayNight() ? "" : "dark"}>
      <Head>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/assets/logo.svg" />
        <title>CODEVS</title>
      </Head>
      <body className="bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
