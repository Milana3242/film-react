import React from "react";
import { useSelector } from "react-redux";
// import Pagination from "./Swiper";
import Swipers from "./Swipers";
// import Swiper from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';
import { Pagination, Navigation } from "swiper/modules";

function TranslateForm({ showCard, item }) {
  // const [currentPage, setCurrentPage] = React.useState(1);

  // console.log('cpage',currentPage)

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
            <div>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {item.trFilm.map((slide) => {
                  return <SwiperSlide><span className="swiperSpan">{slide}</span></SwiperSlide>;
                })}
              </Swiper>

              {/* <Swipers>
                {item.trFilm.map((slide) => {
                 return <SwiperSlide>{slide}</SwiperSlide>;
                })}
              </Swipers> */}

              {/* <span class="render-div-translate">{item.trFilm}</span> */}
            </div>
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
