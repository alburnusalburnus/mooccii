import React from 'react';
import Filter from './components/Filter';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.persons.length + 1,
      important: Math.random() > 0.5
    };

    const nimi = this.state.newName;
    const oldList = this.state.persons.map((x) => x.name );

    if (!oldList.includes(nimi)) {
        this.setState({
          persons: this.state.persons.concat(nameObject),
          newName: "",
          newNumber:""
        });
    } else {
         alert("Nimi tai numero on jo listalla");
      }
  }; 
      
  handleNameChange = (event) => {
    this.setState({newName: event.target.value})
  }

  handleNumber = (event) => {
    this.setState({newNumber: event.target.value})
  }

  updateSearch (event) {
    this.setState({filter: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
          <div>
              Etsi:
              <input type= "text"
                value= {this.state.filter}
                onChange={this.updateSearch.bind(this)}
                />
          </div>
          <h2>Lisää uusi</h2>
        <form onSubmit={this.addName}>
          <div>
            Nimi: <input 
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            Numero: <input
              value={this.state.newNumber}
              onChange={this.handleNumber}
            />
          </div>
          <div>
            <button type="submit">Lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
           <Filter 
              filter={this.state.filter}
              persons={this.state.persons} 
            />
      </div>
    )
  }
}

export default App;