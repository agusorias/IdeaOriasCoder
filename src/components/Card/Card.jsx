import React, { useState } from "react"
import "./Card.css"

const Card = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h2>Calcomanía</h2>
            <div className="container-img">
                <img src="../../img/logoaltroke.jpg" alt="imagen altroke" />
            </div>
            <p>Cantidad: {count}</p>
            <button onClick={() => setCount(count + 1)}>Agregar</button>
        </div>
    )
}

export default Card