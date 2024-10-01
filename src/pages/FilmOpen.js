import React, { useState } from "react";
import FilmOpenRender from "../components/FilmOpenRender";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "react-rangeslider/lib/index.css";
import MultiRangeSlider from "multi-range-slider-react";

function FilmOpen(props) {
  const navigate = useNavigate();
  const par = useParams();

  const [openFilm, setOpenFilm] = React.useState([]);
  const [item, setItem] = React.useState();

  const [minValue, set_minValue] = useState(1);
  const [maxValue, set_maxValue] = useState(100);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  function getItem(e) {
    setItem(e.target.value);
  }

  function goTranslatePage() {
    if (item == undefined) return alert("Выберите, пожалуйста ,режим!");
    navigate(`/TranslatePage?item=${item}&time=${maxValue - minValue}`);
  }

  const token=window.localStorage.getItem('token')


  async function getOpenFilm() {
    let config = {
      headers: {
        header1: token,
      }
    }
    try {
      const res = await axios.get(
        `https://6686a7ef83c983911b03234c.mockapi.io/films?id=${par.id}`,config
      );
      setOpenFilm(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    getOpenFilm();
  }, []);

  return (
    <div>
      <FilmOpenRender film={openFilm} />
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
      <hr />

      <h2 class="time">Выберите длительность:</h2>
      <MultiRangeSlider
        min={1}
        max={100}
        step={5}
        stepOnly={true}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
      <div className="slider_val">
        Длительность:{maxValue - minValue} минут
      </div>
      <hr />

      <button onClick={goTranslatePage} id="btn" class="btn-end">
        START
      </button>
    </div>
  );
}

export default FilmOpen;
