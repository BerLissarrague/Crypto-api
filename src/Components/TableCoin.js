import React from 'react';
import CoinRow from './CoinRow';


const titles = ["#", "Coins", "Price", "Price Change", "24 Volum"];
export default function TableCoin({ coins, search}) {

   const monedasFiltradas = coins.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <table className="container table table-dark table-hover">
            <thead >
                <tr >
                    {titles.map((title) => (
                        <td key={title}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {   monedasFiltradas.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}
