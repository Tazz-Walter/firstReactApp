import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();        
        const option = e.target.elements.option.value.trim();
        const err = this.props.handleAddOption(option);
        this.setState(() => ({ error: err }));

        if (!err) {
            e.target.elements.option.value = "";
        }
    }
    verificar(e) {
        e.preventDefault();
        console.log(e.target.elements.caja1.value);
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button placeholder="Insert Option" className="button">Add Option</button>
                </form>
            </div>
        );
    }
}