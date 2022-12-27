import Head from "next/head";
import { VStack } from "@chakra-ui/react";
import Content from "components/content";

export default function index() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack height={"100vh"} width={"full"} bg={"black"} overflow={"hidden"} spacing={0} as={"main"}>
        {/* Content */}
        <Content />

        {/* Player */}
      </VStack>
    </>
  );
}
