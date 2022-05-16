import { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";
import Title from "../components/Title";
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

      <Container contentPadding>
        <Title>Sponsors</Title>

        <p className="text-lg">
          We couldn&apos;t have done it without your support. Thanks to all of
          you!
        </p>

        {isLoading || !sponsors ? (
          <LoadingIndicator />
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full pt-16"
            style={{ gridAutoRows: "1fr" }}
          >
            {sponsors.map((sponsor) => (
              <SponsorCard sponsor={sponsor} key={sponsor.id} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default SponsorsPage;
