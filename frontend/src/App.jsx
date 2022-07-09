import { useMemo, useState } from "react";
import Home from "@pages/Home";
import Step1 from "@pages/Step1";
import Step2 from "@pages/Step2";
import Step3 from "@pages/Step3";
import { Route, Routes } from "react-router-dom";
import GlobalContext from "./contexts/GlobalContext";

import "./App.css";

function App() {
  const initialForm = {
    pseudo: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [register, setRegister] = useState(initialForm);

  const values = useMemo(
    () => ({
      initialForm,
      register,
      setRegister,
    }),
    [register]
  );

  return (
    <div className="App">
      <GlobalContext.Provider value={values}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
        </Routes>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
