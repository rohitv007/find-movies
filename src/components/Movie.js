import React from "react";
import { useParams } from "react-router";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useMovieFetch } from "../hooks/useMovieFetch";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import { Spinner } from "./Spinner/Spinner.styles";
import NoImage from "../images/no_image.jpg";
import Grid from "./Grid/Grid";
import Actor from "./Actor/Actor";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;

  if (error) return <h2>Something went wrong...</h2>;

  return (
    <div key={movieId}>
      <BreadCrumb movieTitle={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors
          .map((actor) => {
            const { id, original_name, character, profile_path } = actor;
            return (
              <Actor
                key={id}
                name={original_name}
                character={character}
                imageUrl={
                  profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`
                    : NoImage
                }
              />
            );
          })
          .slice(0, 20)}
      </Grid>
    </div>
  );
};

export default Movie;
