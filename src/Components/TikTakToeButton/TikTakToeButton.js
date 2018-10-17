import React from "react";

class TikTakToeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            player: 0
        }
    };
    handleClick = () => {
        if(this.state.clicked === false) {
            this.setState({player: this.props.player, clicked: true});
            let funcTurn = this.props.changeTurn;
            let funcField = this.props.changeField;
            funcField(this.props.id);
            funcTurn();
        }
    };
    render() {
        return (
            <button className={this.state.clicked === false ? "but0" : "but1"} onClick={this.handleClick} >
                <a>{this.state.player === 0 ? "__" : this.state.player === 1 ? "X" : "O"}</a>
            </button>
        )
    };
}

export {TikTakToeButton};