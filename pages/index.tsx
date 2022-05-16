import type { NextPage } from "next";
import Head from "next/head";
import IntroductionBlock from "../components/IntroductionBlock";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rapture Robotics</title>
      </Head>

      <Container contentPadding>
        <IntroductionBlock />
      </Container>
    </>
  );
};

export default Home;
