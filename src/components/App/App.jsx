import { Component } from 'react';
import Button from '../Button';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            results: null
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(({results}) => {
                this.setState({loading: false, results})
            })
    }

    // componentDidUpdate() {
    //     console.log('Update');
    // }

    activate() {
        this.setState({isActive: true});
    }

    disactivate() {
        this.setState({isActive: false});
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (this.state.results) {
            return (
                <ul>
                    {
                        this.state.results.map(result => {
                            return (
                                <li key={result.name}>{result.name}</li>
                            );
                        })
                    }
                </ul>
            );
        }
        // console.log('Render');
        return (
            <div>App</div>
        );
    }
}

export default App;