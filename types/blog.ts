import Author from "./author";
import Tag from "./tag";

type Blog = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  content: string;
  background_image: string;
  author: string;
};

export type PreviewedBlog = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  background_image: string;
  author: Author;
  tags: Array<Tag>;
};

export type QueriedBlog = Blog & {
  author: Author;
  tags: Array<Tag>;
};

export default Blog;
