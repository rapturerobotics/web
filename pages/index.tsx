import type { NextPage } from "next";
import Carousel from "../components/Carousel";

const Home: NextPage = () => {
  return (
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
  );
};

export default Home;
