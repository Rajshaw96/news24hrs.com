import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeFullContent = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    return $("p").map((_, el) => $(el).text()).get().join("\n");
  } catch (err) {
    return "Could not fetch full content";
  }
};
