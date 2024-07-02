import React from "react";
import { useSelector } from "react-redux";

function TranslateForm({ bulTranslate, count, bulSentence, setBulSentence }) {
  const words = useSelector((state) => state.words);

  return (
    <div class="render-div ">
      <div>
        Слово на английском:
        <span class="render-div-word">{words[count].eng}</span>
      </div>
      <div
        onClick={() => setBulSentence(!bulSentence)}
        class="render-div-button_sen ">
        Показать в предложении:
        {bulSentence == false ? (
          ""
        ) : (
          <span class="render-div-sentense">{words[count].textEng}</span>
        )}
      </div>
      <div class="render-div-button_tr noselect">
        Показать перевод:
        {bulTranslate == false ? (
          ""
        ) : (
          <span class="render-div-translate">{words[count].rus}</span>
        )}
      </div>
    </div>
  );
}

export default TranslateForm;
