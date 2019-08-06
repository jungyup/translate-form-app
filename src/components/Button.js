import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    // hook up context object to a class component
    // has to be called contextType
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : '전송';
        return (
            <button className="ui button primary">{text}</button>
        );
    }
}

export default Button;