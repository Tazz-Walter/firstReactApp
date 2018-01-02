class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subtitle = 'sub-Header time! give life a chance!'
        const options = ['One', 'Two', 'Three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    //override el constructor de Component asi no debemos llamar a bind() cada vez q se haga click
    //de esta manera al redefinir su constructor estamos bindeando/ligando desde su constructor
    constructor(props) { 
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {      
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((opt) => <Option key={opt} text={opt} />)
                }
                
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                <p>Options Component here: {this.props.text}</p>
            </div>
        );
    }
}
class AddOption extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    // }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();        
        
        if (option) {
        //    this.props.options.push(option);
           e.target.elements.option.value = "";                    
        }
        console.log(option);
        // console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>            
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));