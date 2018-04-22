import React, { Component } from 'react';

class OddsTable extends Component
{
    render()
    {
        let odds = this.props.odds;
        let rows;

        if(odds === undefined)
            rows = null;
        else
        {
            rows = odds.map((odd, index) => 
            {
                return (<tr key={index}>
                        <td >{odd.oddHouse}</td>
                        <td className="centerText">{odd.oddHome}</td>
                        <td className="centerText">{odd.oddTie}</td>
                        <td className="centerText">{odd.oddAway}</td>
                    </tr>);
            });
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