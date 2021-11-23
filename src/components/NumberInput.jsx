import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultado from "./Resultado";
import { operaciones } from "../helpers/operaciones";
const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 10,
    numero2: 5,
  });
  const {
    handleChange,
    suma,
    resta,
    multiplicacion,
    division,
    numero1,
    numero2,
  } = operaciones(numeros, setNumeros);
  return (
    <>
      <label className="mx-2">
        Número 1:{" "}
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>

      <label className="mx-2">
        Número 2:{" "}
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>

      <Resultado operacion="Suma" resultado={suma()} />
      <Resultado operacion="Resta" resultado={resta()} />
      <Resultado operacion="Multiplicación" resultado={multiplicacion()} />
      <Resultado operacion="División" resultado={division()} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
