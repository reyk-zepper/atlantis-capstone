import { useState, useEffect } from "react";

const useMedia = (queries, values, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const mediaQueryLists = queries.map((q) => window.matchMedia(q));
    const getValue = () => {
      const index = mediaQueryLists.findIndex((mql) => mql.matches);
      return typeof values[index] !== "undefined"
        ? values[index]
        : defaultValue;
    };
    const handler = () => setValue(getValue);

    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    setValue(getValue());

    return () => {
      mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};

export default useMedia;
