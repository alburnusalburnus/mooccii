import React from 'react';

const Vote = ({onVote}) => {
    return (  
        <div>
            <button onClick={onVote}>Vote</button>
        </div>
    );
}
 
export default Vote;