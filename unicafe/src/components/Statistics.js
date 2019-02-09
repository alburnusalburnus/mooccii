import React from 'react';

const Statistics = props => {
    if (props.total === 0) {
        return(
            <div>
                <h3>Ei annettuja palautteita</h3>
            </div>
        )
    }
        return(
            <div class="statsi">
                <p>Hyvä {props.good}</p>
                <p>Neutraali {props.neutral}</p>
                <p>Huono {props.bad}</p>
            </div>
        );
};


export default Statistics;