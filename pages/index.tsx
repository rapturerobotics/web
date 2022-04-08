import { Button, Card, List, ListItem, Text } from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import Blog from "../types/blog";
import supabase from "../utils/supabase";

const shorten = (str: string, len: number) =>
  str.length > len ? str.slice(0, len) + "..." : str;

interface BlogCardParams {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardParams> = ({ blog }) => {
  return (
    <Card shadow="lg" p="lg" m="md">
      <Text weight={500}>{blog.title}</Text>
      <Text size="sm">{shorten(blog.content, 100)}</Text>
    </Card>
  );
};

const Home: NextPage = () => {
  const [blogs, setBlogs] = useState<Array<Blog>>([]);

  const handleClick = async () => {
    const { data, error } = await supabase.from<Blog>("blog").select();
    console.log(data);
    if (error) console.error(error);
    setBlogs(data ?? []);
  };

  return (
    <>
      <Button onClick={handleClick}>Fetch blogs</Button>

      <List>
        {blogs?.map((blog) => (
          <ListItem key={blog.id} icon={<div />}>
            <BlogCard blog={blog} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Home;
