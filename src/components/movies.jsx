import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return (
        <div className="  alert alert-danger" role="alert">
          <h1 className="h1">There in no movies in the table</h1>
        </div>
      );

    return (
      <div>
        <div class="alert alert-primary" role="alert">
          <h1 className="h1">Showing {count} movies in the table</h1>
        </div>

        <table class="table table-dark ">
          <thead>
            <tr>
              <td class="bg-primary">Title</td>
              <td class="bg-primary">Genre</td>
              <td class="bg-primary">Stock</td>
              <td class="bg-primary">Rate</td>
              <td className="bg-primary"></td>
              <td className="bg-primary">Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
