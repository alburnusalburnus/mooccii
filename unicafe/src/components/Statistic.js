import React from "react"

const Statistic = props => {
    if (props.total ===0){
        return(
            <div>
                <em></em>
            </div>
        )
    }
        return(
            <div class="penis">
                <table>
                    <tbody>
                        <tr>
                            <td>Palautteiden keskiarvo: </td>
                            <td>{(props.good - props.bad) / props.total}</td>
                        </tr>
                        <tr>
                            <td>Positiiviset arvostelut: </td>
                            <td>{Math.round((props.good / props.total) * 100)}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
};

export default Statistic;