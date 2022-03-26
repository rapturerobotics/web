import { createClient } from "@supabase/supabase-js";

const supabase = (() => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

  if (supabaseUrl === undefined || supabaseKey === undefined) {
    throw "Couldn't read supabase auth credentials";
  }

  return createClient(supabaseUrl, supabaseKey);
})();

export default supabase;
