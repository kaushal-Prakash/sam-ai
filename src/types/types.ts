interface NewsArticle {
  urlToImage: any;
  source: any;
  url: string;
  title: string;
  description?: string;
  publishedAt?: string;
  // Add other properties you expect from the API
}

export type { NewsArticle };
