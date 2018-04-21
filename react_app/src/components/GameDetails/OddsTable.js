import React, { Component } from 'react';

class OddsTable extends Component
{
    render()
    {
        let odds = this.props.odds;

        let rows = [], i = 0;
        for(let odd in odds)
        {
            rows.push(
            <tr key={i}>
                <td >{odds[odd].nome}</td>
                <td className="centerText">{odds[odd][1]}</td>
                <td className="centerText">{odds[odd].x}</td>
                <td className="centerText">{odds[odd][2]}</td>
            </tr>);
            i++;
        }

        return(
            <div className="oddsTable">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                BOOKMAKER
                            </th>
                            <th className="centerText">
                                1
                            </th>
                            <th className="centerText">
                                X
                            </th>
                            <th className="centerText">
                                2
                            </th>
                        </tr>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OddsTable;