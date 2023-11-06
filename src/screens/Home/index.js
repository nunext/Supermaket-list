import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { Button, Input } from "./../../components";

export const HomeScreen = () => {
  const navigate = useNavigate;
  const [Username, setUsarname] = useState("");

  const onClickContinue = () => {
    if (Username.length < 3) {
      alert("Nome de usuário deve conter mais de 3 caracteres!");
      return;
    }
    localStorage.setItem("@supermarket-list:username", Username);
    navigate("/list");
  };

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <img
          className="shopping-bag-image"
          src="/images/shopping-bag.svg"
          alt="Shopping-bag"
        />
        <h1 className="home-screen-title">
          Sua lista de supermercado mais facil do que nunca.
        </h1>
        <h3 className="home-screen-subtitle">
          Ajudamos você a organizar sua lista de compras de forma descomplicada!
        </h3>

        <h3 className="home-screen-subtitle-description">
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </h3>
        <Input
          onChange={(text) => setUsarname(text)}
          value={Username}
          label="Username"
          placeholder="Ex: usuário 1"
        />
        <div className="home-screen-button-container">
          <Button onClick={onClickContinue}>Continuar</Button>
        </div>
      </div>
    </div>
  );
};
