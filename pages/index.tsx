import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "../components/Carousel";

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

      <Carousel
        pages={[
          {
            backgroundImage:
              "https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images/rapture_uorg_2022",
            title: "Rapture Robotics",
            description:
              "We are Rapture Autonomous Underwater Systems team. Our teams consists of high school students. If you want to follow us and keep up to date with developments you can follow us in our social media accounts.",
            readMoreSource: "https://rapturerobotics.com",
          },
          {
            backgroundImage:
              "https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images/rapture_uorg_2022",
            description: "Rapture Team",
            title: "Rapture Robotics",
            readMoreSource: "https://rapturerobotics.com",
          },
        ]}
      />

      <div style={{ height: "300%" }} />
    </>
  );
};

export default Home;
