import React from 'react'

export default function CoinRow({ coin, index }) {
    console.log(coin, index)
    return (
        <tr>
            <td >{index}</td>
            <td>
                <img
                    src={coin.image}
                    alt=""
                    className="img-fluid me-4"
                    style={{ width: "3%" }}
                />
                <span>{coin.name}</span>
            </td>
            <td>{coin.current_price}</td>
            <td>{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}
