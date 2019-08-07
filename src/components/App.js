import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {

    state = { langaugae: 'english', color: 'primary' };

    onLanguageChange = (langaugae, color) => {
        this.setState({ langaugae, color });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english', 'primary')} />
                    <i className="flag kr" onClick={() => this.onLanguageChange('korean', 'green')} />
                </div>
                <ColorContext.Provider value={this.state.color}>
                    <LanguageContext.Provider value={this.state.langaugae}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
};

export default App;