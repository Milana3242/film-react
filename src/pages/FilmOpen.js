import React from "react";
import FilmOpenRender from "../components/FilmOpenRender";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function FilmOpen(props) {
  const navigate = useNavigate();
  const par = useParams();

  const [openFilm, setOpenFilm] = React.useState([]);
  const [item, setItem] = React.useState();
  const [time, setTime] = React.useState();

  async function getOpenFilm() {
    try {
      const res = await axios.get(
        `https://6686a7ef83c983911b03234c.mockapi.io/films?id=${par.id}`
      );
      setOpenFilm(res.data);
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    getOpenFilm();
  }, []);

  function getItem(e) {
    setItem(e.target.value);
  }

  function getTime(e) {
    setTime(e.target.value);
  }

  function goTranslatePage() {
    navigate(`/TranslatePage?item=${item}&time=${time}`);
  }

  console.log(openFilm);
  return (
    <div>
      <FilmOpenRender film={openFilm} />
      <hr />
      <h2 class="time">Выберите длительность:</h2>
      <ul onClick={(e) => getTime(e)} class="list-check">
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
      <ul onClick={(e) => getItem(e)} class="list-check">
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
        START
      </button>
    </div>
  );
}

export default FilmOpen;
