import React from 'react'

const Button = ({klikki, text}) => {
    return( 
        <div class="puttoni">       
            <button onClick={klikki}> {text}</button>
        </div>
    );
};

export default Button;