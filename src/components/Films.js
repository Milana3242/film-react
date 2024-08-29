import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFilms } from '../redux/slices/filmSlices';

function Films(props) {
  const films = useSelector((state) => state.films);
const dispatch=useDispatch()
  async function getAllFilms() {
    try {
      const res = await axios.get(
        `https://6686a7ef83c983911b03234c.mockapi.io/films`
      );
      dispatch(getFilms(res.data));
    } catch (err) {
      console.log(err);
    }
    window.scrollTo(0, 0);
  }

React.useEffect(()=>{
  getAllFilms()
},[])

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
