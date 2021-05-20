import api from "./api";

import _ from "lodash";

export const getBooks = async () => {
  const books = await api.get("/books");
  const authors = await api.get("authors");
  const merged = books.data.map((e) => {
    const a = _.find(authors.data, { id: e.authorId });
    const date = new Date(e.publishedOn * 1000);
    return {
      ...e,
      publishedOn: date.toLocaleDateString("en-US"),
      author: a,
    };
  });
  return merged;
};
