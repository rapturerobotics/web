import type { NextPage } from "next";
import { useState } from "react";
import Blog from "../types/blog";
import supabase from "../utils/supabase";

const Home: NextPage = () => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Home;
