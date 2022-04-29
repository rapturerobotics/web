import { useQuery } from "react-query";
import supabase from "../utils/supabase";
import Sponsor from "../types/sponsor";

const fetchSponsors = async () => {
  const { data: sponsors, error } = await supabase
    .from<Sponsor>("sponsors")
    .select();

  if (error) {
    throw new Error(error.message);
  }

  if (!sponsors) {
    throw new Error("Sponsors not found");
  }

  return sponsors;
};

const useSponsors = () => useQuery("sponsors", fetchSponsors);

export default useSponsors;
