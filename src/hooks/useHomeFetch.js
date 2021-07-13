import { useEffect, useState } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadMore, setLoadMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      console.error(error.message);
      setError(true);
    }
    setLoading(false);
  };

  // triggers once on initial render
  // and everytime when the searchTerm changes
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");

      if (sessionState) {
        console.log("Grabbing from sesh");
        setState(sessionState);
        return;
      }
    }

    console.log("Grabbing from API");

    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // load more
  useEffect(() => {
    if (!loadMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setLoadMore(false);
  }, [loadMore, searchTerm, state.page]);

  // write to sessionStorage
  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    loadMore,
    setLoadMore,
  };
};
