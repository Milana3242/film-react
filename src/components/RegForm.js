import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function RegForm(props) {

    const [user, setUser] = useState({ name: "", pass: "" });

    const nameRef = useRef();
    const passwordRef = useRef();

  //   console.log(user);

    function pushUserData() {
      // console.log(nameRef.current.value);
      const name = nameRef.current.value;
      const pass = passwordRef.current.value;
      setUser({ name, pass });
      registration(user)
    }
  function registration(user){
    fetch("https://655cb68925b76d9884fdd449.mockapi.io/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(user),
      })
        .then((response) => {
          console.log("ss", user);
          if (!response.ok) {
            throw new Error("Ошибка сети или сервера");
          }
          return response.json();
        })
        .then(() => {
          const token='wewewe'
          return token;
        })
        .then((data) => {
          setUser("");
          console.log(data);
          localStorage.setItem("token", data);
        })
        .catch((error) => {
          console.error(error);
        });

  }


    return (
        <div className="auth_form">
        <h4>Регистрация</h4>
        <input ref={nameRef} placeholder="Логин" />
        <br></br>
        <br></br>
        <input ref={passwordRef} placeholder="Пароль" />
        <br></br>
        <br></br>
        <button onClick={pushUserData}>Создать</button>
        <p>Уже есть аккаунт?<Link to={'/Auth'}>Авторизация</Link></p>
      </div>
    );
}

export default RegForm;