import { useQuery } from "react-query";
import { QueriedBlog } from "../types/blog";
import supabase from "../utils/supabase";

const fetchBlog = async (blogId: string) => {
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
    throw new Error(error.message);
  }

  if (!blog) {
    throw new Error("Blog not found");
  }

  return blog;
};

const useBlog = (blogId: string) => useQuery("blog", () => fetchBlog(blogId));

export default useBlog;
