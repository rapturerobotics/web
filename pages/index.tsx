import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rapture Robotics</title>
      </Head>

      <div className="flex justify-center">
        <div className="flex flex-col justify-between w-full max-w-5xl pt-16 p-8 md:min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <h1 className="text-7xl font-semibold mb-8 font-work">
                Rapture Robotics
              </h1>

              <p className="text-lg font-akshar">
                We are an Autonomous Surface and Underwater Systems team of
                future engineers. Stay tune for the updates!
              </p>
            </div>

            <img
              src="https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images/rapture_logo_transparent_1024x1024.png"
              className="animate-pulse p-8"
            />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
