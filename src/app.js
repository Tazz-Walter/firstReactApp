class IndecisionApp extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>What If?? Sub-Header</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button> What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                <p>Options Component here</p>
            </div>
        );
    }
}
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));