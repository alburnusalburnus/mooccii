import React from 'react'

const Button = ({click}) => {
    return(
        <div>
            <button onClick={click}>Next anecdote</button>
        </div>
    );
};

export default Button;