import { useEffect, useState } from "react";

export const useDebounce = (query: string, delay = 300) => {
  const [debauncedQuery, setDebauncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebauncedQuery(query);
    }, delay);
    return () => clearTimeout(timer);
  }, [query, delay]);
  return debauncedQuery;
};
