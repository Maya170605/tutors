import { useMemo } from 'react';

export const useItems = (items, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort == 'title') {
      return [...items].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else if (sort == 'price') {
      return [...items].sort((a, b) => a[sort] - b[sort]);
    }
    return items;
  }, [sort, items]);
  return sortedPosts;
};
