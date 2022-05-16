import { NextPage } from "next";
import Head from "next/head";
import BlogCard from "../../components/BlogCard";
import Title from "../../components/Title";
import LoadingIndicator from "../../components/LoadingIndicator";
import useBlogs from "../../hooks/useBlogs";
import Container from "../../components/Container";

const BlogHomePage: NextPage = () => {
  const { data: blogs, isLoading } = useBlogs();

  return (
    <>
      <Head>
        <title>Rapture Blog</title>
      </Head>

      <Container contentPadding>
        <Title>Rapture Blog</Title>
        {isLoading ? (
          <div className="w-full h-64 flex items-center justify-center">
            <LoadingIndicator />
          </div>
        ) : (
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs?.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </section>
        )}
      </Container>
    </>
  );
};

export default BlogHomePage;
