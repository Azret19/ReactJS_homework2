import React from "react";

class Red extends React.Component {
    constructor(props) {
        super(props);

        this.state = {  }

        this.handleClickRed = this.handleClickRed.bind(this);

    }

    handleClickRed() {
        this.setState({bgColor: 'red'});
    }

    render() {
        let styles = {};
        if (this.state.bgColor) {
            styles.backgroundColor = this.state.bgColor;
        }
        return (
            <button className='Red-Color' onClick={ this.handleClickRed } style={styles} />
        );
    }
}

class Blue extends React.Component {
    constructor(props) {
        super(props);

        this.state = {  }

        this.handleClickBlue = this.handleClickBlue.bind(this);

    }

    handleClickBlue() {
        this.setState({bgColor: 'blue'});
    }

    render() {
        let styles = {};
        if (this.state.bgColor) {
            styles.backgroundColor = this.state.bgColor;
        }
        return (
            <button className= 'Blue-Color' onClick={ this.handleClickBlue } style={styles} />
        );
    }
}

class Squares extends React.Component {
    render() {
        return (
            <div className="Squares-color">
                    <Red/>
                    <Blue/>
            </div>
        )
    }
}

export default Squares

