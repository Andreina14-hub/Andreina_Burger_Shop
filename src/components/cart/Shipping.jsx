import React from "react";
import { State, Country } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Información de Pedido</h1>
        <form>
          <div>
            <label>Dirección</label>
            <input type="text" placeholder="Número de casa" />
          </div>
          <div>
            <label>Ciudad</label>
            <input type="text" placeholder="Escribe tu Ciudad" />
          </div>
          <div>
            <label>País</label>
            <select>
              <option value="">País</option>
              {Country && Country.getAllCountries().map((i) => (
                <option value="{i.isoCode}" key="{i.isoCode}">
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Estado/Provincia</label>
            <select>
              <option value="">Estado/Provincia</option>
              {State && State.getStatesOfCountry("ES").map((i) => (
                <option value="{i.isoCode}" key="{i.isoCode}">
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Teléfono</label>
            <input type="number" placeholder="Ingresa tu número telefónico" />
          </div>
          <Popup trigger=
            {<Link className="link" to="/myorders">Confirmar Orden</Link>}
          >
            <div style={{
              color: "red",
              transform: 'translate(0%,-500%)',
              backgroundColor: '#fff', padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
            }}>Orden Realizada Exitosamente</div>
          </Popup>
        </form>
      </main>
    </section >
  );
};

export default Shipping;