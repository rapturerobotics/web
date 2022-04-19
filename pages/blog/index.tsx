import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import supabase from "../../utils/supabase";
import { PreviewedBlog } from "../../types/blog";
import BlogCard from "../../components/BlogCard";

const BlogHomePage: NextPage = () => {
  const [blogs, setBlogs] = useState<Array<PreviewedBlog>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data: blogs, error } = await supabase.from<PreviewedBlog>("blogs")
      .select(`
        id, created_at, title, description, background_image,
        author ( id, name ), tags ( id, label )
      `);

    if (error) {
      console.error(error);
      return;
    }

    if (blogs) {
      setBlogs(blogs);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Head>
        <title>Rapture Blog</title>
      </Head>

      <div className="w-full max-w-5xl p-4 pt-16 flex flex-col gap-4">
        <h1 className="text-6xl font-semibold mb-8 font-work">Rapture Blog</h1>

        {loading ? (
          <></>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogHomePage;
