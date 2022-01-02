import { Component } from "react";
import Header from '../Header';

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
            </div>
        );
    }
}

export default App;