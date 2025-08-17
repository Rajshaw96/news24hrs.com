import cron from "node-cron";
import { fetchGNewsArticles } from "./gnewsService.js";
import { scrapeFullContent } from "./scrapeService.js";
import News from "../models/News.js";

// Categories you want to fetch daily
const queries = ["sports", "technology", "business", "world", "entertainment", "health"];

cron.schedule("0 0 * * *", async () => {
  console.log("🕛 Running daily news fetch job...");

  try {
    for (let query of queries) {
      console.log(`📡 Fetching news for category: ${query}`);

      const articles = await fetchGNewsArticles(query);

      for (let a of articles) {
        const fullContent = await scrapeFullContent(a.url);

        // ✅ Upsert to avoid duplicates
        await News.updateOne(
          { url: a.url }, // match by URL
          {
            $setOnInsert: {
              title: a.title,
              description: a.description,
              content: fullContent,
              image: a.image,
              publishedAt: a.publishedAt,
              source: a.source,
              category: query 
            }
          },
          { upsert: true }
        );
      }
    }

    console.log("✅ Daily news fetch completed and stored.");
  } catch (error) {
    console.error("❌ Error in daily news fetch job:", error.message);
  }
});
