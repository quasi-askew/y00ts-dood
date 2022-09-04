import { Center } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Switcher from "../components/Switcher";

export default function Home() {
  return (
    <div>
      <Head>
        <title>y00ts are culture</title>
        <meta name="description" content="y00ts are culture" />
        <meta property="og:image" content="/images/y00ts_banner.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Switcher
          y00tText={"y00ts are culture"}
          y00t={"y00t"}
          y00tDesc={"y00t got that zeitgeist"}
        />
      </main>
    </div>
  );
}
