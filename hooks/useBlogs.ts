import { useQuery } from "react-query";
import { PreviewedBlog } from "../types/blog";
import supabase from "../utils/supabase";

const fetchBlogs = async () => {
  const { data: blogs, error } = await supabase.from<PreviewedBlog>("blogs")
    .select(`
      id, created_at, title, description, background_image,
      author ( id, name ), tags ( id, label )
    `);

  if (error) {
    throw new Error(error.message);
  }

  if (!blogs) {
    throw new Error("Blogs not found");
  }

  return blogs;
};

const useBlogs = () => useQuery("blogs", fetchBlogs);

export default useBlogs;
