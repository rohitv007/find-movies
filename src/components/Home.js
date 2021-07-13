import React from "react";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useHomeFetch } from "../hooks/useHomeFetch";
import Grid from "./Grid/Grid";
import HeroImage from "./HeroImage.js/HeroImage";
import Thumb from "./Thumb/Thumb";
import NoImage from "../images/no_image.jpg";
import { Spinner } from "./Spinner/Spinner.styles";
import SearchBar from "./SearchBar.js/SearchBar";
import Button from "./Button/Button";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setLoadMore } =
    useHomeFetch();

  if (error) return <h2>Something went wrong...</h2>;

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].title}
          text={state.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => {
          const { id, title, poster_path } = movie;
          return (
            <Thumb
              key={id}
              clickable
              title={title}
              image={
                poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              movieId={id}
            />
          );
        })}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setLoadMore(true)} />
      )}
    </>
  );
};

export default Home;
