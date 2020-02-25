import React from "react";

export default class RPS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            computerScore: 0,
            playerScore: 0,
            textColor: 'black',
            message: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(evt) {
        evt.preventDefault();
        let sel = Math.ceil(Math.random() *3)
        let pscore = this.state.playerScore;
        let cscore = this.state.computerScore;

        const compSel = sel == 1 ? "rock" : sel == 2 ? "paper" : "scissors";
        const playerSel = evt.target.value;
        console.log(`${compSel} ${playerSel}`)
        if(compSel == playerSel) {
            this.setState({message: `You both picked ${playerSel}`})
        }else {
            let playerNum = playerSel == "rock"? 1: playerSel == "paper"? 2: 3
            console.log(`${sel} ${playerNum}`)
            if(sel-playerNum == 1 || sel-playerNum == -2) {
                if(this.state.computerScore+1 > this.state.playerScore) {
                    this.setState({
                        message: `${compSel} beats ${playerSel}`,
                        computerScore: cscore+1,
                        textColor: "red"
                    })
                }else if(this.state.computerScore+1 == this.state.playerScore) {
                    this.setState({
                        message: `${compSel} beats ${playerSel}`,
                        computerScore: cscore+1,
                        textColor: "black"
                    })
                }else {
                    this.setState({
                        message: `${compSel} beats ${playerSel}`,
                        computerScore: cscore+1,
                    })
                }
            } else {
                if(this.state.playerScore+1 > this.state.computerScore) {
                    this.setState({
                        message: `${playerSel} beats ${compSel}`,
                        playerScore: pscore+1,
                        textColor: "green"
                    })
                }else if(this.state.playerScore+1 == this.state.computerScore) {
                    this.setState({
                        message: `${playerSel} beats ${compSel}`,
                        playerScore: pscore+1,
                        textColor: "black"
                    })
                }else {
                    this.setState({
                        message: `${playerSel} beats ${compSel}`,
                        playerScore: pscore+1,
                    })
                }
                
            }
        }
    }

    handleReset() {
        return
    }


    render() {
        return(
            <body>
                <h1>Play a game of Rock Paper, Scissors against the Computer!</h1>
                <h2 id="score" class="score" style={{color: this.state.textColor}}>Player: {this.state.playerScore}   Computer: {this.state.computerScore}</h2>
                <h2 id="displayMessage" style={{height: '10px'}}>{this.state.message}</h2>
                <div>
                    <form>
                        <button name="input" id="rock" value="rock" onClick={this.handleClick}>Rock</button>
                        <button name="input" id = "paper" value = "paper" onClick={this.handleClick}>Paper</button>
                        <button name="input" id="scissors" value="scissors" onClick={this.handleClick}>Scissors</button>
                        
                    </form>
                </div>
            </body>
        )
    }
}