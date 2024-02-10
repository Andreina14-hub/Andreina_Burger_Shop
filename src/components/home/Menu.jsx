import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png"
import burger2 from "../../assets/burger2.png"
import burger3 from "../../assets/burger3.png"
import { TITLE_HAMBURGESA1, TITLE_HAMBURGESA3, TITLE_HAMBURGESA2 } from "../../lang/es"
import IniLayout from "../layout/IniLayout"
const Menu = () => {
    const addToCartHandler = (itemNum) => { };
    return <IniLayout>
        <section className="menu" id="menu">
            <h1>MENÚ</h1>
            <div>
                <MenuCard
                    itemNum={1}
                    burgerSrc={burger1}
                    price={3.30}
                    title={TITLE_HAMBURGESA1}
                    handler={addToCartHandler}
                    delay={0.1}

                />
                <MenuCard
                    itemNum={2}
                    burgerSrc={burger2}
                    price={4.50}
                    title={TITLE_HAMBURGESA2}
                    handler={addToCartHandler}
                    delay={0.1}
                />

                <MenuCard
                    itemNum={3}
                    burgerSrc={burger3}
                    price={6.10}
                    title={TITLE_HAMBURGESA3}
                    handler={addToCartHandler}
                    delay={0.1}
                />

            </div>
        </section>
    </IniLayout>
}
export default Menu
