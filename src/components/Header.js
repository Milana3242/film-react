import React from "react";

function Header(props) {
  return (
    <div class="headerDiv">
      <nav class="headerNav">
        <a href="/index.html">Главная</a>
        <a href="#">Авторизация</a>
        <a href="#">Отзывы</a>
      </nav>
      <img src="/img/logo.svg" alt="" />
    </div>
  );
}

export default Header;
