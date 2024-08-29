import React from "react";
import { useSelector } from "react-redux";

function TranslateForm({ showCard, item }) {
  return (
    <div class="render-div ">
      {/* <>  <div>
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
      </div></> */}
      {Array(item).map((item) => (
        <>
          <h4>По словам</h4>
          <div>Слово:</div>
          <span>{item.text}</span>
          <div>Перевод:</div>
          {showCard == false ? (
            ""
          ) : (
            <span class="render-div-translate">{item.translate}</span>
          )}
          <br></br>
          <div>Использование слова в предложениях фильма:</div>
          {showCard == false ? (
            ""
          ) : (
            <span class="render-div-translate">{item.trFilm}</span>
          )}
          <br></br>
          <div>Использование слова в предложениях переводчика:</div>
          <span></span>
        </>
      ))}
    </div>
  );
}

export default TranslateForm;
