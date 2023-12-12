import React from "react";
import { TITLE_HAMBURGESA3, TITLE_HAMBURGESA2, TITLE_HAMBURGESA1 } from "../../lang/es";

const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Detalles de Pedido</h1>
                <div>
                    <h1>Información de Pedido</h1>
                    <p>
                        <b>Dirección</b>
                        {"sjda 12-32ss dsad"}
                    </p>
                </div>
                <div>
                    <h1>Contacto</h1>
                    <p>
                        <b>Nombre</b>
                        {"Stuart"}
                    </p>
                    <p>
                        <b>Teléfono</b>
                        {2131232123}
                    </p>
                </div>

                <div>
                    <h1>Estado</h1>
                    <p>
                        <b>Estatus de Orden</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Realizado el..</b>
                        {"23-02-2002"}
                    </p>
                    <p>
                        <b>Enviado el..</b>
                        {"23-02-2003"}
                    </p>
                </div>

                <div>
                    <h1>Pagos</h1>
                    <p>
                        <b>Método de Pago</b>
                        {"COD"}
                    </p>
                    <p>
                        <b>Referencia</b>#{"asdasdsadsad"}
                    </p>
                    <p>
                        <b>Pagado el..</b>
                        {"23-02-2003"}
                    </p>
                </div>

                <div>
                    <h1>Importe</h1>
                    <p>
                        <b>Total de Pedido</b>{2132}
                    </p>
                    <p>
                        <b>cargo de Envio </b>€{200}
                    </p>
                    <p>
                        <b>Tax</b>€{232}
                    </p>
                    <p>
                        <b>Importe Total</b>€{232 + 200 + 2132}
                    </p>
                </div>

                <article>
                    <h1>Pedido</h1>
                    <div>
                        <h4>{TITLE_HAMBURGESA1}</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4>{TITLE_HAMBURGESA2}</h4>
                        <div>
                            <span>{10}</span> x <span>{500}</span>
                        </div>
                    </div>
                    <div>
                        <h4>{TITLE_HAMBURGESA3}</h4>
                        <div>
                            <span>{10}</span> x <span>{1800}</span>
                        </div>
                    </div>

                    <div>
                        <h4
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            Sub Total
                        </h4>
                        <div
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            €{2132}
                        </div>
                    </div>
                </article>
            </main>
        </section>
    );
};

export default OrderDetails;
