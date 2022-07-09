import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";

export default function Step3() {
  const { initialForm, register, setRegister } = useContext(GlobalContext);

  const handleRegister = () => {
    // axios
    //   .post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
    //     data: register,
    //   })
    //   .then(({ data }) => console.log(data));

    setRegister(initialForm);

    console.warn(register);
  };

  return (
    <div className="container">
      <Link className="nextBtn" to="/step2">
        Étape précédente
      </Link>

      <label htmlFor="password">
        Choisi un mot de passe
        <input
          type="text"
          name="password"
          id="password"
          value={register.password}
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
        />
      </label>

      <label htmlFor="confirmPassword">
        Confirme ton mot de passe
        <input
          type="text"
          name="confirmPassword"
          id="confirmPassword"
          value={register.confirmPassword}
          onChange={(e) =>
            setRegister({ ...register, confirmPassword: e.target.value })
          }
        />
      </label>

      <button type="button" className="nextBtn" onClick={handleRegister}>
        Créer mon compte
      </button>
    </div>
  );
}
