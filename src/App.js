import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Components
//import {FieldButton} from "./Components/FieldButton/FieldButton";
import {TikTakToeButton} from "./Components/TikTakToeButton/TikTakToeButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 1,
            round: 0,
            field: [[0,0,0],
                    [0,0,0],
                    [0,0,0]],
            won: false,
        };
        this.changeTurn = this.changeTurn.bind(this);
        this.changeField = this.changeField.bind(this);
        this.checkField = this.checkField.bind(this);
    }
    checkField() {
        console.log("checkField");

        let f = this.state.field;
        let i = 1;
        for(; i <= 2; i++) {
            //horizontal
            if (f[0][0] === i && f[0][1] === i && f[0][2] === i) {
                this.setState({won: true});
                break;
            }
            else if (f[1][0] === i && f[1][1] === i && f[1][2] === i) {
                this.setState({won: true});
                break;
            }
            else if (f[2][0] === i && f[2][1] === i && f[2][2] === i) {
                this.setState({won: true});
                break;
            }
            //vertical
            else if (f[0][0] === i && f[1][0] === i && f[2][0] === i) {
                this.setState({won: true});
                break;
            }
            else if (f[0][1] === i && f[1][1] === i && f[2][1] === i) {
                this.setState({won: true});
                break;
            }
            else if (f[0][2] === i && f[1][2] === i && f[2][2] === i) {
                this.setState({won: true});
                break;
            }
            //diagonal
            else if (f[0][0] === i && f[1][1] === i && f[2][2] === i) {
                this.setState({won: true});
                break;
            }
            else if (f[0][2] === i && f[1][1] === i && f[2][0] === i) {
                this.setState({won: true});
                break;
            }
        }

        if(this.state.round === 9) {
            this.setState({ won: -1});
        }
    }
    changeTurn() {
        this.setState({turn: this.state.turn === 1 ? 2 : 1})
    }
    changeField(id) {
        id -= 1;
        let field2 = this.state.field;
        let column = id % 3;
        let row = -1;
        if(id < 3) {
            row = 0;
        } else if(id < 6) {
            row = 1;
        } else if(id < 9) {
            row = 2;
        } else {
            console.log("dafuquee, id:"+id);
        }

        field2[row][column] = this.state.turn;
        this.setState({field: field2, round: this.state.round += 1});
        this.checkField();

        //print Field
        console.log("=====!=====");
        console.log(field2[0]);
        console.log(field2[1]);
        console.log(field2[2]);
    }

    render() {
        if(this.state.won === false) {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to a round of TikTakToe</h2>
                    </div>
                    <p className="App-intro">
                        Let us play! <br/>
                    </p>
                    <div className="column">
                        <div className="row">
                            <TikTakToeButton id={1} changeTurn={this.changeTurn} changeField={this.changeField} player={this.state.turn} field={this.state.field}/>
                            <TikTakToeButton id={2} changeTurn={this.changeTurn} changeField={this.changeField} player={this.state.turn} field={this.state.field}/>
                            <TikTakToeButton id={3} changeTurn={this.changeTurn} changeField={this.changeField} player={this.state.turn} field={this.state.field}/>
                        </div>
                        <div className="row">
                            <TikTakToeButton id={4} changeTurn={this.changeTurn} changeField={this.changeField} player={this.state.turn} field={this.state.field}/>
                            <TikTakToeButton id={5} changeTurn={this.changeTurn} changeField={this.changeField} player={this.state.turn} field={this.state.field}/>
                            <TikTakToeButton id={6} changeTurn={this.changeTurn} changeField={this.changeField} player={this.state.turn} field={this.state.field}/>
                        </div>
                        <div className="row">
                            <TikTakToeButton id={7} changeTurn={this.changeTurn} changeField={this.changeField} player={this.state.turn} field={this.state.field}/>
                            <TikTakToeButton id={8} changeTurn={this.changeTurn} changeField={this.changeField} player={this.state.turn} field={this.state.field}/>
                            <TikTakToeButton id={9} changeTurn={this.changeTurn} changeField={this.changeField} player={this.state.turn} field={this.state.field}/>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.state.won === true) {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Suuuuuuuuuper!</h2>
                    </div>
                    <h2>{"Player " + (this.state.turn === 1 ? 2 : 1) + " won"}</h2>
                </div>
            );
        }
        else if(this.state.won === -1) {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Ohhhhhhhh D:</h2>
                    </div>
                    <h2>{"It's a draw"}</h2>
                </div>
            );
        }

    }
}

export default App;
