import { useState, useMemo, useCallback } from "react";
import type { BlogPost } from "../lib/blog";

export function useTagFilter(posts: BlogPost[]) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  const handleSelectTag = useCallback((tag: string | null) => {
    setSelectedTag(tag);
  }, []);

  const clearTag = useCallback(() => {
    setSelectedTag(null);
  }, []);

  return {
    selectedTag,
    filteredPosts,
    handleSelectTag,
    clearTag,
    hasFilter: selectedTag !== null,
  };
}
