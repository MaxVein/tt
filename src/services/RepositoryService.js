import axios from "axios";

export const DEFAULT_SEARCH_VALUE = "react";

export const searchRepositories = async (input, page = 1, perPage = 20) => {
  const queryTerm = `q=` + encodeURIComponent(input);
  const queryPerPage = `&per_page=${perPage}`;
  const queryPage = `&page=${page}`;
  const queryString = queryTerm + queryPerPage + queryPage;

  let url = `https://api.github.com/search/repositories?${queryString}`;

  return await axios.get(url).then((res) => res.data);
};
