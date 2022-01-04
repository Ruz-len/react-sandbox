import { Component } from "react";
import Header from '../Header';
import Starter from '../Starter';

class App extends Component {
    constructor () {
        super();
        this.state = {
            locale: 'eng',
            
            langpacks: {
                ru: {
                    logo: 'Логотип',
                    header1: 'Заголовок 1',
                    header2: 'Заголовок 2',
                    header3: 'Заголовок 3',
                    header4: 'Заголовок 4',
                    header5: 'Заголовок 5',
                    starterHeader: 'Заголовок стартовой страницы'
                },
                eng: {
                    logo: 'Logo',
                    header1: 'Header 1',
                    header2: 'Header 2',
                    header3: 'Header 3',
                    header4: 'Header 4',
                    header5: 'Header 5',
                    starterHeader: 'Header of starter page'
                }
            }  
        }
    }

    changeLocale = (locale) => {
        this.setState({locale})
    }
   
    render() {
        return (
            <div className="app">
                <Header 
                    langpacks={this.state.langpacks} 
                    locale={this.state.locale} 
                    changeLocale={this.changeLocale}
                />
                <Starter />
            </div>
        );
    }
}

export default App;