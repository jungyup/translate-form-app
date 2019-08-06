import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {

    state = { langaugae: 'english' };

    onLanguageChange = langaugae => {
        this.setState({ langaugae });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag kr" onClick={() => this.onLanguageChange('korean')} />
                </div>
                <LanguageContext.Provider value={this.state.langaugae}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    }
};

export default App;