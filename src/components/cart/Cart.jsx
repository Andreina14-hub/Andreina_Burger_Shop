import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import IniLayout from "../layout/IniLayout";
import { TITLE_HAMBURGESA3, TITLE_HAMBURGESA2, TITLE_HAMBURGESA1 } from "../../lang/es";

const BurguerItems = [
  { value: 0, img: burger1, title: TITLE_HAMBURGESA1 },
  { value: 0, img: burger2, title: TITLE_HAMBURGESA2 },
  { value: 0, img: burger3, title: TITLE_HAMBURGESA3 },]
const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
)
const Cart = () => {
  const [data, setData] = useState(BurguerItems)
  function increment(index) {
    const newItems = data[index];
    newItems.value++;
    setData([...data.slice(0, index), newItems, ...data.slice(index + 1)]);
  }
  const decrement = (index) => {
    if (data[index].value > 0) {
      const newItems = data[index];
      newItems.value--;
      setData([...data.slice(0, index), newItems, ...data.slice(index + 1)]);
    }
  };
  return (
    <IniLayout showFooter={false}>
      <section className="cart">
        <main>
          {data.map((item, i) =>
            <CartItem
              title={item.title}
              img={item.img}
              value={item.value}
              increment={() => increment(i)}
              decrement={() => decrement(i)}
            />
          )}
          <article>
            <div>
              <h4>Sub Total</h4>
              <p>€{2000}</p>
            </div>
            <div>
              <h4>Tax</h4>
              <p>€{2000 * 0.18}</p>
            </div>
            <div>
              <h4>Gastos de envío</h4>
              <p>€{200}</p>
            </div>{" "}
            <div>
              <h4>Total</h4>
              <p>€{2000 + 2000 * 0.18 + 200}</p>
            </div>
            <Link to="/shipping">Pedido</Link>
          </article>
        </main>
      </section>
    </IniLayout>
  );
};

export default Cart;