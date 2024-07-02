import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function FilmOpen(props) {
  const par = useParams();
  const films = useSelector((state) => state.films);

  const film = films.filter((film) => film.id == par.id);
  console.log(film);
  console.log(par.id);
  return (
    <div>
      {film.map((item, i) => {
        return (
          <div class="open-card">
            <div class="img-card">
              <img src={item.img} />
              <p>{item.name}</p>
            </div>
            <div class="card-desk">
              <h1>Описание к фильму</h1>
              {item.desk}
            </div>
          </div>
        );
      })}
      <hr />
      <h2 class="time">Выберите длительность:</h2>
      <ul class="list-check">
        <li class="list-check__item">
          <label class="list-check__label">
            <input type="radio" name="min" value="5" />
            <span class="label-text">5 минут</span>
          </label>
        </li>
        <li class="list- check__item">
          <label class="list-check__label">
            <input type="radio" name="min" value="10" />
            <span class="label-text">10 минут</span>
          </label>
        </li>
        <li class="list- check__item">
          <label class="list-check__label">
            <input type="radio" name="min" value="20" />
            <span class="label-text">20 минут</span>
          </label>
        </li>
        <li class="list- check__item">
          <label class="list-check__label">
            <input type="radio" name="min" value="30" />
            <span class="label-text">30 минут</span>
          </label>
        </li>
      </ul>
      <hr />
      <h2 class="time">Выберите режим:</h2>
      <ul class="list-check">
        <li class="list-check__item">
          <label class="list-check__label">
            <input type="radio" name="trans" value="1" />
            <span class="label-text">Перевод по словам</span>
          </label>
        </li>
        <li class="list- check__item">
          <label class="list-check__label">
            <input type="radio" name="trans" value="2" />
            <span class="label-text">Перевод по предложениям</span>
          </label>
        </li>
      </ul>
      <button id="btn" class="btn-end">
        Нажать
      </button>
    </div>
  );
}

export default FilmOpen;
