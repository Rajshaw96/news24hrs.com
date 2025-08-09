import News from "../models/News.js";
import { fetchGNewsArticles } from "../services/gnewsService.js";
import { scrapeFullContent } from "../services/scrapeService.js";
import APIFeatures from "../utils/apiFeatures.js";

// Fetch & Store News from GNews
export const fetchAndStoreNews = async (req, res) => {
  try {
    const queries = req.query.q ? [req.query.q] : ["sports", "technology", "business", "world"];
    
    for (let query of queries) {
      const articles = await fetchGNewsArticles(query);

      for (let a of articles) {
        const fullContent = await scrapeFullContent(a.url);

        // ✅ Same upsert logic here
        await News.updateOne(
          { url: a.url },
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

    res.json({ message: "News fetched & stored successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All News with Filters
export const getAllNews = async (req, res) => {
  try {
    const features = new APIFeatures(News.find(), req.query)
      .filter()
      .search()
      .sort()
      .paginate();

    const news = await features.query;
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CRUD Operations
export const getNewsById = async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news) return res.status(404).json({ error: "Not found" });
  res.json(news);
};

export const updateNews = async (req, res) => {
  const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(news);
};

export const deleteNews = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: "News deleted" });
};

export const getNews = async (req, res) => {
  try {
    let { page = 1, limit = 10, sortBy = "publishedAt", sortOrder = "desc", search, category } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const skip = (page - 1) * limit;

    const query = {};
    if (category) {
      query.category = category;
    }

    // ✅ If search term exists, use text index
    let sort = { [sortBy]: sortOrder === "asc" ? 1 : -1 };
    let projection = {};

    if (search) {
      query.$text = { $search: search };
      projection = { score: { $meta: "textScore" } };
      sort = { score: { $meta: "textScore" } }; // sort by relevance
    }

    const articles = await News.find(query, projection)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await News.countDocuments(query);

    res.json({
      page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      items: articles
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


