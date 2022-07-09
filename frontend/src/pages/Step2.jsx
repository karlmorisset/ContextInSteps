import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";

export default function Step2() {
  const { register, setRegister } = useContext(GlobalContext);

  return (
    <div className="container">
      <Link className="nextBtn" to="/step1">
        Étape précédente
      </Link>

      <label htmlFor="email">
        C'est quoi ton email ?
        <input
          type="text"
          name="email"
          id="email"
          value={register.email}
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
        />
      </label>

      <Link className="nextBtn" to="/step3">
        Étape suivante
      </Link>
    </div>
  );
}
