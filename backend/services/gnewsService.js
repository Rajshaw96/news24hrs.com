import axios from "axios";

export const fetchGNewsArticles = async (query = "Eagles") => {
  const res = await axios.get("https://gnews.io/api/v4/search", {
    params: {
      q: query,
      lang: "en",
      country: "us",
      max: 10, // how many results to get
      apikey: process.env.GNEWS_API_KEY
    }
  });
  return res.data.articles;
};
