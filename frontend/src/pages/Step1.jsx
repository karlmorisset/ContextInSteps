import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";

export default function Step1() {
  const { register, setRegister } = useContext(GlobalContext);

  return (
    <div className="container">
      <Link className="nextBtn" to="/">
        Étape précédente
      </Link>
      <label htmlFor="pseudo">
        Donne-toi un pseudo
        <input
          type="text"
          value={register.pseudo}
          onChange={(e) => setRegister({ ...register, pseudo: e.target.value })}
          name="pseudo"
          id="pseudo"
        />
      </label>

      <label htmlFor="age">
        Quelle est ta tranche d'age
        <select
          name="age"
          id="age"
          value={register.age}
          onChange={(e) => setRegister({ ...register, age: e.target.value })}
        >
          <option value="">Quel est ton age ?</option>
          <option value="18-24">18-24 ans</option>
          <option value="25-40">25-40 ans</option>
          <option value="41-60">41-60 ans</option>
          <option value="60+">60+</option>
        </select>
      </label>

      <Link className="nextBtn" to="/step2">
        Étape suivante
      </Link>
    </div>
  );
}
