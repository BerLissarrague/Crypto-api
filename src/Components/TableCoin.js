import React from 'react';
import CoinRow from './CoinRow';


export default function TableCoin({ coins, }) {
    const titles = ["#", "Coins", "Price", "Price Change", "24 Volum"];
    return (
        <table className="container table table-dark table-hover">
            <thead >
                <tr>
                    {titles.map((title) => (
                        <td>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {coins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}
