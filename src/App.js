import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <h3 style={{ textTransform: "uppercase", textAlign: "center" }}>
            add dark mode in header
          </h3>
          <Home />
        </Route>
        <Route path="/movie/:movieId">
          <Movie />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// 301c8d1c4155298588e53c46a6a7da09
// https://api.themoviedb.org/3/movie/550?api_key=301c8d1c4155298588e53c46a6a7da09

// PropTypes is a handy tool used for and used in Developement Mode
// it helps to identify that the propTypes and the props passed
// are same where the component is made and where it is used resp.