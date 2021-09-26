import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* secondary component, assumes being passed a string and reverses the characters */
class ReverseString extends React.Component {

    render() {
        let inputString = "" + this.props.userString;
        let reversedString = "";

        /* loop from the end of the input string to the front */
        for (let i = inputString.length - 1; i >= 0; i--) {
            reversedString += inputString[i];
        }

        return (
            <label className="output">
                {reversedString}
            </label>);
    }
}

/* secondary component, assumes being passed a string and counts the number of characters */
class CharacterCount extends React.Component {

    render() {
        let inputString = "" + this.props.userString;
        return (
            <label className="output">
                {inputString.length}
            </label>);
    }
}

/* main component, holds onto state and passes to output depending on how the toggle is swapped */
class Toggle extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            setToReverse: [true],
            userString: ""};
    }

    /* listens for user input and updates state info */
    inputUpdater = (event) => {
        this.setState({
            setToReverse: this.state.setToReverse,
            userString: event.target.value,
        });
    }

    /* listens for toggle swap and updates state info */
    toggleUpdater = () => {
        this.setState({
            setToReverse: !this.state.setToReverse,
            userString: this.state.userString,
        });
    }

    render() {
        /* Label for output dynamically updates based on state (inline if/else statement) */
        let outputLabel = (this.state.setToReverse ? 'Your reversed input:' : 'Number of characters in your input:')

        return (
            /* output section swaps based on state */
            <div className="main">
                <label>Reverse your input</label>
                <label className="switch">
                    <input type="checkbox" onClick={this.toggleUpdater}/>
                        <span className="toggle round" />
                </label>
                <label>Count the characters in your input</label>
                <div>
                    <textarea className="input" value={this.state.userString} onInput={this.inputUpdater}  />
                </div>
                <div>
                    <label>{outputLabel}</label>
                    {this.state.setToReverse ? <ReverseString userString={this.state.userString} /> : <CharacterCount userString={this.state.userString} />}
                </div>
            </div>
        );

    }

}


/* required main render called by React */
ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
