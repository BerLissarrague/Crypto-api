import React from 'react';
import CoinRow from './CoinRow';


const titles = ["#", "Coins", "Price", "Price Change", "24 Volum"];
export default function TableCoin({ coins }) {

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {titles.map((title, i) => (
                        <td key={i}>{title}</td>
                    ))}
                </tr>
                <tbody>
                    {coins.map((coin, index) => (
                        <CoinRow coin={coin} key={index} index={index + 1} />
                    ))}
                </tbody>
            </thead>
        </table>
    )
}
