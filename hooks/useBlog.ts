import { useQuery } from "react-query";
import { ObjectedBlog, QueriedBlog } from "../types/blog";
import supabase from "../utils/supabase";

const fetchBlog = async (blogId: string | undefined) => {
  if (!blogId) return;

  const { data: blog, error } = await supabase
    .from<QueriedBlog>("blogs")
    .select(
      `
      id, created_at, title, description, content, background_image,
      author ( id, name ), tags ( id, label )
      `
    )
    .eq("id", blogId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  if (!blog) {
    throw new Error("Blog not found");
  }

  const objectedBlog: ObjectedBlog = {
    ...blog,
    created_at: new Date(blog.created_at),
  };

  return objectedBlog;
};

const useBlog = (blogId: string | undefined) =>
  useQuery("blog", () => fetchBlog(blogId));

export default useBlog;
