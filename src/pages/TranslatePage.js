import React from "react";
import TranslateForm from "../components/TranslateForm";
import { useSelector, useDispatch } from "react-redux";
import { changeDificult } from "../redux/slices/wordsSlice";

function TranslatePage(props) {
  const dispatch = useDispatch();
  const [bulTranslate, setBulTranslate] = React.useState(false);
  const [bulSentence, setBulSentence] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const words = useSelector((state) => state.words);
  function showTranslate() {
    setBulTranslate(!bulTranslate);
  }

  function targetValue(e) {
    if (words.length === count + 1) {
      //   return setCount(0);
      console.log("sdd");
    }
    console.log(e.target);
    let value = e.target.value;
    if (value == undefined) {
      value = e.target.textContent;
    }
    console.log("count", value);
    dispatch(changeDificult({ value, count }));

    setCount(count + 1);
    setBulTranslate(!bulTranslate);
    setBulSentence(!bulSentence)
  }
  return (
    <div>
      <TranslateForm
        bulTranslate={bulTranslate}
        bulSentence={bulSentence}
        setBulSentence={setBulSentence}
        count={count}
      />
      <button onClick={showTranslate} id="btn" class="btn-end">
        Показать
      </button>
      {bulTranslate == false ? (
        ""
      ) : (
        <div class="radio none">
          <h2 class="time">Выберите сложность:</h2>
          <ul onClick={(e) => targetValue(e)} class="list-check">
            <li class="list-check__item">
              <label class="list-check__label">
                <input type="radio" name="dif" value="1" />
                <span class="label-text">1</span>
              </label>
            </li>
            <li class="list- check__item">
              <label class="list-check__label">
                <input type="radio" name="dif" value="2" />
                <span class="label-text">2</span>
              </label>
            </li>
            <li class="list- check__item">
              <label class="list-check__label">
                <input type="radio" name="dif" value="3" />
                <span class="label-text">3</span>
              </label>
            </li>
            <li class="list- check__item">
              <label class="list-check__label">
                <input type="radio" name="dif" value="4" />
                <span class="label-text">4</span>
              </label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default TranslatePage;
