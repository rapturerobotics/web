import type { NextPage } from "next";
import Head from "next/head";
import IntroductionBlock from "../components/IntroductionBlock";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rapture Robotics</title>
      </Head>

      <div className="flex justify-center">
        <div className="flex flex-col justify-between w-full max-w-5xl md:min-h-screen gap-8">
          <IntroductionBlock />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
