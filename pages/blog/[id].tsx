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
          <div className="w-full max-w-3xl p-4 pt-16 flex flex-col gap-4">
            <h1 className="text-6xl font-semibold mb-8 font-work text-center">
              {blog.title}
            </h1>

            <div className="prose prose-invert max-w-full">
              <ReactMarkdown className="w-full h-full overflow-hidden">
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
