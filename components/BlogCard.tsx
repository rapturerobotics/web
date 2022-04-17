import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PreviewedBlog } from "../types/blog";

interface BlogCardProps {
  blog: PreviewedBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const router = useRouter();

  return (
    <Link href={`${router.asPath}/${blog.id}`} passHref={true}>
      <a className="rounded-md overflow-hidden w-full bg-gray-800 hover:bg-gray-700 group border border-gray-800 shadow-md block">
        <div
          className="w-full aspect-square bg-center bg-no-repeat bg-cover duration-100"
          style={{ backgroundImage: `url(${blog.background_image})` }}
        />

        <div className="p-4 flex flex-col gap-6 font-akshar">
          <h4 className="font-display text-gray-100 text-2xl tracking-tight">
            {blog.title}
          </h4>

          <p className="text-gray-400 text-md">{blog.description}</p>

          <div className="flex">
            {blog.tags.map((tag) => (
              <span
                className="bg-blue-700 text-gray-200 rounded-full px-2 py-1 text-sm tracking-tight lowercase hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                key={tag.id}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
