import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function FilmsRender(props) {
    const par = useParams();
    const films = useSelector((state) => state.films);

    const film = films.filter((film) => film.id == par.id);
    console.log(film);
    console.log(par.id);

  return (
    <>
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
    </>
  );
}

export default FilmsRender;
