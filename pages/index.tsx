import type { NextPage } from "next";
import Head from "next/head";
import HeaderBlock from "../components/HeaderBlock";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rapture Robotics</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images/rapture_logo_transparent_1024x1024.png"
        />
      </Head>

      <HeaderBlock backgroundImage="https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images/rapture_uorg_2022">
        <h2 className="text-white text-6xl font-bold">Rapture ASV ROV</h2>
        <p className="text-gray-300 text-lg">
          We are Rapture Autonomous Underwater Systems team. Our team consists
          of high school students. If you want to follow us and keep up to date
          with developments you can follow us in our social media accounts.
        </p>
        <a
          className="text-white p-2 px-6 border-2 rounded-sm uppercase transition-colors duration-200 hover:bg-white hover:text-black"
          href="https://rapturerobotics.com"
        >
          Read More
        </a>
      </HeaderBlock>

      <div
        className="h-[400%]"
        style={{ backgroundImage: "linear-gradient(#aaf, #228)" }}
      />
    </>
  );
};

export default Home;
