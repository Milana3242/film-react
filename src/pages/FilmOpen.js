import React from "react";
import FilmsRender from "../components/FilmsRender";
import { useNavigate } from "react-router-dom";

function FilmOpen(props) {
    const navigate = useNavigate();

  function goTranslatePage() {
    navigate("/TranslatePage");
  }
  return (
    <div>
     <FilmsRender/>
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
      <button onClick={goTranslatePage} id="btn" class="btn-end">
        Нажать
      </button>
    </div>
  );
}

export default FilmOpen;
