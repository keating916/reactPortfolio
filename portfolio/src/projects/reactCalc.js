import React from 'react';
import ReactDOM from 'react-dom';

function add(x, y) {
    return x + y
  }

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
        let all = /[\*\/\+\-]/
        let last = this.state.display.split(all)
        if(this.state.display === "0" && e.target.value != ".") {
            this.setState({display: e.target.value})
        }else if(e.target.value == "." && /\./g.test(last[last.length-1])) {
            return
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
        if(back.length == 0) {
            back = ["0"]
        }
        this.setState({display: back.join("")})
    }

    handleOperators(e) {
        let key = e.target.value;
        let al = /[\*\/\+\-]/
        let l = this.state.display.length-1;
        let dis = this.state.display
        if(key == "-") {
          if(dis[l] == "-") {
            this.setState(prevState => {
                return{display: prevState}
                })
          }else {
            this.setState({display: dis+key})
          }
        }else {
          if(al.test(dis[l-1]) && al.test(dis[l])) {
            dis = dis.split("")
            dis.splice(l-1,2,key)
            dis = dis.join("")
            this.setState({display: dis})
          }else if(al.test(dis[l])) {
            dis = dis.split("")
            dis.splice(l,1,key)
            dis = dis.join("")
            this.setState({display: dis})
          }else{
            this.setState({display: dis+key})
          }
        }
    }

    handleEquals() {
        let operators = [ "-","*", "/", "+"];
        let all = /[\*\/\+\-]/g
        let decimal = /./;
        let numbers = [];
        let n = this.state.display.split(all)
        n.map(e => numbers.push(parseFloat(e)))
        let len = numbers.length-1
        let ops = this.state.display.split("").filter(letter => all.test(letter))
        for(let i = 0; i < numbers.length; i++) {
          if(Number.isNaN(numbers[i]) && i !== len) {
            numbers.splice(i, 2, (0-numbers[i+1]))
          }else if(Number.isNaN(numbers[i]) && i == len) {
            numbers.pop();
            ops.pop();
          }
        }
        for(let x = 0; x < operators.length; x++) {
          while(ops.length > 0) {
                let t;
                let check;
                switch(ops[0]) {
                    case "-":
                        console.log("subract");
                        console.log(numbers, ops)
                        check = 1
                        numbers.splice(1, 1, (0-numbers[1]))
                        ops.splice(0, 1, "+")
                        console.log(numbers, ops)
                        break;
                    case "*":
                    console.log("times");
                        console.log(numbers[0] * numbers[1])
                        t = numbers[0] * numbers[1]
                    console.log(numbers, ops)
                        break; 
                    case "/":
                    console.log("divide");
                        t = numbers[0] / numbers[1]
                        break;
                    case "+":
                    console.log("add");
                        console.log(numbers, ops)
                        console.log(add(numbers[0], numbers[1]))
                        t = add(numbers[0], numbers[1])
                        break;
                }
              if(check == 1) {
                check = 0;
              }else {
                numbers.splice(0, 2, t);
                ops.splice(0, 1);
                console.log(numbers, ops)
              }
                
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
            <body id='calcContainer' class="projects">
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