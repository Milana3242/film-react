import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Films(props) {
  const films = useSelector((state) => state.films);

  return (
    <>
      {films.map((film) => {
        return (
          <Link to={`/FilmOpen/${film.id}`} class="card">
            <img class="cardImg" src={film.img} />
            <p>{film.name}</p>
            <div>Выбрать</div>
          </Link>
        );
      })}
    </>
  );
}

export default Films;
