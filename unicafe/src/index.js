import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button'
import Statistics from './components/Statistics';
import Statistic from './components/Statistic';
import './index.css';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            total: 0,
        };
    } 
    Hyva = () =>
    this.setState({good: this.state.good + 1, total: this.state.total + 1});
    
    Neutraali = () =>
    this.setState({neutral: this.state.neutral + 1, total: this.state.total + 1});
    
    Huono = () =>
    this.setState({bad: this.state.bad + 1, total: this.state.total + 1});
    
    Total () {
        this.setState(() => {
            return {total: this.state.total}
        });
    }

render() {
    return(
        <div>
            <div>
                <h1>Anna palautetta</h1>
                    <Button klikki={this.Hyva} text="Hyvä"/>
                    <Button klikki={this.Neutraali} text='Neutraali'/>
                    <Button klikki={this.Huono} text='Huono'/>
            </div>
            <div>
                <h1>Statistiikka</h1>
                <Statistics 
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.state.total}
                />
            </div>
            <div>
                <Statistic
                    total={this.state.total}
                    good={this.state.good}
                    bad={this.state.bad}
                />
           </div>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
