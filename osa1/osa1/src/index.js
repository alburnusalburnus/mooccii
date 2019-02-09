import React from 'react';
import ReactDOM from 'react-dom';

/*class Hello extends React.Component {
    render () {
        const {name,age} = this.props
        const bornYear = () => new Date ().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old <br/>
                So you were probably born {bornYear()}
            </p>
        </div>
    
    )
  }
}

class Henkilo {
    constructor(nimi, ika) {
      this.nimi = nimi
      this.ika = ika
    }
}

const App = () => {
    const nimi = 'Pekka'
    const ika = 10
    
    return (
        <div>
            <h1> Greetings </h1>
            <Hello name="Arto" age={26 + 10} />
            <Hello name={nimi} age={ika} />
        </div>    
    )
}

ReactDOM.render(<App />, document.getElementById('root'));*/

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            counter: 1
    }
}

asetaArvoon = (arvo) =>{ 
    return () => {
    this.setState({counter: arvo})
    }
}

    render () {
        return (
            <div>
                <div>{this.state.counter}</div>
                <div>
                    <button onClick={this.asetaArvoon(this.state.counter+1)}>
                        plus
                    </button>
                    <button onClick={this.asetaArvoon(0)}>
                        zero
                    </button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'))
    
 