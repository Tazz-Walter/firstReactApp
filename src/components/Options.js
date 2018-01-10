import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header"> 
            <h3 className="widget-header__title">Your Options </h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
                hidden={props.options.length === 0}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Add an option to get Started!</p>}
            {
                props.options.map((opt, index) => (
                    <Option
                        key={opt}
                        text={opt}
                        count={index+1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
        }
        
    </div>
);

export default Options;