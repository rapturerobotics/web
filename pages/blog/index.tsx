import { NextPage } from "next";
import Head from "next/head";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import useBlogs from "../../hooks/useBlogs";

const BlogHomePage: NextPage = () => {
  const { data: blogs, isLoading } = useBlogs();

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Head>
        <title>Rapture Blog</title>
      </Head>

      <div className="w-full max-w-5xl p-4 pt-16 flex flex-col gap-4">
        <Header1>Rapture Blog</Header1>

        {isLoading ? (
          <></>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs?.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogHomePage;
