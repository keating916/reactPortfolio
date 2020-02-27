import React from "react";

export default class Etch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: 4,
            color: "red",
            array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        }
        this.handleClear = this.handleClear.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleClear() {
        let l;
        const prom = (string) => {
            l = prompt(string, 16);
        }
        let x = 0
        let newArray = [];
        let primary = "How many squares across?"
        let secondary = "Sorry has to be a number between 4 and 40"
        while(Number.isNaN(parseInt(l))  || parseInt(l) < 4 || parseInt(l) > 40) {
            if(x == 0) {
                x++;
                prom(primary, 16)
            }else{prom(secondary, 16)};
        }
        for(let i = 0; i < l**2; i++) {
            newArray.push(i);
        }
        this.setState({columns: l, array: newArray})
    }

    handleColor() {
        let newColor ='#'+Math.floor(Math.random()*16777215).toString(16);
        this.setState({color: newColor})
    }

    handleMouseOver(evt) {
        console.log(evt.target.id)
        evt.target.style.backgroundColor = this.state.color
    }

    render() {
        const divGrid = (x) => {
            return(
                {display: 'grid',
                gridTemplateColumns: `repeat(${x}, 1fr)`,
                gridTemplateRows: `repeat(${x}, 1fr)`,
                height: '400px',
                width: '400px',
                border: '1px solid black',
                padding: 'auto'}
            )
        }
            
        return(
            <body >
                <div id = "header">
                    <div>
                        <h3>Click the button to reset the drawing area</h3>
                        <h3>You can also change the color!</h3>
                    </div>
                    <button id = "clear" onClick={this.handleClear}>Clear</button>
                    <button id="color" onClick={this.handleColor}>Change Color</button>
                </div>
                <div id = "etchContainer" style={divGrid(this.state.columns)}>
                    {this.state.array.map(i => <div id={i} onMouseOver={e => this.handleMouseOver(e)} style={{backgroundColor: "white"}} ></div>)}</div>
            </body>
        )
    }
}