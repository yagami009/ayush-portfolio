import { useState, useMemo, useCallback } from "react";
import Fuse from "fuse.js";
import type { BlogPost } from "../lib/blog";

const fuseOptions = {
  keys: [
    { name: "title", weight: 0.4 },
    { name: "excerpt", weight: 0.3 },
    { name: "content", weight: 0.2 },
    { name: "tags", weight: 0.1 },
  ],
  threshold: 0.3,
  includeScore: true,
};

export function useBlogSearch(posts: BlogPost[]) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(() => {
    return new Fuse(posts, fuseOptions);
  }, [posts]);

  const results = useMemo(() => {
    if (!query.trim()) return posts;
    return fuse.search(query).map((result) => result.item);
  }, [fuse, query, posts]);

  const handleSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
  }, []);

  const clearSearch = useCallback(() => {
    setQuery("");
  }, []);

  return {
    query,
    results,
    handleSearch,
    clearSearch,
    hasResults: results.length > 0,
  };
}
