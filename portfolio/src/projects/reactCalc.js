import React from 'react';
import ReactDOM from 'react-dom';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '0',
            history: [],
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleBackspace = this.handleBackspace.bind(this);
    }
    
    handleClear() {
        this.setState({display: "0"})
    }

    handleClick(e) {
        if(this.state.display === "0" && e.target.value != ".") {
            this.setState({display: e.target.value})
        }else {
            this.setState({
                  display: this.state.display+e.target.value,
                  last: this.state.display.length 
            })
        }
        
    }
    handleBackspace() {
        let back = this.state.display.split("");
        back.pop();
        if(back = []) {
            back = ["0"]
        }
        this.setState({display: back.join("")})
    }

    handleOperators(e) {
        let key = e.target.value;
        let all = /[\*\/\+\-]/
        this.setState((prevState) => {
            let d = this.state.display
            let pd = prevState.display.length
            if(d.length > pd) {
                pd = d
            }
            if(all.test(d.charAt(pd-1))) {
                return{
                    display: prevState.display.substr(0,prevState.display.length-1)+key,
                }
            }else {
                return {
                    display: d+key,   
                }
            }
        })
    }

    handleEquals() {
        let operators = ["*", "/", "+", "-"];
        let all = /[\*\/\+\-]/g
        let numbers = this.state.display.split(all);
        let ops = this.state.display.split("").filter(letter => all.test(letter))
        if(numbers.length == ops.length) {
            ops.pop()
        }
        for(let x = 0; x < operators.length; x++) {
            while(ops.indexOf(operators[x]) != -1) {
                let i = ops.indexOf(operators[x]);
                let t;
                switch(ops[i]) {
                    case "*":
                        t = numbers[i] * numbers[i+1]
                        break;
                    case "/":
                        t = numbers[i] / numbers[i+1]
                        break;
                    case "+":
                        t = parseInt(numbers[i]) + parseInt(numbers[i+1])
                        break;
                    case "-":
                        t = numbers[i] - numbers[i+1]
                        break;
                }
                numbers.splice(i, 2, t);
                ops.splice(i, 1);
            }
        }
        this.setState((prevState) => {
            if(all.test(this.state.display.charAt(prevState.display.length-1))) {
                return{
                    display: `${numbers[0]}`,
                    history: [...prevState.history, prevState.display.substr(0,prevState.display.length-1)+"="+numbers[0]]
                }
            }else {
                return {
                    display: `${numbers[0]}`, 
                    history: [...prevState.history, `${this.state.display}=${numbers[0]}`]
                }
            }
        })
    }


    render() {
        return(
            <body id='container' class="projects">
                <div id="calculator">
                <div className = "row">
                    <p type = "text" id = "display" value={this.state.display}>{this.state.display}</p>
                </div>
                <div className = "row">
                    <button value = "7" id = "7" className = "input" onClick={e => this.handleClick(e)}>7</button>
                    <button value = "8" id = "8" className = "input" onClick={e => this.handleClick(e)}>8</button>
                    <button value = "9" id = "9" className = "input" onClick={e => this.handleClick(e)}>9</button>
                    <button value = "/" id = "13" className = "input op" onClick={e => this.handleOperators(e)}>/</button>
                </div>
                <div className = "row">
                    <button id = "4" value = "4" className = "input" onClick={e => this.handleClick(e)}>4</button>
                    <button id = "5" value = "5" className = "input" onClick={e => this.handleClick(e)}>5</button>
                    <button id = "6" value = "6" className = "input" onClick={e => this.handleClick(e)}>6</button>
                    <button value = "*" id = "12" className = "input op" onClick={e => this.handleOperators(e)}>*</button>
                </div>
                <div className = "row">
                    <button id = "1" value = "1" className = "input" onClick={e => this.handleClick(e)}>1</button>
                    <button id = "2" value = "2" className = "input" onClick={e => this.handleClick(e)}>2</button>
                    <button id = "3" value = "3" className = "input" onClick={e => this.handleClick(e)}>3</button>
                    <button value = "-" id = "11" className = "input op" onClick={e => this.handleOperators(e)}>-</button>
                </div>
                <div className = "row">
                    <button id = "16" className = "input" onClick={this.handleClear}>Clear</button>
                    <button id = "0" value = "0" className = "input" onClick={e => this.handleClick(e)}>0</button>
                    <button value = "." id = "14" className = "input" onClick={e => this.handleClick(e)}>.</button>
                    <button value = "+" id = "10" className = "input op" onClick={e => this.handleOperators(e)}>+</button>
                </div>
                <div className = "row">
                    <button id = "back" className="input end" onClick={this.handleBackspace}>Backspace</button>
                    <button value = "=" id = "15" className = "input end op" onClick={this.handleEquals}>=</button>
                </div>
                <div id = "output">{this.state.history.map(item => {
                    return <p>{item}</p>
                })}</div>
                </div>
            </body>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'))