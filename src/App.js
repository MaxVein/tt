import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Wrapper, SearchInput, List } from "./styles/index";
import ListItemComponent from "./components/ListItem";
import PaginationComponent from "./components/Pagination";
import { getRepositories } from "./store/reposSlice";
import { DEFAULT_SEARCH_VALUE } from "./services/RepositoryService";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.repos.loading);
  const { total_count, items: repos } = useSelector(
    (state) => state.repos.data
  );
  const pages = Array.from({ length: total_count / 20 }, (_, i) => i + 1);
  const [inputValue, setInputValue] = useState(DEFAULT_SEARCH_VALUE);
  const [currentPage, setCurrentPage] = useState(1);

  const searchHandler = (event) => {
    const searchValue = event.target.value;
    setInputValue(searchValue.length ? searchValue : DEFAULT_SEARCH_VALUE);
    setCurrentPage(1);
  };

  const pageChangeHandler = (page) => {
    if (page <= pages.length && page >= 1) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const repoPromise = dispatch(
      getRepositories({ input: inputValue, page: currentPage })
    );

    return () => {
      repoPromise.abort();
    };
  }, [inputValue, currentPage, dispatch]);

  return (
    <Wrapper>
      <SearchInput
        type="search"
        placeholder="Search"
        name="repoName"
        onChange={searchHandler}
      />
      {!loading && repos.length > 0 && (
        <>
          <List>
            {repos.map((item) => (
              <ListItemComponent key={item.id} item={item}></ListItemComponent>
            ))}
          </List>
          <PaginationComponent
            pages={pages}
            currentPage={currentPage}
            onPageClick={pageChangeHandler}
          ></PaginationComponent>
        </>
      )}
      {!loading &&
        !repos.length &&
        "По Вашому запиту не знайдено жодного репозиторія"}
      {loading && "Репозиторії завантажуються..."}
    </Wrapper>
  );
}

export default App;
