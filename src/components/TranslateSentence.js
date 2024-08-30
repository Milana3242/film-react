import React from "react";

function TranslateSentence({ item, showCard }) {
  console.log(Array(item));
  return (
    <div class="render-div ">
      {Array(item).map((item) => (
        <>
          <h4>По предложениям</h4>
          <div>Предложение:</div>
          <span>{item.text}</span>
          <div>Перевод из фильма:</div>
          {showCard == false ? (
            ""
          ) : (
            <span class="render-div-translate">{item.trFilm[0]}</span>
          )}

          <br></br>
          <div>Перевод из переводчика:</div>
          {showCard == false ? "" : <span class="render-div-translate"></span>}
        </>
      ))}
    </div>
  );
}

export default TranslateSentence;
