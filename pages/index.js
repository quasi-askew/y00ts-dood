import { Center } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Switcher from "../components/Switcher";

export default function Home() {
  return (
    <div>
      <Head>
        <title>y00ts culture</title>
        <meta name="description" content="y00ts culture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Switcher
          y00tText={"y00ts culture"}
          y00t={"y00t"}
          y00tDesc={"y00t culture"}
        />
      </main>
    </div>
  );
}
