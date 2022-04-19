import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { QueriedBlog } from "../../types/blog";
import supabase from "../../utils/supabase";

const BlogPostPage = () => {
  const router = useRouter();
  const blogId = router.query.id as string;

  const [blog, setBlog] = useState<QueriedBlog | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    const { data: blog, error } = await supabase
      .from<QueriedBlog>("blogs")
      .select(
        `
        id, created_at, title,description, content, background_image,
        author ( id, name ), tags ( id, label )
        `
      )
      .eq("id", blogId)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    if (blog) {
      setBlog(blog);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  if (loading || !blog) {
    return <></>;
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Head>
        <title>{blog.title}</title>
      </Head>

      <div className="w-full max-w-3xl p-4 pt-16 flex flex-col gap-4">
        <h1 className="text-6xl font-semibold mb-8 font-work text-center">
          {blog.title}
        </h1>

        <div className="prose prose-invert max-w-full">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
