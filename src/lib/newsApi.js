// lib/newsApi.js
export async function fetchTodayNews(query) {
  const today = new Date().toISOString().split('T')[0];
  // console.log(today);
  
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  
  const url = `https://newsapi.org/v2/everything?q=${query}&from=2025-08-05&to=${today}&sortBy=popularity&apiKey=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();
  // console.log("NEW API DATA", data);
  

  if (data.status !== 'ok') {
    throw new Error('News fetch failed');
  }

  return data.articles;
}
