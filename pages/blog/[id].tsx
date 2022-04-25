import Head from "next/head";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";
import useBlog from "../../hooks/useBlog";

const BlogPostPage = () => {
  const router = useRouter();
  const blogId = router.query.id as string | undefined;
  const { data: blog, isLoading } = useBlog(blogId);

  if (isLoading || !blog) {
    return <></>;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <Head>
        <title>{blog.title}</title>
      </Head>

      <div className="w-full flex flex-col items-center min-h-screen">
        <div
          className="w-full h-[33vh] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${blog.background_image})` }}
        />

        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-5xl p-4 pt-16 flex flex-col gap-4">
            <div className="text-center flex flex-col gap-2 mb-8">
              <h1 className="text-6xl font-semibold font-work">{blog.title}</h1>

              <p className="text-slate-400">
                By <span className="text-slate-200">{blog.author.name}</span> at{" "}
                <span>{blog.created_at.toDateString()}</span>
              </p>
            </div>

            <div className="prose prose-invert max-w-full">
              <ReactMarkdown className="w-full h-full overflow-hidden text-lg">
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
