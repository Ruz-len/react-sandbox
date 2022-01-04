import { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        console.log('Create');
    }

    componentDidMount() {
        console.log('Mount');
    }

    componentDidUpdate() {
        console.log('Update');
    }

    componentWillUnmount() {
        console.log('Dead');
    }

    render() {
        console.log('Render');
        return(
            <button onClick={this.props.onClick}>{this.props.label}</button>
        );
    }
}

export default Button;