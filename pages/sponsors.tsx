import { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import LoadingIndicator from "../components/LoadingIndicator";
import SponsorCard from "../components/SponsorCard";
import useSponsors from "../hooks/useSponsors";

const SponsorsPage: NextPage = () => {
  const { data: sponsors, isLoading } = useSponsors();

  return (
    <>
      <Head>
        <title>Rapture Sponsors</title>
      </Head>

      <Container>
        <Header1>Sponsors</Header1>

        <p className="text-lg">
          We couldn&apos;t have done it without your support. Thanks to all of
          you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-16">
          {isLoading || !sponsors ? (
            <LoadingIndicator />
          ) : (
            sponsors.map((sponsor) => (
              <SponsorCard sponsor={sponsor} key={sponsor.id} />
            ))
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default SponsorsPage;
