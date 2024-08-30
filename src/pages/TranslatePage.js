import React from "react";
import TranslateWord from "../components/TranslateWord";
import { useSelector, useDispatch } from "react-redux";
import { changeDificult, getWords } from "../redux/slices/wordsSlice";
import TranslateSentence from "../components/TranslateSentence";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const words = [
  {
    id: 1,
    text: "home",
    translate: "дом",
    trFilm: ["my home", "dear home", "home sweet home"],
    type: 1,
    dificult: 0,
  },
  {
    id: 2,
    text: "home",
    translate: "дом",
    trFilm: ["my home", "dear home", "home sweet home"],
    type: 1,
    dificult: 0,
  },
  {
    id: 3,
    text: "home",
    translate: "дом",
    trFilm: ["my home", "dear home", "home sweet home"],
    type: 1,
    dificult: 0,
  },
  {
    id: 4,
    text: "home",
    translate: "дом",
    trFilm: ["my home", "dear home", "home sweet home"],
    type: 1,
    dificult: 0,
  },
  {
    id: 5,
    text: "my love home",
    trFilm: ["мой любимый дом"],
    type: 2,
    dificult: 0,
  },
  {
    id: 6,
    text: "my dear home",
    trFilm: ["мой дорогой дом"],
    type: 2,
    dificult: 0,
  },
  {
    id: 7,
    text: "my beautiful home",
    trFilm: ["мой красивый дом"],
    type: 2,
    dificult: 0,
  },
  {
    id: 8,
    text: "my wonderful home",
    trFilm: ["мой чудесный дом"],
    type: 2,
    dificult: 0,
  },
];

function TranslatePage() {
  const [showCard, setShowCard] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = searchParams.get("item");
  const item = useSelector((state) => state.words);
  const dispatch = useDispatch();

  function showTranslate() {
    setShowCard(true);
  }

  function targetValue(e) {
    let value = e.target.value;
    if (value == undefined) {
      value = e.target.textContent;
    }
    sendResult(value);
    getCard(params);
    setShowCard(false);
  }

  async function getCard(params) {
    try {
      const res = await axios.get(
        `https://6686a7ef83c983911b03234c.mockapi.io/films`
      );
      const filterItems = words.filter((item) => item.type == params);
      const randomIndex = Math.floor(Math.random() * filterItems.length);

      console.log("filterItems", filterItems, randomIndex);
      console.log(params);
      dispatch(getWords(filterItems[randomIndex]));
    } catch (err) {
      console.log(err);
    }
    // window.scrollTo(0, 0);
  }

  async function sendResult(value) {
    try {
      const res = await axios.post(
        `https://6686a7ef83c983911b03234c.mockapi.io/`
      );
      const cardResult = { id: item.id, dificult: value };
      console.log(cardResult);
    } catch (err) {
      console.log(err);
    }
    // window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    if (params) {
      getCard(params);
    }
  }, [params]);

  return (
    <div>
      {params == 1 ? (
        <TranslateWord showCard={showCard} item={item} />
      ) : (
        <TranslateSentence item={item} showCard={showCard} />
      )}

      <button onClick={showTranslate} id="btn" class="btn-end">
        Показать
      </button>
      {showCard == false ? (
        ""
      ) : (
        <div class="radio none">
          <h2 class="time">Выберите сложность:</h2>
          <ul onClick={(e) => targetValue(e)} class="list-check">
            <li class="list-check__item">
              <label class="list-check__label">
                <input type="radio" name="dif" value="HARD" />
                <span class="label-text">HARD</span>
              </label>
            </li>
            <li class="list- check__item">
              <label class="list-check__label">
                <input type="radio" name="dif" value="MIDDLE" />
                <span class="label-text">MIDDLE</span>
              </label>
            </li>
            <li class="list- check__item">
              <label class="list-check__label">
                <input type="radio" name="dif" value="EASY" />
                <span class="label-text">EASY</span>
              </label>
            </li>
            <li class="list- check__item">
              <label class="list-check__label">
                <input type="radio" name="dif" value="DONE" />
                <span class="label-text">DONE</span>
              </label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default TranslatePage;
