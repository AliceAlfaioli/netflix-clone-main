import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import "../styles.css";

class Movies extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies() {
    const apiLink = " http://www.omdbapi.com/?i=tt3896198&apikey=9c81a0ec";
    fetch(`${apiLink}&s="${this.props.title.toLowerCase()}"`)
      .then((response) => response.json())
      .then((moviesRequest) => this.setState({ movies: moviesRequest }, () => console.log(this.state.movies.Search)))
      .catch((error) => console.error("Error fetching movies:", error));
  }
  render() {
    return (
      <>
        <h2>{this.props.category}</h2>
        <Col className="ms-5">
          {this.state.movies.Search &&
            this.state.movies.Search.slice(0, 8).map((movie) => <SingleMovie key={movie.imdbID} img={movie.Poster} />)}
        </Col>
      </>
    );
  }
}
export default Movies;
