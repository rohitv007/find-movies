import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { Image, Text } from "./Thumb.styles";

const Thumb = ({ image, title, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link style={{ textDecoration: "none" }} to={`/movie/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
        <Text>{title}</Text>
      </Link>
    ) : (
      <>
        <Image src={image} alt="movie-thumb" />
        <Text>{title}</Text>
      </>
    )}
    {/* <Image src={image} alt="movie-thumb" /> */}
  </div>
);

// Thumb.propTypes = {
//   image: PropTypes.string,
//   movieId: PropTypes.number,
//   clickable: PropTypes.bool
// };

export default Thumb;
