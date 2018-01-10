import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            subtitle: 'sub-Header time! give life a chance!',
            // options: props.options
            options: []
        }
    }
    //life cicle methods
    componentDidMount() {
        try {
            const json = localStorage.getItem('opciones');
            const opt = JSON.parse(json);
            if (opt) {
                this.setState(() => ({ options: opt }));
            }
            // console.log('se monta\dispara antes que el componente se cargue');
        } catch (error) {
            //do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('opciones', json);
        }
        // console.log('se dispara cuando algo del componente se actualiza ya sea State o props');
    }
    componentWillUnmount() {
        console.log('se dispara cuando se desmonta o desaparece el componente');
    }
    handleDeleteOptions() {
        //Refactoring-> Un forma mas simplificada de hacer lo mismo usando ES6 
        this.setState(() => ({ options: [] }));
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // });
    };

    handleDeleteOption(option) {

        this.setState((prevState) => ({
            //para remover opciones individuales con filter si son iguales lo borra 
            options: prevState.options.filter((opt) => opt !== option) //si es true lo deja y si es false lo borra
        })
        );

    };

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const optionSelected = this.state.options[randomNum];
        alert(optionSelected);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value';
            //indexOf significa q encontre uno igual en el array y si es mayor a -1 es por q encotraste 1
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));

    };

    render() {
        return (
            <div>
                <Header subtitle={this.state.subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <User name='Walter' age={31} />
            </div>
        );
    }
}
// IndecisionApp.defaultProps = {
//     options : []
// }

//changing to stateless functional component
const User = (props) => {
    return (
        <div>
            <p> Name: {props.name} </p>
            <p> Age: {props.age}</p>
        </div>
    )
}