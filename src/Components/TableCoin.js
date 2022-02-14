import React from 'react';
import CoinRow from './CoinRow';


const titles = ["#", "Coins", "Price", "Price Change", "24 Volum"];
export default function TableCoin({ coins, search }) {

    const filtradoDeMonedas = coins.filter(
        (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) |
            coin.symbol.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {titles.map((title, i) => (
                        <td key={i}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filtradoDeMonedas.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}
