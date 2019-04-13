import React from 'react';

const Filter = ({persons, filter}) => {    
    const filteredPersons = persons.filter((person) => {
        return person.name.toLowerCase().indexOf(filter.toLocaleLowerCase()) >= 0
    })
    const ihmiset = filteredPersons.map(data => <li key={data.id}>{data.name} {data.number}</li>)
    
    return (
        <div>
          {ihmiset}
        </div>
        
    )}
    export default Filter;