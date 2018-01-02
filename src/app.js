class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            title: 'Indecision',
            subitle: 'sub-Header time! give life a chance!',
            options: []
        }
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        });
    }

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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    render(){        
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
                <User name='Walter' age={31} />
            </div>
        );
    }
}
//changing to stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
//changing to stateless functional component
const Action = (props) => {    
    return (
        <div>
            <button                 
            onClick={props.handlePick}                
            disabled={!props.hasOptions}
            >
                What should I do?
            </button>                
        </div>
    );    
};
//changing to stateless functional component
const Options = (props) => {        
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((opt) => <Option key={opt} text={opt} />)
            }               
        </div>
    );    
};
//changing to stateless functional component
const Option = (props) => {    
        return (
            <div>
                <p>Options Component here: {props.text}</p>
            </div>
        );    
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const err = this.props.handleAddOption(option);        
        this.setState(() => {
            return {
                error : err
            };
        });
        e.target.elements.option.value = "";
    }
    render() {
        return (
            <div>            
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>            
        );
    }
}
//changing to stateless functional component
const User = (props) => {
    return (
        <div>
            <p> Name: {props.name} </p>
            <p> Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));