import axios from "axios";

export const DEFAULT_SEARCH_VALUE = "react";

export const searchRepositories = (input, page = 1, perPage = 20) => {
  const queryTerm = `q=` + encodeURIComponent(input);
  const queryPerPage = `&per_page=${perPage}`;
  const queryPage = `&page=${page}`;
  const queryString = queryTerm + queryPerPage + queryPage;

  const url = `https://api.github.com/search/repositories?${queryString}`;

  return axios.get(url);
};
