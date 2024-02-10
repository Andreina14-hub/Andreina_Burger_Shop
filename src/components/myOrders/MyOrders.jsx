import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import IniLayout from "../layout/IniLayout"

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <IniLayout showFooter={false}>
      <section className="tableClass">
        <main>
          <table>
            <thead>
              <tr>
                <th>Orden No</th>
                <th>Estado</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Método de Pago</th>
                <th>Accion</th>
              </tr>
            </thead>

            <tbody>
              {arr.map((i) => (
                <tr key={i}>
                  <td>#sdkfsdfdsf</td>
                  <td>Processing</td>
                  <td>23</td>
                  <td>€{2132}</td>
                  <td>COD</td>
                  <td>
                    <Link to={`/order/${"asdsds"}`}>
                      <AiOutlineEye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>
    </IniLayout>
  );
};

export default MyOrders;
