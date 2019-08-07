import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    
    // hook up context object to a class component
    // has to be called contextType
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : '이름';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;