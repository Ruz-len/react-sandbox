import { Component } from "react";
import Counter from "../Counter";

class App extends Component {
    constructor () {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        const { count } = this.state;

        const addOne = (amount) => {
            this.setState( {count: count + amount});
        }

        return (
            <div className="app">
                <Counter addOne={ addOne } count={ count } />
            </div>
        );
    }
}

export default App;