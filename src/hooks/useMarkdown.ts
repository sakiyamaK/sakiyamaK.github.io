import { useState, useEffect } from 'react';

// Simple in-memory cache
const contentCache: Record<string, string> = {};

export function useMarkdown(path: string) {
  const [content, setContent] = useState<string>(contentCache[path] || '');
  const [loading, setLoading] = useState<boolean>(!contentCache[path]);

  useEffect(() => {
    // In development mode, skip cache to reflect edits immediately
    const isDev = import.meta.env.DEV;

    // If we have content in cache (and not in dev mode), update state immediately and stop
    if (!isDev && contentCache[path]) {
      setContent(contentCache[path]);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        return res.text();
      })
      .then(text => {
        contentCache[path] = text; // Save to cache
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        const errorMsg = '# Error\nFailed to load content.';
        // We generally don't cache errors to allow retry,
        // but for display purposes we might show the error.
        setContent(errorMsg);
        setLoading(false);
      });
  }, [path]);

  return { content, loading };
}

// Function to prefetch multiple paths
export function prefetchMarkdown(paths: string[]) {
  paths.forEach(path => {
    if (!contentCache[path]) {
      fetch(path)
        .then(res => res.ok ? res.text() : null)
        .then(text => {
          if (text) contentCache[path] = text;
        })
        .catch(() => {});
    }
  });
}
