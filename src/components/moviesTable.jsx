import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort } = props;
  return (
    <table className="table table-dark ">
      <thead>
        <tr>
          <th onClick={() => onSort("title")} className="bg-primary">
            Title
          </th>
          <th onClick={() => onSort("genre.name")} className="bg-primary">
            Genre
          </th>
          <th onClick={() => onSort("numberInstock")} className="bg-primary">
            Stock
          </th>
          <th onClick={() => onSort("dailyRentalRate")} className="bg-primary">
            Rate
          </th>
          <th className="bg-primary"></th>
          <th className="bg-primary"></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
