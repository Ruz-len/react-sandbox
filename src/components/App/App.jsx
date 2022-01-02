import { Component } from "react";
import Header from '../Header';
import Starter from '../Starter';

class App extends Component {
    constructor () {
        super();
        this.state = {
            count: 0
        }
    }

    


    render() {
        return (
            <div className="app">
                <Header />
                <Starter />
            </div>
        );
    }
}

export default App;